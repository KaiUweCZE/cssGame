import React, { useState } from "react";
import { X, Mail, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./LevelDashboard.module.css";
import { useSendEmail } from "@/utils/queries/sendEmail";
import { useCreateToken } from "@/utils/queries/createVerificationToken";
import { useAddEmail } from "@/utils/queries/useAddEmail";

const AddEmailModal = ({ isOpen, onClose, userId }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSendEmail } = useSendEmail();
  const { createToken } = useCreateToken();
  const { addEmail } = useAddEmail();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      // 1. Add email to user
      console.log("adding email:", userId);

      const addEmailResult = await addEmail(userId, email);
      if (!addEmailResult?.success) {
        throw new Error("Failed to add email");
      }

      // 2. Create verification token
      const tokenResponse = await createToken(userId);
      if (!tokenResponse?.success) {
        throw new Error("Failed to generate verification token");
      }
      console.log("token is this: ", tokenResponse);

      const token = tokenResponse.token.token;
      // 3. Send verification email
      const sendResult = await handleSendEmail(email, token);
      if (!sendResult?.success) {
        throw new Error("Failed to send verification email");
      }

      setSuccess(true);
      // Automaticky zavřeme modal po 3 sekundách úspěchu
      setTimeout(() => {
        onClose();
        setEmail("");
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError(err.message || "Failed to add email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setEmail("");
      setError("");
      setSuccess(false);
    }
  };

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle} id="email-modal-title">
            {success ? "Email Added Successfully" : "Add Email Address"}
          </h3>
          <button
            className={styles.closeButton}
            onClick={() => {
              onClose();
              setEmail("");
              setError("");
              setSuccess(false);
            }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {success ? (
          <div 
            className={styles.successMessage}
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="w-6 h-6 text-green-500" aria-hidden="true" />
            <p>Verification email has been sent to {email}</p>
            <p className={styles.successSubtext}>
              Please check your inbox to verify your email address
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                <Mail className="w-3 h-3" strokeWidth={1} />
                <span className={styles.labelText}>Email:</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  className={`${styles.input} ${
                    error ? styles.inputError : ""
                  }`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              {error && (
                <div className={styles.errorMessage}>
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className={styles.error}>{error}</p>
                </div>
              )}
            </div>
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  onClose();
                  setEmail("");
                  setError("");
                }}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? "Adding..." : "Add Email"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddEmailModal;
