'use server';
import { sql } from '@vercel/postgres';

export async function SaveMessage(data) {
  try {
    // Vercel Postgres uses backticks (`) with the sql helper
    await sql`
      INSERT INTO contacts (username, email, message) 
      VALUES (${data.username}, ${data.email}, ${data.message})
    `;
   
    return { success: true, Message: "Message sent successfully!" };
  } catch (e) {
    console.error(e);
    return { success: false, Message: "Error: Message not sent", Error: e.message };
  }
}
