import React, { useEffect } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(55, 52, 52, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 640px;
  height: 760px;
  padding: 20px;
  text-align: center;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 450px;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 90%;
    max-width: 380px;
    gap: 15px;
    padding: 15px;
  }
`;

const ModalImage = styled.img`
  padding-top: 0px;
  width: 370px;
  height: auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

const ModalTitle = styled.div`
  background-color: black;
  color: white;
  width: 370px;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 320px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 6px;
  }
`;

const ModalKeyword = styled.div`
  font-size: 30px;
  color: white;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ModalDescription = styled.div`
  width: 460px;
  height: auto;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 30px;
  font-size: 20px;
  text-align: left;
  padding: 20px;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 310px;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 270px;
    font-size: 16px;
    padding: 12px;
    border-radius: 30px;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 5px;
`;

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: darkred;
    color: lightgray;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 40px;
    font-size: 16px;
  }
`;

const DiscModal = ({ discData, onClose }) => {
  useEffect(() => {
    // 모달이 열릴 때 body 스크롤 막기
    document.body.style.overflow = "hidden";

    // 모달이 닫힐 때 body 스크롤 복원
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <Modal>
        <ModalImage src={discData.detailImage} alt={discData.name} />
        <ModalTitle>
          <ModalKeyword>{discData.keyword}</ModalKeyword>
        </ModalTitle>
        <ModalDescription>{discData.tips}</ModalDescription>
        <ButtonContainer>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonContainer>
      </Modal>
    </ModalBackground>
  );
};

export default DiscModal;
