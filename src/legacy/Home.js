import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.home}>
      <button className={styles.button3} onClick={handleStart}>
        START
      </button>
    </div>
  );
}
