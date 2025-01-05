import React, { useState } from "react";
import styles from "./LevelDashboard.module.css";
import { Key, Mail, User } from "lucide-react";
import AddEmailModal from "./AddEmailModal";
import ChangePasswordModal from "./ChangePasswordModal";

const BoxProfile = ({ user }) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return (
    <>
      <section 
        className={`${styles.card} ${styles.section}`}
        aria-labelledby="account-info-title"
      >
        <h2 className={styles.cardTitle} id="account-info-title">
          <User className="w-6 h-6" aria-hidden="true" />
          Account Info
        </h2>
        <div className={styles.accountInfo} role="group" aria-label="Account details">
          <div className={styles.usernameRow}>
            <span className={styles.labelText} id="username-label">Username:</span>
            <span aria-labelledby="username-label">{user.name}</span>
          </div>
          {user.email && (
            <div className={styles.emailRow}>
              <span className={styles.labelText} id="email-label">Email:</span>
              <span aria-labelledby="email-label">{user.email}</span>
            </div>
          )}
          <div className={styles.buttonGroup} role="group" aria-label="Account actions">
            {!user.email && (
              <button
                className={styles.primaryButton}
                onClick={() => setIsEmailModalOpen(true)}
                aria-label="Add email address"
              >
                <Mail className="w-4 h-4" color="white" strokeWidth={1} aria-hidden="true" />
                Add Email
              </button>
            )}
            <button
              className={styles.secondaryButton}
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              aria-label="Change password"
              aria-expanded={isChangingPassword}
            >
              <Key className="w-4 h-4" aria-hidden="true" />
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
