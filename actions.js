'use server';
import { sql } from '@vercel/postgres';

export async function SaveMessage(data) {
   const {username,email,message} = data;


  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({ 

    service: 'gmail',
    auth: {
      user: "saadmirzapak@gmail.com", 
      pass: "mbwx fhml nkcq apfa", 
    },
  })
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${username} (${email})`,
    text: message,
     html: `
    <div style="font-family: sans-serif; max-width: 500px; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
      <h2 style="color: #2563eb; margin-top: 0;">Portfolio Inquiry</h2>
      
      <p style="margin: 10px 0;"><strong>Name:</strong> ${username}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date().toLocaleString('en-GB')}</p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      
      <p style="color: #666; font-size: 12px; text-transform: uppercase;">Message Content</p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.5;">
        ${message}
      </div>
      
      <a href="mailto:${email}" style="display: inline-block; margin-top: 20px; color: #2563eb; text-decoration: none; font-weight: bold;">
        Click to Reply →
      </a>
    </div>
  `
  };
  

   

 


  try {
    const result = await sql`
      INSERT INTO contacts (username, email, message) 
      VALUES (${username}, ${email}, ${message})
    `;
 if(result){
   await transporter.sendMail(mailOptions);
 }
    return { success: true, Message: "Message sent successfully!" };
  } catch (e) {
    console.error("Database Error:", e);
    console.log("Mail Options:", mailOptions);
    console.log("Transporter Config:", transporter.options);
    console.log("Result:", result);
    return { success: false, Message: "Error: Message not sent", Error: e.message };
  }
}
