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

const ConfirmationEmail = (userEmail, token) => `
  <html>
    <body>
      <div style="${styles.container}">
        <h1 style="${styles.header}">Welcome to CSS Game!</h1>
        <p style="${styles.paragraph}">Hi there,</p>
        <p style="${styles.paragraph}">
          You have chosen to register using your email address.
          <br />
          It will serve you as a backup in case you forget your password.
        </p>
        <p style="${styles.paragraph}">
          To activate your email address click on the button below:
        </p>
        <a href="http://localhost:8080/verify/${token}" style="${styles.button}">Verify</a>
        <p style="${styles.paragraph}">Happy coding!</p>
        <p style="${styles.paragraph}">
          Best regards,
          <br />
          The CSS Game Team
        </p>
        <div style="${styles.footer}">
          <p>
            If you didn't create an account with CSS Game, please ignore this
            email.
          </p>
        </div>
      </div>
    </body>
  </html>
`;

export default ConfirmationEmail;
