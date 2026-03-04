'use server';
import { sql } from '@vercel/postgres';

export async function SaveMessage(data) {
  try {
    await sql`
      INSERT INTO contacts (username, email, message) 
      VALUES (${data.username}, ${data.email}, ${data.message})
    `;
   
    return { success: true, Message: "Message sent successfully!" };
  } catch (e) {
    console.error("Database Error:", e);
    return { success: false, Message: "Error: Message not sent", Error: e.message };
  }
}
