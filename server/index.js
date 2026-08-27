import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message, interest } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT || "info@zip-bolt.com",
    replyTo: email,
    subject: subject || `Contact Form Inquiry from ${name}`,
    html: `
      <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0a1738;">
        <h2 style="color: #2a56c6; margin-bottom: 8px;">New Contact Form Submission</h2>
        <p style="color: #5b6475; margin-bottom: 24px;">You received a new message from the ZipAsset website contact form.</p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff; background: #f6f8ff; font-weight: 700; width: 140px;">Name</td>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff; background: #f6f8ff; font-weight: 700;">Email</td>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff;">${escapeHtml(email)}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff; background: #f6f8ff; font-weight: 700;">Phone</td>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff;">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${subject ? `
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff; background: #f6f8ff; font-weight: 700;">Subject</td>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff;">${escapeHtml(subject)}</td>
          </tr>` : ""}
          ${interest ? `
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff; background: #f6f8ff; font-weight: 700;">Interest</td>
            <td style="padding: 10px 14px; border: 1px solid #dbe4ff;">${escapeHtml(interest)}</td>
          </tr>` : ""}
        </table>

        <div style="background: #f6f8ff; border: 1px solid #dbe4ff; border-radius: 12px; padding: 16px;">
          <h3 style="margin: 0 0 8px; font-size: 14px; color: #2a56c6;">Message</h3>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.7; color: #334155;">${escapeHtml(message)}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
          This message was sent via the ZipAsset contact form.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.listen(PORT, () => {
  console.log(`Contact server running on port ${PORT}`);
});