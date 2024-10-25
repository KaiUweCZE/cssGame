import React, { useEffect } from "react";
import styles from "./SuccessMessage.module.css";

const SuccessMessage = ({ headline, text }) => {
  useEffect(() => {
    const toast = document.getElementById("success-toast");
    if (toast) {
      toast.focus();
    }
  }, []);

  return (
    <div
      id="success-toast"
      className={styles.toast}
      role="status"
      aria-live="polite"
      tabIndex={-1}
    >
      <div className={styles.toastContent}>
        <div className={styles.icon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={styles.checkIcon}
            aria-hidden="true"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.message}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
