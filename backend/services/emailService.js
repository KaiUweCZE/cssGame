import { Resend } from "resend";
import dotenv from "dotenv";
import ConfirmationEmail from "../emailTemplates/ConfirmationEmail.js";
import ResetPasswordEmail from "../emailTemplates/ResetPasswordEmail.js";


dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(userEmail, token) {
  const htmlContent = ConfirmationEmail(userEmail, token);
  try {
    const { data } = await resend.emails.send({
      from: "noreply@css-game.com",
      to: userEmail,
      subject: "Hello World",
      html: htmlContent,
      //text: "Email sender send you this post, awesome!",
    });

    console.log("Email sent successfully:", data);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}


export async function sendResetPasswordEmail(userEmail, token) {
  const htmlContent = ResetPasswordEmail(userEmail, token);
  try {
    const { data } = await resend.emails.send({
      from: "noreply@css-game.com",
      to: userEmail,
      subject: "Reset your password",
      html: htmlContent,
      //text: "Email sender send you this post, awesome!",
    });

    console.log("Email sent successfully:", data);
    return { success: true };    
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}