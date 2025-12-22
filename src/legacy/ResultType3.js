import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResultType3.module.css";
import axios from 'axios';


const ResultType3=() =>{
    const location = useLocation();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userTrack, setUserTrack] = useState("");

    const [currentUserName, setCurrentUserName] = useState(userName);
    const [selectedJob, setSelectedJob] = useState(null); // 선택된 작업을 위한 상태

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


    return(
        <div>
        <div className={styles.bluebox}>
            <div className={styles.text}>
            <div>{userName} [{userTrack}]님의 결과입니다.</div><br/>
                <br/>S는 안정형(Steadiness)으로 #인내심이 있고 다른 사람을 돕는 것을 즐깁니다.<br/>
                그들은 #협력과 팀 성취에 자신의 협력이 도움이 됐을 때, 그리고 진심 어린 #감사를 받았을 때 시너지를 발휘되죠.<br/>
                #안정성 유지를 우선시하여 대체로 #침착하며, #예측 가능하고 #일관성 있는 동료로 평가받는 편입니다. 
            </div>
            <button className={styles.boxp} onClick={navigatePurchase}>모든 결과 보기</button>

        </div>
        
        </div>
    )
}

export default ResultType3