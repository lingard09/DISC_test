import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResultType1.module.css";
import { useUserInfo } from "./hooks/useUserInfo";
import { DISC_DATA } from "./constants/discTypes";

const ResultPage = ({ discType }) => {
  const navigate = useNavigate();
  const { userName, userTrack, loading, error } = useUserInfo();

  const discData = DISC_DATA.find((data) => data.id === discType);

  if (loading) {
    return <div className={styles.greenbox}>로딩 중...</div>;
  }

  if (error) {
    return <div className={styles.greenbox}>{error}</div>;
  }

  if (!discData) {
    return <div className={styles.greenbox}>잘못된 유형입니다.</div>;
  }

  const handleViewAll = () => {
    navigate("/final");
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

export default ResultPage;
