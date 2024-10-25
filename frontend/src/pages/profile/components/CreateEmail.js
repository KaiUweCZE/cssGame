import { useCreateToken } from "@/utils/queries/createVerificationToken";
import { useSendEmail } from "@/utils/queries/sendEmail";
import React, { useState } from "react";
import { useAddEmail } from "@/utils/queries/useAddEmail";
import styles from "../profile-styles.module.css";

const CreateEmail = ({ icon, userId }) => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSendEmail } = useSendEmail();
  const { createToken } = useCreateToken();
  const { addEmail } = useAddEmail();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const resultAdd = await addEmail(userId, email);

      const tokenResponse = await createToken(userId);
      if (!tokenResponse.success) {
        throw new Error("Failed to create verification token");
      }

      const token = tokenResponse.token.token;
      console.log("token is this: ", tokenResponse, token);
      const resultSend = await handleSendEmail(email, token);
      console.log("resul send: ", resultSend);

      if (resultSend.success) {
        setSuccess(true);
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div role="region" aria-label="email form">
      <div className={styles.item}>
        <img src={icon} alt="email icon" width={24} />
        <div className={styles.itemInfo}>
          <button
            className={`primary-button`}
            onClick={() => setActive(!active)}
            onKeyDown={(e) => e.key === "Escape" && active && setActive(false)}
            aria-expanded={active}
            aria-controls="email-form"
          >
            {active ? "Close" : "Add Email"}
          </button>
        </div>
      </div>
      {active && (
        <form
          id="email-form"
          className={styles.emailForm}
          onSubmit={handleSubmit}
        >
          <input
            id="email"
            className={styles.profileInput}
            type="email"
            required
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={error ? "email-error" : undefined}
            aria-invalid={error ? "true" : "false"}
            autoComplete="email"
          />
          <button
            className="primary-button"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Confirm Email"}
          </button>
          {error && <span className={styles.error}>{error}</span>}
          {success && (
            <span className={styles.correct}>
              Confrimation email was send to your email!
            </span>
          )}
        </form>
      )}
    </div>
  );
};

export default CreateEmail;
