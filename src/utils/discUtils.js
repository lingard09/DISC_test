// 배열에서 최댓값의 인덱스를 찾는 함수
export const findMaxIndex = (array) => {
  let maxIdx = 0;
  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
      maxIdx = i;
    }
  }

  return maxIdx;
};

// DISC 점수 업데이트 함수
export const updateDiscScore = (currentScores, selectedIndex) => {
  const newScores = [...currentScores];

  // 선택하지 않은 항목들의 점수 감소
  for (let i = 0; i < newScores.length; i++) {
    if (i !== selectedIndex) {
      newScores[i] -= 10;
    }
  }

  return newScores;
};

// DISC 타입 인덱스를 라우트 경로로 변환
export const getDiscRoute = (index) => {
  const routes = ["/result/d", "/result/i", "/result/s", "/result/c"];
  return routes[index] || "/";
};
