import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ success: false, error: "SMTP konfigurace chybí" }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      // DON'T use this in production!
      rejectUnauthorized: false,
    },
  })

  try {
    await transporter.sendMail({
      from:    `"${name}" <${email}>`,
      to:      process.env.EMAIL_USER!,
      subject: `Nová zpráva od ${name}`,
      text:    `Jméno: ${name}\nE-mail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error("Email error:", err)
    const errorMessage = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
