import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 30px 20px;
  margin-top: auto;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    gap: 6px;
    flex-direction: column;
  }
`;

const FooterLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  font-size: 14px;
  padding: 4px 12px;
  transition: all 0.3s ease;
  border-radius: 4px;
  position: relative;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: -4px;
    color: #7f8c8d;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 3px 10px;

    &:not(:last-child)::after {
      content: none;
    }
  }
`;

const Copyright = styled.p`
  margin: 15px 0 0 0;
  font-size: 14px;
  color: #95a5a6;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>DISC 업무 타입 테스트</FooterText>
        <FooterLinks>
          <FooterLink>made by 진희원, 김윤채, 박서연</FooterLink>
          <FooterLink>modified by 김원진</FooterLink>
          <FooterLink>owned by 멋쟁이사자처럼 한동대학교</FooterLink>
        </FooterLinks>
        <Copyright>© 2025 DISC Test. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
