'use server';
import { sql } from '@vercel/postgres';
import nodemailer from 'nodemailer'; 

export async function SaveMessage(data) {
  const { username, email, message } = data;

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
    subject: `New message from ${username}`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
        <h2 style="color: #2563eb; margin-top: 0;">Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('en-GB')}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
        <a href="mailto:${email}" style="display: inline-block; margin-top: 20px; color: #2563eb; text-decoration: none; font-weight: bold;">Reply to User →</a>
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
