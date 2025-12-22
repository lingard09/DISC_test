import React from "react";
import styles from "../../styles/Result.module.css";

const DiscModal = ({ discData, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalbg} onClick={handleBackgroundClick}>
      <div className={styles.modal}>
        <img
          src={discData.detailImage}
          alt={discData.name}
          className={styles.modalImage}
        />
        <div className={styles.modaltitle}>
          <div className={styles.modalkey}>{discData.keyword}</div>
        </div>
        <div className={styles.modaldescription}>{discData.tips}</div>
        <div className={styles.cbox}>
          <button className={styles.close} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscModal;
