import dImage from "../assets/img/d.png";
import iImage from "../assets/img/i.png";
import sImage from "../assets/img/s.png";
import cImage from "../assets/img/c.png";
import dmImage from "../assets/img/dm.png";
import imImage from "../assets/img/im.png";
import smImage from "../assets/img/sm.png";
import cmImage from "../assets/img/cm.png";

// DISC 타입 정의
export const DISC_TYPES = {
  D: "D",
  I: "I",
  S: "S",
  C: "C",
};

// DISC 타입 데이터
export const DISC_DATA = [
  {
    id: "d",
    type: DISC_TYPES.D,
    name: "주도형",
    englishName: "Dominance",
    title: "The Winner",
    keyword: "#경쟁 #결단력 #직설적",
    description:
      "D는 주도형(Dominance)으로 자신의 의견에 강하게 주장하는 편이며, #경쟁과 #성공에 동기부여됩니다.\n새로운 #도전을 받아 들이기 위해 늘 준비되어 있고, 목표한 #결과치를 #달성하는 것을 우선시하여 #의지가 강하고 #추진력과 #결단력이 있죠.\n하지만 주변으로부터 종종 #직설적이다 보니 까다롭다는 말도 들을 수 있어요.",
    tips: "The Winner, D 타입과 함께 일할 땐\n✔️ 간단 명료하게 요점만 전하세요.\n✔️ 자율성에 니즈가 있는편! 존중해주세요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 그들이 자발적으로 시작할 수도록 해보세요.",
    image: dImage,
    detailImage: dmImage,
  },
  {
    id: "i",
    type: DISC_TYPES.I,
    name: "사교형",
    englishName: "Influence",
    title: "The Enthusiast",
    keyword: "#인정 #긍정 #협력",
    description:
      "I는 사교형(Influence)으로 #긍정적이고 #활발한 성격을 가지고 있습니다.\n#인간관계를 중시하며 #팀워크를 통해 목표를 달성하는 것을 선호합니다.\n주변 사람들과의 #소통과 #협력을 즐기며, 자신의 생각을 #표현하는 것을 좋아합니다.\n때로는 #충동적인 결정을 내릴 수 있으며, 세부 사항보다는 큰 그림을 보는 경향이 있습니다.",
    tips: "The Enthusiast, I 타입과 함께 일할 땐\n✔️ 그들의 생각을 글로 표현할 수 있게 해주세요.\n✔️ 글로 쓰여진 세부정보를 공유해야해요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 성과를 냈을 땐 공개적으로 알려주세요.",
    image: iImage,
    detailImage: imImage,
  },
  {
    id: "s",
    type: DISC_TYPES.S,
    name: "안정형",
    englishName: "Steadiness",
    title: "The Peacekeeper",
    keyword: "#침착 #인내심 #일관성",
    description:
      "S는 안정형(Steadiness)으로 #침착하고 #일관성 있는 업무 스타일을 가지고 있습니다.\n#협조적이며 #인내심이 강하고, #변화보다는 #안정을 선호합니다.\n팀원들을 #지원하고 #조화로운 분위기를 만드는 것을 중요하게 생각합니다.\n급격한 변화나 갑작스러운 결정에는 불편함을 느낄 수 있습니다.",
    tips: "The Peacekeeper, S 타입과 함께 일할 땐\n✔️ 지속적으로 안정감을 느낄 수 있도록 해야해요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 진실하고 진정한 감사 표현을 잊지마세요.",
    image: sImage,
    detailImage: smImage,
  },
  {
    id: "c",
    type: DISC_TYPES.C,
    name: "신중형",
    englishName: "Conscientiousness",
    title: "The Analyst",
    keyword: "#분석적 #체계적 #신중",
    description:
      "C는 신중형(Conscientiousness)으로 #분석적이고 #체계적인 접근을 선호합니다.\n#정확성과 #품질을 중시하며, #사실에 기반한 결정을 내립니다.\n#완벽을 추구하며 #세밀한 부분까지 신경 쓰는 경향이 있습니다.\n때로는 지나치게 신중하여 결정이 느려질 수 있으며, 비판을 받는 것에 민감할 수 있습니다.",
    tips: "The Analyst, C 타입과 함께 일할 땐\n✔️ 탄탄한 논리로 대화해보세요.\n✔️ 위트와 재치로 훈훈한 분위기가 좋을 거에요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 일을 시작할 때 착수할 수 있는 충분한 준비 시간을 주세요.",
    image: cImage,
    detailImage: cmImage,
  },
];

// DISC 질문 옵션
export const DISC_QUESTIONS = [
  ["단호한", "적극적인", "얌전한", "눈치 있는"],
  ["공격적인", "감성적인", "협조적인", "한결같은"],
  ["직접적인", "활발한", "동의하는", "정밀한"],
  ["거친", "관계 지향적인", "부드러운", "완벽을 선호하는"],
  ["대담한", "충동적인", "친절한", "신중한"],
  ["경쟁심 강한", "표현하는", "지원하는", "엄밀한"],
  ["위험을 감수하는", "말하기 좋아하는", "온화하고 완만한", "사실에 기반을 둔"],
];

// 버튼 색상
export const DISC_COLORS = [
  "rgb(157, 230, 118)", // D - 녹색
  "rgb(243, 247, 147)", // I - 노란색
  "rgb(89, 121, 247)", // S - 파란색
  "rgb(243, 118, 239)", // C - 분홍색
];
