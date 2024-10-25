import React, { useContext, useState } from "react";
import styles from "../profile-styles.module.css";
import { UserContext } from "@/contexts/UserContext";
import useEditDescription from "../hooks/useEditDescription";
import SuccessMessage from "@/components/alerts/SuccessMessage";
import editIcon from "@images/icons/edit.png";
import closeIcon from "@images/icons/close4.webp";
import saveIcon from "@images/icons/save.webp";

const MAX_LENGTH = 500;
const MIN_LENGTH = 10;

const EditableContent = ({ isShowed, index, description, levelId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const descriptionLen = newDescription?.length || 0;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const context = useContext(UserContext);
  const { editDescription, loading } = useEditDescription();
  const { user } = context;

  const descriptionId = `description-${levelId}`;
  const editAreaId = `edit-description-${levelId}`;
  const errorId = `error-${levelId}`;
  const counterId = `counter-${levelId}`;

  const saveChange = async () => {
    if (descriptionLen < MIN_LENGTH) {
      setError(`Description must be at least ${MIN_LENGTH} characters long`);
      return;
    }

    if (description === newDescription) {
      setError("Your new text is the same as the old one.");
      return;
    }
    try {
      await editDescription(levelId, user.name, newDescription);
      setIsEditing(false);
      setError(null);
      setSuccess("Description was successfully edit!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setNewDescription(description || "");
    setError(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewDescription(description || "");
    setError(null);
  };

  const handleChange = (e) => {
    if (!isEdited) {
      setIsEdited(true);
    }
    setNewDescription(e.target.value);
  };

  return (
    <>
      <div
        className={
          isShowed.index === index + 1 && isShowed.active
            ? `${styles.levelContent} ${styles.open}`
            : `${styles.levelContent}`
        }
      >
        <div className={styles.levelDescription}>
          <p className={styles.description}>
            {description ? description : "There is no description"}
          </p>
          {isEditing ? (
            <button className={styles.primaryButton} onClick={handleCancel}>
              <img src={closeIcon} alt="close icon" width={16} />
              <span>Close</span>
            </button>
          ) : (
            <button className={styles.primaryButton} onClick={handleEdit}>
              <img src={editIcon} alt="edit icon" width={16} />
              <span>Edit</span>
            </button>
          )}

          {isEditing && (
            <div className={styles.formWrapper}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveChange();
                }}
                className={styles.editForm}
              >
                <textarea
                  id={editAreaId}
                  value={newDescription}
                  onChange={handleChange}
                  className={styles.editTextarea}
                  placeholder="Enter description..."
                  rows={4}
                  minLength={MIN_LENGTH}
                  maxLength={MAX_LENGTH}
                />
                <span className={styles.counter} id={counterId}>
                  {descriptionLen}/500
                </span>
                {error && (
                  <div
                    id={errorId}
                    className={styles.errorMessage}
                    role="alert"
                    tabIndex={-1}
                  >
                    {error}
                  </div>
                )}
                <button
                  aria-busy={loading}
                  disabled={!isEdited || loading || !newDescription.trim()}
                  type="submit"
                  className={styles.primaryButton}
                >
                  <img src={saveIcon} alt="save icon" width={16} />
                  <span>{loading ? "Saving..." : "Save"}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      {success && <SuccessMessage headline="Success" text={success} />}
    </>
  );
};

export default EditableContent;
