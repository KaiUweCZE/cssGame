import React, { useState } from "react";
import styles from "./LevelDashboard.module.css";
import { Key, Mail, User } from "lucide-react";
import AddEmailModal from "./AddEmailModal";

const BoxProfile2 = ({ user }) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleAddEmail = async (email) => {
    // Zde implementuj volání API pro přidání emailu
    try {
      // await addEmailToUser(user.id, email);
      console.log("Adding email:", email);
      // Po úspěšném přidání můžeš aktualizovat stav uživatele
    } catch (error) {
      throw new Error("Failed to add email");
    }
  };

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
          {user.email && <p>UserEmail</p>}
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => setIsEmailModalOpen(true)}
            >
              <Mail className="w-4 h-4" color="white" strokeWidth={1} />
              Add Email
            </button>
            <button className={styles.secondaryButton}>
              <Key className="w-4 h-4" />
              Change Password
            </button>
          </div>
        </div>
      </section>
      <AddEmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onSubmit={handleAddEmail}
      />
    </>
  );
};

export default BoxProfile2;
