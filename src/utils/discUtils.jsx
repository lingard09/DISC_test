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

  // 선택한 항목의 점수 증가
  newScores[selectedIndex] += 10;

  return newScores;
};

// DISC 타입 인덱스를 라우트 경로로 변환
export const getDiscRoute = (index) => {
  const routes = ["/result/d", "/result/i", "/result/s", "/result/c"];
  return routes[index] || "/";
};
