import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Read incoming form data
    const formData = await request.json();
    console.log('Received form data:', formData);

    // Validate required fields
    const requiredFields = ['name', 'phone', 'from', 'to', 'date'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields',
          missingFields,
          message: `Please fill in all required fields: ${missingFields.join(', ')}`
        },
        { status: 400 }
      );
    }

    // Check if email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { 
          success: false,
          error: 'Server configuration error',
          message: 'Email service is not properly configured. Please try again later.'
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // For development only
      }
    });

    // Email content
    const mailOptions = {
      from: `NT Tourism <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: formData.email,
      subject: `New Booking Inquiry - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New ${formData.returnDate ? 'Round Trip' : 'One Way'} Booking Inquiry
          </h2>

          <h3>👤 Customer Details:</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email || 'Not provided'}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>

          <h3>🚌 Travel Information:</h3>
          <p><strong>From:</strong> ${formData.from}</p>
          <p><strong>To:</strong> ${formData.to}</p>
          <p><strong>Departure Date:</strong> ${formData.date || 'Not provided'}</p>
          ${formData.returnDate ? `<p><strong>Return Date:</strong> ${formData.returnDate}</p>` : ''}
          <p><strong>Passengers:</strong> ${formData.passengers || '1'}</p>
          <p><strong>Bus Type:</strong> ${formData.busType || 'Not specified'}</p>
          <p><strong>Travel Class:</strong> ${formData.travelClass || 'Standard'}</p>

          ${formData.message ? `
            <h3>📝 Additional Message:</h3>
            <p>${formData.message}</p>
          ` : ''}

          <p style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 0.9em;">
            This inquiry was submitted through NT Tourism Website at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error logging
    let errorMessage = 'Failed to send inquiry. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your email credentials.';
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid email address. Please check the email and try again.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to the email server. Please check your internet connection.';
    } else if (error.response) {
      console.error('SMTP Error Response:', error.response);
      errorMessage = `Email server error: ${error.response}`;
    }
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send inquiry',
        message: errorMessage,
        code: error.code,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}