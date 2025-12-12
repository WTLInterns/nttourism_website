import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Read incoming form data
    const body = await request.json();
    const {
      name,
      email,
      phone,
      travelDate,
      from,
      to,
      passengers,
      message
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !from || !to) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'infonttourism@gmail.com',  // COMPANY EMAIL
        pass: 'fpnk ywsn mpjj bxnv',      // APP PASSWORD
      }
    });

    // Email (TO COMPANY ONLY)
    const mailOptions = {
      from: 'infonttourism@gmail.com', // Must be authenticated email
      to: 'infonttourism@gmail.com', // RECEIVER → COMPANY EMAIL
      replyTo: email, // Customer email for replies
      subject: `New Booking Inquiry - ${name} (${email})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Booking Inquiry
          </h2>

          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <h3>Travel Information:</h3>
          <p><strong>From:</strong> ${from}</p>
          <p><strong>To:</strong> ${to}</p>
          <p><strong>Travel Date:</strong> ${travelDate || 'Not provided'}</p>
          <p><strong>Passengers:</strong> ${passengers || 'Not provided'}</p>

          ${
            message
              ? `
          <h3>Additional Message:</h3>
          <p>${message}</p>
          `
              : ''
          }

          <p style="margin-top: 20px; color: #6b7280;">
            This inquiry was submitted through NT Tourism Website
          </p>
        </div>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'Your inquiry has been sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
