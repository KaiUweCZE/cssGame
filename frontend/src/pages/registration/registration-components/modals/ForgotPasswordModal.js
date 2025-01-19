import React, { useState } from "react";
import { useResetPassword } from "@utils/queries/useResetPassword";
import { useCreateToken } from "@/utils/queries/createVerificationToken";
import { useGetUserByEmail } from "@/utils/queries/useGetUserByEmail";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { handleSendEmail } = useResetPassword();
  const { createToken } = useCreateToken();
  const { handleGetUserByEmail } = useGetUserByEmail();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("Starting password reset flow");
      const userId = await handleGetUserByEmail(email);
      console.log("Got userId:", userId);

      if (!userId) {
        setMessage(
          "If an account exists with this email, you will receive password reset instructions."
        );
        return;
      }

      const tokenResponse = await createToken(userId);
      console.log("Token response:", tokenResponse);

      if (!tokenResponse.success) {
        throw new Error(tokenResponse.message);
      }

      const result = await handleSendEmail(email, tokenResponse.token.token);
      console.log("Email send result:", result);

      if (!result.success) {
        throw new Error(result.error);
      }

      setMessage(
        "If an account exists with this email, you will receive password reset instructions."
      );
    } catch (error) {
      console.error("Reset password error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setMessage("");
    setEmail("");
    setError("");
  };

  if (!isOpen) return null;

  const isEmailValid = validateEmail(email);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="reset-password-title"
      aria-describedby="reset-password-description"
    >
      <div className="modal">
        {!message && <h2 id="reset-password-title">Reset Password</h2>}
        <div className="reset-password-content">
          {message ? (
            <>
              <p className="message" role="status">
                {message}
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="primary-button close-button"
              >
                <span>Close</span>
              </button>
            </>
          ) : (
            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <p id="reset-password-description">
                Enter your email address and we'll send you instructions to
                reset your password.
              </p>
              <div className="form-field">
                <label htmlFor="email" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  aria-required="true"
                  className={error ? "input-error" : ""}
                />
                {error && (
                  <span
                    id="email-error"
                    className="error-forgot-password"
                    role="alert"
                  >
                    {error}
                  </span>
                )}
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={handleClose}
                  className="secondary-button"
                  disabled={loading}
                >
                  <span>Cancel</span>
                </button>
                <button
                  type="submit"
                  className="primary-button"
                  disabled={loading || !isEmailValid}
                  aria-busy={loading}
                >
                  <span>{loading ? "Sending..." : "Send Reset Link"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
