import React, { useState } from "react";
import { X, Lock, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./LevelDashboard.module.css";
import { useChangePassword } from "@/utils/queries/useChangePassword";

const ChangePasswordModal = ({ isOpen, onClose, userId }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleChangePassword, loading, error } = useChangePassword();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setPassword("");
      setConfirmPassword("");
      setSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const result = await handleChangePassword(userId, password);
      if (!result.success) {
        throw new Error(result.message || "Failed to change password");
      }

      console.log("Result:", result);

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setPassword("");
        setConfirmPassword("");
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {success ? "Password Changed Successfully" : "Change Password"}
          </h3>
          <button
            className={styles.closeButton}
            onClick={() => {
              onClose();
              setPassword("");
              setConfirmPassword("");
              setSuccess(false);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className={styles.successMessage}>
            <CheckCircle className="w-6 h-6 text-green-500" />
            <p>Your password has been successfully changed</p>
            <p className={styles.successSubtext}>
              You can now use your new password to log in
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                <Lock className="w-3 h-3" strokeWidth={1} />
                <span className={styles.labelText}>New Password:</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  type="password"
                  className={`${styles.input} ${
                    error ? styles.inputError : ""
                  }`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter new password"
                  required
                  //minLength={8}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                <Lock className="w-3 h-3" strokeWidth={1} />
                <span className={styles.labelText}>Confirm Password:</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="confirmPassword"
                  type="password"
                  className={`${styles.input} ${
                    error ? styles.inputError : ""
                  }`}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="Confirm new password"
                  required
                  //minLength={8}
                />
              </div>
            </div>

            {error && (
              <div className={styles.errorMessage}>
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className={styles.error}>{error}</p>
              </div>
            )}

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  onClose();
                  setPassword("");
                  setConfirmPassword("");
                }}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || !password || !confirmPassword}
              >
                {isSubmitting ? "Changing..." : "Change Password"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePasswordModal;
