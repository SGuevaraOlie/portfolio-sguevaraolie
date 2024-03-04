import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['sguevaraolie.dev@gmail.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>¡Gracias por ponerte en contacto conmigo!</p>
          <p>Mensaje enviado:</p>
          <p>{message}</p> 
          <p>De: {email}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}