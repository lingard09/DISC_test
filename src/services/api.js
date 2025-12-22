import axios from "axios";
import { API_ENDPOINTS } from "../constants/api";

// API 서비스
export const authService = {
  // 회원가입
  signUp: async (name, track, password) => {
    const response = await axios.post(API_ENDPOINTS.SIGN_UP, {
      name,
      track,
      password,
    });
    return response.data;
  },

  // 로그인
  login: async (name, password) => {
    const response = await axios.post(API_ENDPOINTS.LOGIN, {
      name,
      password,
    });
    return response.data;
  },

  // 사용자 정보 조회
  getUserInfo: async (memberID) => {
    const response = await axios.get(API_ENDPOINTS.USER_INFO(memberID));
    return response.data;
  },
};

// 로컬 스토리지 관리
export const storageService = {
  setMemberID: (memberID) => {
    window.localStorage.setItem("memberID", memberID);
  },

  getMemberID: () => {
    return window.localStorage.getItem("memberID");
  },

  removeMemberID: () => {
    window.localStorage.removeItem("memberID");
  },
};
