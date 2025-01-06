import React, { useEffect } from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {

  useEffect(() => {
    document.title = '404 - Page Not Found | CSS Game';
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>.404</h1>
        <p className={styles.subtitle}>
          Looks like this selector doesn't match any elements
        </p>
      </div>

      <div className={styles.codeContainer}>
        <div className={styles.code}>
          <span className={styles.codeProp}>page</span>
          <span className={styles.codeError}>:not-found</span> {"{"}
          <div className={styles.codeIndent}>
            <span className={styles.codeProp}>status</span>:{" "}
            <span className={styles.codeValue}>404</span>;
            <br />
            <span className={styles.codeProp}>message</span>:{" "}
            <span className={styles.codeValue}>"Page not found"</span>;
          </div>
          {"}"}
        </div>
      </div>

      <Link to="/" className={styles.button}>
        <svg
          className={styles.buttonIcon}
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Return Home
      </Link>
    </div>
  );
};

export default ErrorPage;
