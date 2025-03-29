// lib/nodemailer.js
import nodemailer from 'nodemailer';

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Remplacez par votre serveur SMTP
  port: 465,
  secure: true,  
  auth: {
    user: process.env.SMTP_USER, // Adresse e-mail de votre compte SMTP
    pass: process.env.SMTP_PASSWORD, // Mot de passe de votre compte SMTP
  },
});

export default transporter;