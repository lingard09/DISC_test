import React from "react";
import styles from "../../styles/Common.module.css";

const LoadingSpinner = ({ message = "로딩 중..." }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>{message}</p>
    </div>
  );
};

export default LoadingSpinner;
