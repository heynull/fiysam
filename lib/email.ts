import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { firstName, lastName, email, phone, service, message } = data;

  // Email content
  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #E8A020; padding: 20px; text-align: center; }
        .header h1 { color: #080A0C; margin: 0; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-top: 5px; padding: 10px; background: #fff; border-radius: 4px; border: 1px solid #ddd; }
        .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📩 New Enquiry from Fiysam Energy</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">${firstName} ${lastName}</div>
          </div>
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${email}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">${phone}</div>
          </div>
          <div class="field">
            <div class="field-label">Service Required:</div>
            <div class="field-value">${service}</div>
          </div>
          <div class="field">
            <div class="field-label">Message:</div>
            <div class="field-value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent from the Fiysam Energy contact form.</p>
          <p>© ${new Date().getFullYear()} Fiysam Energy. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Email options
  const mailOptions = {
    from: `"Fiysam Energy Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: `New Enquiry from ${firstName} ${lastName} - ${service}`,
    html: emailContent,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send email. Please try again later.' };
  }
}