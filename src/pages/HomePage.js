import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES, TRACKS } from "../constants";
import homeImage from "../assets/img/home.png";
import home1Image from "../assets/img/home1.png";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

// 랜덤 이미지 선택
const homeImages = [homeImage, home1Image];

const HomeContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  background-color: rgb(245, 245, 245);

  @media (max-width: 768px) {
    height: auto;
    justify-content: flex-start;
    padding-top: 0;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.$bgImage});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    background: none;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    background: none;
  }
`;

const MobileImage = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const InputContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
    margin-top: 0;
    margin-bottom: 40px;
    padding: 35px 30px;
    width: 350px;
    flex-direction: column;
    gap: 18px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 320px;
    padding: 30px 25px;
    gap: 15px;
    margin-top: 0;
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

const InputGroup = styled.div`
  width: 100%;
`;

const Select = styled.select`
  padding: 16px;
  font-size: 18px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  background-color: #f9f9f9;
  transition: all 0.3s;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 12px rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 14px;
    padding-right: 40px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const StartButton = styled.button`
  position: absolute;
  bottom: 10vh;
  right: 10vw;
  background-color: orangered;
  color: white;
  padding: 24px 48px;
  font-size: 36px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 69, 0, 0.4);

  &:hover {
    background-color: #ff4500;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 69, 0, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [track, setTrack] = useState("");

  // 컴포넌트가 마운트될 때 한 번만 랜덤 이미지 선택
  const randomImage = useMemo(() => {
    return homeImages[Math.floor(Math.random() * homeImages.length)];
  }, []);

  const handleStart = () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요!");
      return;
    }
    if (!track) {
      alert("트랙을 선택해주세요!");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userTrack", track);
    navigate(ROUTES.TEST);
  };

  return (
    <HomeContainer>
      <BackgroundImage $bgImage={randomImage}>
        <MobileImage src={randomImage} alt="DISC Test" />
      </BackgroundImage>
      <StartButton onClick={() => navigate("/name")}>START</StartButton>
      <InputContainer>
        <Title>DISC 업무 타입 테스트</Title>
        <InputGroup>
          <Input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Select value={track} onChange={(e) => setTrack(e.target.value)}>
            <option value="">트랙을 선택하세요</option>
            {TRACKS.map((trackOption) => (
              <option key={trackOption} value={trackOption}>
                {trackOption}
              </option>
            ))}
          </Select>
        </InputGroup>
        <ButtonContainer>
          <Button onClick={handleStart}>START</Button>
        </ButtonContainer>
      </InputContainer>
    </HomeContainer>
  );
}
