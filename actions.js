'use server';
import { sql } from '@vercel/postgres';
import nodemailer from 'nodemailer'; 

export async function SaveMessage(data) {
  const { username, email, message,subject } = data;

  // 1. Setup Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "saadmirzapak@gmail.com",
      pass: "mbwx fhml nkcq apfa", // 
    },
  });

   const mailOptions = {
    from: `"Portfolio" <saadmirzapak@gmail.com>`,
    to: "saadmirzapak@gmail.com",
    replyTo: email,
    subject: `Message from ${username}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
        <p><strong>From:</strong> ${username} (${email})</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('en-GB')}</p>
        
        <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #e2e8f0; background: #f8fafc;">
          ${message}
        </div>

        <p style="margin-top: 20px;">
          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">Click to Reply</a>
        </p>
      </div>
    `
  };


  try {
   
    await sql`
      INSERT INTO contacts (username, email, message) 
      VALUES (${username}, ${email}, ${message})
    `;

   
    await transporter.sendMail(mailOptions);

    return { success: true, Message: "Message sent successfully!" };
  } catch (e) {
    console.error("Server Error:", e);
    return { success: false, Message: "Error: Message not sent", Error: e.message };
  }
}
