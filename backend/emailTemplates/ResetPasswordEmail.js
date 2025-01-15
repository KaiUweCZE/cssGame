const styles = {
  container:
    "display: grid; width: 90%; max-width: 700px; margin: 0 auto; background-color: #f4f4f4; padding: 1rem; border-radius: .35rem; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1); font-family: Fredoka, sans-serif; margin-bottom: 1rem;",
  header:
    "color: #2c3e50; text-align: center; font-size: 1.5rem; margin-bottom: 1.7rem;",
  paragraph: "color: #333; line-height: 1.6; margin-bottom: 1rem;",
  button:
    "display: grid; background-color: #11626C; border: none; font-weight: bold; color: white; padding: .5rem 2rem; font-size: 1.25rem; margin: .5rem auto; cursor: pointer; border-radius: .35rem; text-decoration: none; text-align: center;",
  footer: "margin-top: 2rem; font-size: 12px; color: #666; text-align: center;",
};

const ResetPasswordEmail = (userEmail, token) => `
  <html>
    <body>
      <div style="${styles.container}">
        <h1 style="${styles.header}">Reset Your Password</h1>
        <p style="${styles.paragraph}">Hi there,</p>
        <p style="${styles.paragraph}">
          We received a request to reset the password for your CSS Game account.
          <br />
          If you didn't make this request, you can safely ignore this email.
        </p>
        <p style="${styles.paragraph}">
          To reset your password, click the button below:
        </p>
        <a href="http://localhost:8080/reset-password/${token}" style="${styles.button}">Reset Password</a>
        <p style="${styles.paragraph}">
          This link will expire in 1 hour for security reasons.
          <br />
          If you need to request a new password reset, you can do so on the sign-in page.
        </p>
        <p style="${styles.paragraph}">
          Best regards,
          <br />
          The CSS Game Team
        </p>
        <div style="${styles.footer}">
          <p>
            If you did not request a password reset, please ignore this email or contact support
            if you believe this is an error.
          </p>
        </div>
      </div>
    </body>
  </html>
`;

export default ResetPasswordEmail;
