import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%);
  padding: 20px;
`;

const ResultBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 25px 20px;
    border-radius: 15px;
  }
`;

const ResultImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto 30px;
  display: block;
  border-radius: 15px;

  @media (max-width: 768px) {
    max-width: 400px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const ResultText = styled.div`
  font-size: 24px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const ResultHeader = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 18px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const ViewAllButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px 32px;
  font-size: 20px;
  font-family: "Jua", sans-serif;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 14px 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

const ResultDisplay = ({ userName, userTrack, discData }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(ROUTES.ALL_RESULTS);
  };

  return (
    <Container>
      <ResultBox>
        {discData.resultImage && (
          <ResultImage src={discData.resultImage} alt={discData.name} />
        )}
        <ResultText>
          <ResultHeader>
            {userName} [{userTrack}]님의 결과
          </ResultHeader>
          {discData.description}
        </ResultText>
        <ViewAllButton onClick={handleViewAll}>모든 결과 보기</ViewAllButton>
      </ResultBox>
    </Container>
  );
};

export default ResultDisplay;
