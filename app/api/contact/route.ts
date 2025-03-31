import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { ad, email, mesaj } = await req.json();

        if (!ad || !email || !mesaj) {
            return NextResponse.json({ error: "Tüm alanlar gereklidir" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Yeni İletişim Formu Mesajı",
            text: `Ad Soyad: ${ad}\nEmail: ${email}\nMesaj: ${mesaj}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email gönderildi" });
    } catch (error) {
        console.error("Email gönderme hatası:", error);
        return NextResponse.json({ error: "Email gönderme başarısız" }, { status: 500 });
    }
}
