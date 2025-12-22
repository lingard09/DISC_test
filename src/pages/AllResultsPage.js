import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DISC_DATA, ROUTES } from "../constants";
import DiscModal from "../components/disc/DiscModal";

const Logo = styled.h1`
  font-size: 68px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin: 20px 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 15px;
  }
`;

const DiscImage = styled.img`
  width: auto;
  height: 400px;
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
    max-width: 300px;
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    margin: 30px 0;
    padding-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    padding-bottom: 20px;
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
    <div>
      <Logo>DISC 업무 타입</Logo>
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
        <HomeButton onClick={() => navigate(ROUTES.HOME)}>
          홈으로 돌아가기
        </HomeButton>
      </ButtonContainer>

      {selectedDisc && (
        <DiscModal discData={selectedDisc} onClose={handleClose} />
      )}
    </div>
  );
}

export default AllResultsPage;
