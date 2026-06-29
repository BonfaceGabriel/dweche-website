"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function contactAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const hp = formData.get("website") as string;
  if (hp) {
    return { success: true, message: "Thank you!" };
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  const errors: Record<string, string> = {};
  if (!name || name.length < 2) errors.name = "Name is required";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "A valid email is required";
  if (!subject || subject.length < 2) errors.subject = "Subject is required";
  if (!message || message.length < 10)
    errors.message = "Message must be at least 10 characters";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below", errors };
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_TO || "hello@dweche.africa",
      replyTo: email,
      subject: `[Dweche Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        `Message:`,
        message,
      ].join("\n"),
    });

    return {
      success: true,
      message:
        "Message sent successfully! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us directly at hello@dweche.africa.",
    };
  }
}
