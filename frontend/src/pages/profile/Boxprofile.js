import React, { useState } from "react";
import styles from "./LevelDashboard.module.css";
import { Key, Mail, User } from "lucide-react";
import AddEmailModal from "./AddEmailModal";
import ChangePasswordModal from "./ChangePassworModal";

const BoxProfile = ({ user }) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return (
    <>
      <section className={`${styles.card} ${styles.section}`}>
        <h2 className={styles.cardTitle}>
          <User className="w-6 h-6" />
          Account Info
        </h2>
        <div className={styles.accountInfo}>
          <div className={styles.usernameRow}>
            <span className={styles.labelText}>Username:</span>
            <span>{user.name}</span>
          </div>
          {user.email && <p>Email: {user.email}</p>}
          <div className={styles.buttonGroup}>
            {!user.email && (
              <button
                className={styles.primaryButton}
                onClick={() => setIsEmailModalOpen(true)}
              >
                <Mail className="w-4 h-4" color="white" strokeWidth={1} />
                Add Email
              </button>
            )}
            <button
              className={styles.secondaryButton}
              onClick={() => setIsChangingPassword(!isChangingPassword)}
            >
              <Key className="w-4 h-4" />
              Change Password
            </button>
          </div>
        </div>
      </section>
      <AddEmailModal
        isOpen={isEmailModalOpen}
        userId={user.id}
        onClose={() => setIsEmailModalOpen(false)}
      />
      {isChangingPassword && (
        <ChangePasswordModal
          isOpen={isChangingPassword}
          userId={user.id}
          onClose={() => setIsChangingPassword(false)}
        />
      )}
    </>
  );
};

export default BoxProfile;
