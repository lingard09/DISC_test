import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useUserInfo } from "../hooks/useUserInfo.jsx";
import { DISC_DATA } from "../constants/index.jsx";
import ResultDisplay from "../components/disc/ResultDisplay.jsx";
import LoadingSpinner from "../components/common/LoadingSpinner.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";

const ResultPage = () => {
  const { type } = useParams();
  const { userName, userTrack, loading, error } = useUserInfo();

  const discData = DISC_DATA.find((data) => data.id === type);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!discData) {
    return <Navigate to="/" replace />;
  }

  return (
    <ResultDisplay
      userName={userName}
      userTrack={userTrack}
      discData={discData}
    />
  );
};

export default ResultPage;
