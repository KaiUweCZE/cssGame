import React, { useState, useCallback } from "react";
import styles from "../../LevelDashboard.module.css";
import { AlertTriangle } from "lucide-react";
import { useDeleteUser } from "../../hooks/useDeleteUser";

const DeleteUserModal = ({ isOpen, onClose, userId }) => {
  const [password, setPassword] = useState("");
  const { deleteUser, loading, error } = useDeleteUser();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (userId === "65b90f264eb9004c9b46cf75") {
      console.log("Cannot delete admin account");
      
      return
    }
    if (!password.trim()) {
      return;
    }

  

    try {
      await deleteUser(userId, password);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }, [deleteUser, userId, password]);

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
                disabled={loading}
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
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${styles.primaryButton} ${styles.deleteButton}`}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
