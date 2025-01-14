import React, { useState } from "react";
import styles from "../LevelDashboard.module.css";
import { Key, Mail, User } from "lucide-react";
import AddEmailModal from "./modals/AddEmailModal";
import ChangePasswordModal from "./modals/ChangePasswordModal";
import DeleteUserButton from "./DeleteUserButton";
import RemoveMailButton from "./RemoveMailButton";

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
          {user.email && user.emailVerified  && (
            <div className={styles.emailRow}>
              <span className={styles.labelText} id="email-label">Email:</span>
              <span aria-labelledby="email-label">{user.email}</span>
              <RemoveMailButton email={user.email} userId={user.id} />
            </div>
          )}
          <div className={styles.buttonGroup} role="group" aria-label="Account actions">
            {(!user.email || (user.email && !user.emailVerified)) && (
              <button
                className={styles.primaryButton}
                onClick={() => setIsEmailModalOpen(true)}
                aria-label="Add email address"
              >
                <Mail height={18} color="white" strokeWidth={2} aria-hidden="true" />
                Add Email
              </button>
            )}
            <button
              className={styles.secondaryButton}
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              aria-label="Change password"
              aria-expanded={isChangingPassword}
            >
              <Key height={20} aria-hidden="true" />
              Change Password
            </button>
            <DeleteUserButton userId={user.id} />
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
