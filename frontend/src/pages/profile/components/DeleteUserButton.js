import React, { useState } from 'react';
import styles from '../LevelDashboard.module.css';
import { Trash2 } from 'lucide-react';
import DeleteUserModal from './modals/DeleteUserModal';

const DeleteUserButton = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${styles.secondaryButton} ${styles.deleteButton}`}
        aria-label="Delete account"
      >
        <Trash2 aria-hidden="true" color='white' height={20}/>
        Delete Account
      </button>

      <DeleteUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={userId}
      />
    </>
  );
};

export default DeleteUserButton;