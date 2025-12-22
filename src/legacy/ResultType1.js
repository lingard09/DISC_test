import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResultType1.module.css";
import axios from 'axios';

const ResultType1 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userTrack, setUserTrack] = useState("");

    const [selectedJob, setSelectedJob] = useState(null); // 선택된 작업을 위한 상태

    const [currentUserName, setCurrentUserName] = useState(userName);


    const navigatePurchase = () => {
        setUserName(currentUserName);
        navigate("/final", { state: { userName: currentUserName, job: selectedJob } });
    }; 

    useEffect(() => {
        const getUserName = async () => {
            const memberID = window.localStorage.getItem("memberID");
            console.log("memberID" + memberID);
            try{
                const getName = await axios.get("https://one3th-front-api.onrender.com/typeTest/userInfo/" + memberID);
                console.log(getName);
                setUserName(getName.data.name);
                setUserTrack(getName.data.track);
            } catch(error) {
                console.error(error)
            }
            }
            getUserName();
            

            
    })
    
    return (
        <div>
            < div className={styles.greenbox}>
          
                <div className={styles.text}>
                    <div>{userName} [{userTrack}]님의 결과입니다.</div><br/>
                    D는 주도형(Dominance)으로 자신의 의견에 강하게 주장하는 편이며, #경쟁과 #성공에 동기부여됩니다.<br/>
                    새로운 #도전을 받아 들이기 위해 늘 준비되어 있고, 목표한 #결과치를 #달성하는 것을 우선시하여 #의지가 강하고 #추진력과 #결단력이 있죠. <br/>
                    하지만 주변으로부터 종종 #직설적이다 보니 까다롭다는 말도 들을 수 있어요.
                </div>
-
                <button className={styles.button2} onClick={navigatePurchase}>모든 결과 보기</button>
               
            </div>
        </div>
    );
}

export default ResultType1;
