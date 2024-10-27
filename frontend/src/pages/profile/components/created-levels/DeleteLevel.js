import React, { useState } from "react";
import styles from "../../profile-styles.module.css";
import useDeleteLevel from "../../hooks/useDeleteLevel";
import SuccessMessage from "@/components/alerts/SuccessMessage";
import { useClickOutside } from "@/utils/hooks/useClickOutside";

const DeleteLevel = ({
  levelId,
  levelName,
  specialClass,
  setActive,
  active,
}) => {
  const [deletedLevelName, setDeletedLevelName] = useState("");
  const { deleteLevel, loading } = useDeleteLevel();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  useClickOutside({
    className: styles.deleteBox,
    setState: setActive,
  });

  const handleDeleteLevel = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    if (!deletedLevelName.trim()) {
      setError("Please enter the level name to confirm deletion");
      setIsSubmitting(false);
      return;
    }

    if (deletedLevelName !== levelName) {
      setError("The level name you entered doesn't match. Please try again.");
      setIsSubmitting(false);
      return;
    }
    try {
      await deleteLevel(levelId, deletedLevelName);
      setActive({ index: 0, active: false });
      setSuccess("Level was successfully deleted");
    } catch (error) {
      setError(
        error.message ||
          "An error occurred while deleting the level. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    setDeletedLevelName(e.target.value);
    if (error) setError("");
  };
  return (
    <>
      <form
        className={
          specialClass
            ? `${styles.deleteBox} ${styles.active}`
            : styles.deleteBox
        }
        onSubmit={handleDeleteLevel}
      >
        <label>If you want to delete this level type his name:</label>
        <input
          className={styles.deleteInput}
          type="text"
          name="delete-level"
          id={`delete-level-${levelId}`}
          placeholder="Type in the name of the level"
          value={deletedLevelName}
          onChange={handleInputChange}
          autoComplete="off"
          disabled={isSubmitting}
        />
        <button type="submit" className={styles.deleteButton}>
          <span>delete</span>
        </button>
      </form>
      {success && <SuccessMessage headline="Success" text={success} />}
    </>
  );
};

export default DeleteLevel;
