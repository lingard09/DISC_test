import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResultType4.module.css";
import axios from 'axios';

const ResultType4=() =>{
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
        <div className={styles.pinkbox}>
            <div className={styles.text}>
            <div>{userName} [{userTrack}]님의 결과입니다.</div><br/>
                <br/>C는 신중형(Conscientiousness)으로 이 스타일의 소유자는 #전문적인 지식을 얻고 보여주며, #양질의 작업을 이행할 수 있는 상황에서 동기 부여받습니다.<br/>
                 #새로운 가정을 세워 #입증하는 것을 좋아하며 #정확성을 위해 다른 이들보다 더 #신중하고 #분석적이며 #체계적인 편이죠. 
            </div>
            <button className={styles.box1} onClick={navigatePurchase}>모든 결과 보기</button>
        </div>
        
        </div>
    )
}

export default ResultType4