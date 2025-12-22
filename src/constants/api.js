// API 엔드포인트 상수
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://disc-test-89ar.onrender.com";

export const API_ENDPOINTS = {
  SIGN_UP: `${API_BASE_URL}/typeTest/signUp`,
  LOGIN: `${API_BASE_URL}/typeTest/login`,
  USER_INFO: (memberID) => `${API_BASE_URL}/typeTest/userInfo/${memberID}`,
};

export default API_BASE_URL;
