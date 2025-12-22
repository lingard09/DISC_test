import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES, TRACKS } from "../constants";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #d1daff 0%, #ffffff 100%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 45px 40px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  width: 450px;
  gap: 18px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 480px;
    padding: 42px 35px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 45px 25px;
    gap: 18px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 12px;
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

export default function NameInputPage() {
  const [name, setName] = useState("");
  const [track, setTrack] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!track) {
      alert("트랙을 선택해주세요.");
      return;
    }

    // 이름과 트랙을 localStorage에 저장
    localStorage.setItem("userName", name);
    localStorage.setItem("userTrack", track);

    // DISC 테스트 페이지로 이동
    navigate(ROUTES.TEST);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box>
      <Container>
        <Title>당신은 누구인가요?</Title>

        <InputGroup>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
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
          <Button onClick={handleSubmit}>시작하기</Button>
        </ButtonContainer>
      </Container>
    </Box>
  );
}
