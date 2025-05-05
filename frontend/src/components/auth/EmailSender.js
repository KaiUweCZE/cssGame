import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_CONFIRMATION_EMAIL } from "@/utils/queries/sendEmail";

const EmailSender = () => {
  const [email, setEmail] = useState("");
  const [sendEmail, { loading, error }] = useMutation(SEND_CONFIRMATION_EMAIL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail({ variables: { email } });
      alert("Email sent successfully!");
    } catch (err) {
      console.error("Failed to send email:", err);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send the mail?</h2>
      <input
        type="email"
        name=""
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Test Email"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default EmailSender;
