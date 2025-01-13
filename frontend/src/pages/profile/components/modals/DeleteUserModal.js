import React, { useState } from "react";
import styles from "../../LevelDashboard.module.css";
import { AlertTriangle } from "lucide-react";

const DeleteUserModal = ({ isOpen, onClose, userId }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement actual delete functionality
    console.log("Delete user with password:", password);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            <AlertTriangle aria-hidden="true" height={24} />
            Delete Account
          </h2>
        </div>
        <div className={styles.modalContent}>
          <p className={styles.error}>
            Warning: This action cannot be undone!
          </p>
          <p>
            Please enter your password to confirm account deletion.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="delete-password" className={styles.label}>
                Password:
              </label>
              <input
                id="delete-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            {error && (
              <p className={styles.error}>
                {error}
              </p>
            )}
            <div className={styles.modalActions}>
              <button
                type="button"
                onClick={onClose}
                className={styles.secondaryButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${styles.primaryButton} ${styles.deleteButton}`}
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
