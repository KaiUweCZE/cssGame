import React, { useContext, useState } from "react";
import styles from "../../LevelDashboard.module.css";
import { AlertTriangle } from "lucide-react";
import { useRemoveEmail } from "../../hooks/useRemoveEmail";
import { UserContext } from "@/contexts/UserContext";

const RemoveMailModal = ({ isOpen, onClose, email, userId }) => {
  const { removeEmail, loading } = useRemoveEmail();
  const [error, setError] = useState("");
  const { user, updateUser } = useContext(UserContext);

  const handleRemove = async () => {
    if (!userId) {
      setError("User not found");
      return;
    }

    const result = await removeEmail(userId);
    if (result.success) {
      updateUser({
        ...user,
        email: null,
        emailVerified: false,
      });
      onClose();
    } else {
      setError(result.error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            <AlertTriangle aria-hidden="true" height={24} />
            Remove Email
          </h2>
        </div>
        <div className={styles.modalContent}>
          <p>
            Are you sure you want to remove your email address ({email})?
          </p>
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
              type="button"
              onClick={handleRemove}
              className={`${styles.primaryButton} ${styles.deleteButton}`}
              disabled={loading}
            >
              {loading ? "Removing..." : "Remove"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveMailModal;
