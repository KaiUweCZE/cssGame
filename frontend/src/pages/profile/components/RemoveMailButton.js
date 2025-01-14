import React, { useState } from "react";
import styles from "../LevelDashboard.module.css";
import { Trash2, X } from "lucide-react";
import RemoveMailModal from "./modals/RemoveMailModal";

const RemoveMailButton = ({ email, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={styles.removeButton}
        aria-label="Remove email"
      >
        <Trash2 size={16} aria-hidden="true" color='#303030'/>
      </button>
      <RemoveMailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={email}
        userId={userId}
      />
    </>
  );
};

export default RemoveMailButton;