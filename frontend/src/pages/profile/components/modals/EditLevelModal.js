import React, { useContext, useRef, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import useEditDescription from "../../hooks/useEditDescription";
import SuccessMessage from "@/components/alerts/SuccessMessage";
import "./modal-styles.css";

const MIN_LENGTH = 10;
const MAX_LENGTH = 500;

const EditLevelModal = ({ onClose, level }) => {
  const modalRef = useRef(null);
  const [description, setDescription] = useState(level?.description || "");
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const { user } = useContext(UserContext);
  const { editDescription, loading } = useEditDescription();

  const handleChange = (e) => {
    if (!isEdited) {
      setIsEdited(true);
    }
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (description.length < MIN_LENGTH) {
      setError(`Description must be at least ${MIN_LENGTH} characters long`);
      return;
    }

    if (level.description === description) {
      setError("Your new text is the same as the old one.");
      return;
    }

    try {
      await editDescription(level.id, user.name, description);
      setError(null);
      setSuccess("Description was successfully edited!");
      setTimeout(() => {
        setSuccess("");
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{level.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              className="modal-textarea"
              value={description}
              onChange={handleChange}
              placeholder="Enter description..."
              rows={4}
              minLength={MIN_LENGTH}
              maxLength={MAX_LENGTH}
            />
            <span className="character-counter">
              {description.length}/{MAX_LENGTH}
            </span>
            {error && (
              <div className="error-message-modal" role="alert">
                {error}
              </div>
            )}
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="cancel-button">
              <span>Cancel</span>
            </button>
            <button
              type="submit"
              className="save-button"
              disabled={!isEdited || loading || !description.trim()}
            >
              <span>{loading ? "Saving..." : "Save Changes"}</span>
            </button>
          </div>
        </form>
      </div>
      {success && <SuccessMessage headline="Success" text={success} />}
    </div>
  );
};

export default EditLevelModal;
