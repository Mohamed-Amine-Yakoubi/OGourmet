import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { EMAIL_FROM, PASS } = process.env;
  const { sujet, email_user,  NomPrenom, html } =
    await request.json();

  if (!EMAIL_FROM || !PASS) {
    return NextResponse.json(
      { error: "Missing email credentials in environment variables" },
      { status: 500 }
    );
  }

  const mailOptions = {
    from: email_user,
    to: `O'Gourmet | <${EMAIL_FROM}>`,
    subject: `Nouveau Réclamation de ${NomPrenom} : ${sujet}`,
    html: html,
    headers: { "X-Entity-Ref-ID": "newmail" },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_FROM, pass: PASS },
    tls: { rejectUnauthorized: false },
  });

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to send email: ${err.message}` },
      { status: 500 }
    );
  }
}
