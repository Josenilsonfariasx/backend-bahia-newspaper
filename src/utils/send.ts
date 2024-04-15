import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'smtp', // Altere para o serviço de e-mail desejado, como 'gmail', 'hotmail', etc.
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true, // Defina como true se estiver usando SSL/TLS
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
export const send = (to, subject, body)=>{
  transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject,
    html: body
  })
}