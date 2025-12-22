// 입력값 유효성 검사
export const validateSignupForm = (name, track, password) => {
  if (!name.trim()) {
    return { isValid: false, message: "이름을 입력해주세요." };
  }

  if (!track) {
    return { isValid: false, message: "트랙을 선택해주세요." };
  }

  if (!password.trim()) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }

  if (password.length < 4) {
    return {
      isValid: false,
      message: "비밀번호는 최소 4자 이상이어야 합니다.",
    };
  }

  return { isValid: true };
};

export const validateLoginForm = (name, password) => {
  if (!name.trim()) {
    return { isValid: false, message: "이름을 입력해주세요." };
  }

  if (!password.trim()) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }

  return { isValid: true };
};
