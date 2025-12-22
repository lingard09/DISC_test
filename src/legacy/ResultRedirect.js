import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResultRedirect() {
    const location = useLocation();
    const navigate = useNavigate();
    const { userName, score } = location.state || { userName: "익명", score: 0 }; // 기본값 설정

    useEffect(() => {
        if (score >= 300) {
            navigate("/result1", { state: { userName, score } });
        } else if (score >= 200) {
            navigate("/result2", { state: { userName, score } });
        } else if (score >= 100) {
            navigate("/result3", { state: { userName, score } });
        } else {
            navigate("/result4", { state: { userName, score } });
        }
    }, [score, navigate, userName]);

    return <div>결과를 불러오는 중...</div>;
}

