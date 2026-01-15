'use server';
import { db } from '@/lib/db';

export async function SaveMessage(data) {


  try {
  
  await db.query(
      "INSERT INTO contacts (username, email, message) VALUES (?, ?, ?)",
      [data.username, data.email, data.message]
    );
   
    return { success: true , Message :"Message is sended "};
  } catch (e) {
    return { success: false , Message :"error message is not send" , Error: `error is ${e}` };
  }
}