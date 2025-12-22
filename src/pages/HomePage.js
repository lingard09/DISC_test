import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { ROUTES } from "../constants";

export default function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/name");
  };

  return (
    <div className={styles.home}>
      <button className={styles.button3} onClick={handleStart}>
        START
      </button>
    </div>
  );
}
