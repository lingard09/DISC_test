// 색상을 어둡게 만드는 유틸리티 함수
export const darkenColor = (color, percent) => {
  const num = color.match(/\d+/g).map(Number);
  const r = Math.max(0, num[0] - (num[0] * percent) / 100);
  const g = Math.max(0, num[1] - (num[1] * percent) / 100);
  const b = Math.max(0, num[2] - (num[2] * percent) / 100);
  return `rgb(${r}, ${g}, ${b})`;
};
