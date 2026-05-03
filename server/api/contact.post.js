import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value, maxLength = 2000) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
};

const escapeHtml = (value) => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 254);
  const subject = cleanText(body.subject, 150);
  const message = cleanText(body.message, 5000);

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please complete all required fields.",
    });
  }

  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please enter a valid email address.",
    });
  }

  const config = useRuntimeConfig(event);

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing RESEND_API_KEY.",
    });
  }

  if (!config.contactEmailTo || !config.contactEmailFrom) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing contact email configuration.",
    });
  }

  const resend = new Resend(config.resendApiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

const { data, error } = await resend.emails.send({
  from: config.contactEmailFrom,
  to: [config.contactEmailTo],
  subject: `[Website Contact] ${subject}`,
  replyTo: email,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `,
  text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
  `,
});

  if (error) {
    console.error("Resend error:", error);

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email.",
    });
  }

  return {
    success: true,
    id: data?.id,
  };
});