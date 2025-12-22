
import React, { useEffect, useState } from 'react'; // useState 가져오기
import { useLocation } from 'react-router-dom'; // useLocation 임포트
import { useNavigate } from 'react-router-dom';
import styles from "./ResultType2.module.css";
import axios from 'axios';

const ResultType2=() =>{
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
        <div className={styles.yellowbox}>
            <div className={styles.text}>
            <div>{userName} [{userTrack}]님의 결과입니다.</div><br/>
                    i는 사교형(Influence)으로 이 유형은 속해 있는 사회로부터 #인정을 받기 원하며, 다양한 활동 및 관계에서 동기부여를 받습니다. <br/>
                    그들은 #행동력이 빠른 편이고, #긍정적인 에너지로 열정을 다해 #협력에 임하는 편이죠. <br/>
                    주변에서 #따뜻하며 #신뢰할 수 있는 사람이며, #자기주도적이라는 말을 자주 들을 거에요. 
            </div>
            <button className={styles.box1} onClick={navigatePurchase}>모든 결과 보기</button>

        </div>
        
        </div>
    )
}

export default ResultType2