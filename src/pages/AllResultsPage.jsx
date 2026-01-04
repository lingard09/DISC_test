import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DISC_DATA, ROUTES } from "../constants/index.jsx";
import DiscModal from "../components/disc/DiscModal.jsx";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  min-height: 100vh;
  background: rgb(245, 245, 245);

  @media (max-width: 768px) {
    gap: 40px;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    gap: 30px;
    padding: 15px 40px;
  }
`;

const Logo = styled.div`
  font-size: 68px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1400px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    height: auto;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const DiscImage = styled.img`
  width: auto;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 360px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    height: 200px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const HomeButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px 32px;
  font-size: 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);

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

const InfoLink = styled.a`
  color: #666;
  font-size: 16px;
  text-decoration: none;
  padding: 3px 10px;
  border-bottom: 2px solid #ddd;
  /* border-radius: 8px; */
  transition: all 0.3s ease;

  &:hover {
    color: #4caf50;
    border-color: #4caf50;
    /* background-color: rgba(76, 175, 80, 0.05); */
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 3px 6px;
    border-bottom: 1px solid #ddd;
  }
`;

function AllResultsPage() {
  const navigate = useNavigate();
  const [selectedDisc, setSelectedDisc] = useState(null);

  const handleDiscClick = (discData) => {
    setSelectedDisc(discData);
  };

  const handleClose = () => {
    setSelectedDisc(null);
  };

  return (
    <Box>
      <Logo>모든 결과 보기</Logo>
      <Container>
        {DISC_DATA.map((discData) => (
          <DiscImage
            key={discData.id}
            src={discData.image}
            alt={`${discData.name} 타입`}
            onClick={() => handleDiscClick(discData)}
          />
        ))}
      </Container>

      <ButtonContainer>
        <InfoLink
          href="https://blog.jandi.com/ko/2022/07/29/work-type-test/"
          target="_blank"
          rel="noopener noreferrer"
        >
          더 궁금하다면? 📖
        </InfoLink>
        <HomeButton onClick={() => navigate(ROUTES.HOME)}>
          홈으로 돌아가기
        </HomeButton>
      </ButtonContainer>

      {selectedDisc && (
        <DiscModal discData={selectedDisc} onClose={handleClose} />
      )}
    </Box>
  );
}

export default AllResultsPage;
