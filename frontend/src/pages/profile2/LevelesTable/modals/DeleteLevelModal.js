import React, { useState, useRef } from "react";
import useDeleteLevel from "../../../profile/hooks/useDeleteLevel";
import SuccessMessage from "@/components/alerts/SuccessMessage";
import "./modal-styles.css";

const DeleteLevelModal = ({ onClose, level, onDelete }) => {
  const modalRef = useRef(null);
  const [confirmName, setConfirmName] = useState("");
  const [success, setSuccess] = useState("");
  const { deleteLevel } = useDeleteLevel();
  const isConfirmed = confirmName === level.name;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setConfirmName("");
    }
  };

  const handleDelete = async () => {
    if (isConfirmed) {
      try {
        await deleteLevel(level.id, confirmName);
        setSuccess("Level was successfully deleted");
        onDelete(); // Trigger refetch
        setTimeout(() => {
          onClose();
          setConfirmName("");
        }, 1500); // Give time to show success message
      } catch (error) {
        console.error('Error deleting level:', error);
      }
    }
  };

  return (
    <div ref={modalRef} className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Delete Level</h2>
        <p>
          Are you sure you want to delete level "{level.name}"? This action
          cannot be undone.
        </p>
        <div>
          <p className="bold m-2">Type the level name to confirm deletion:</p>
          <input
            type="text"
            value={confirmName}
            onChange={(e) => setConfirmName(e.target.value)}
            placeholder="Enter level name"
            className="modal-input"
          />
        </div>
        <div className="modal-buttons">
          <button
            onClick={() => {
              onClose();
              setConfirmName("");
            }}
            className="cancel-button"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDelete}
            disabled={!isConfirmed}
            className="delete-button"
          >
            <span>Delete Level</span>
          </button>
        </div>
        {success && <SuccessMessage headline="Success" text={success} />}
      </div>
    </div>
  );
};

export default DeleteLevelModal;
