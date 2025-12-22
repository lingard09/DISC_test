import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Result.module.css";
import { ROUTES } from "../../constants";

const ResultDisplay = ({ userName, userTrack, discData }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(ROUTES.ALL_RESULTS);
  };

  return (
    <div>
      <div className={styles.greenbox}>
        <div className={styles.text}>
          <div>
            {userName} [{userTrack}]님의 결과입니다.
          </div>
          <br />
          {discData.description}
        </div>
        <button className={styles.button2} onClick={handleViewAll}>
          모든 결과 보기
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
