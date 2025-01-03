import React from "react";

const styles = {
  container: {
    display: "grid",
    width: "90%",
    maxWidth: "700px",
    margin: "0 auto",
    gap: "1rem",
    backgroundColor: "#ffffff",
    padding: "1rem",
    borderRadius: ".35rem",
    boxShadow:
      "0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)",
    fontFamily: "Arial, sans-serif",
    marginBottom: "1rem",
  },
  header: {
    color: "#4a4a4a",
    textAlign: "center",
    fontSize: "24px",
  },
  paragraph: {
    color: "#666666",
    lineHeight: 1.6,
  },
  button: {
    display: "gird",
    placeItems: "center",
    backgroundColor: "#11626C",
    border: "none",
    fontWeight: "bold",
    width: "fit-content",
    height: "fit-content",
    color: "white",
    paddingInline: "2rem",
    paddingBlock: ".5rem",
    fontSize: "1.25rem",
    marginBlock: ".5rem",
    cursor: "pointer",
    borderRadius: ".35rem",
    placeSelf: "center",
  },
  footer: {
    marginTop: "2rem",
    fontSize: "14px",
    color: "#666666",
    textAlign: "center",
  },
};

const ConfirmationEmail = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to CSS Game!</h1>
      <p style={styles.paragraph}>Hi there,</p>
      <p style={styles.paragraph}>
        You have chosen to register using your email address.
        <br />
        It will serve you as a backup in case you forget your password.
      </p>

      <p style={styles.paragraph}>
        To active your email address click on the button below:
      </p>
      <button style={styles.button}>verify</button>
      <p style={styles.paragraph}>Happy coding!</p>
      <p style={styles.paragraph}>
        Best regards,
        <br />
        The CSS Game Team
      </p>
      <div style={styles.footer}>
        <p>
          {" "}
          If you didn't create an account with CSS Game, please ignore this
          email.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationEmail;
