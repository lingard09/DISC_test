# DISC 업무 타입 테스트

나의 업무 스타일을 파악하고 팀원들과 더 효과적으로 협업하는 방법을 알아보세요!

## 📋 프로젝트 소개

DISC 업무 타입 테스트는 개인의 업무 스타일을 **D(주도형), I(사교형), S(안정형), C(신중형)** 4가지 유형으로 분석하는 웹 애플리케이션입니다.

간단한 질문에 답변하면 자신의 업무 스타일을 파악하고, 각 유형별 특성과 협업 팁을 확인할 수 있습니다.

## ✨ 주요 기능

- 🔐 **회원가입 및 로그인**: 이름, 트랙, 비밀번호로 간편 가입
- 📝 **DISC 성격 테스트**: 7가지 질문으로 업무 성향 파악
- 🎯 **4가지 결과 타입**:
  - **D (Dominance)**: The Winner - 주도형, 경쟁심, 결단력
  - **I (Influence)**: The Enthusiast - 사교형, 긍정적, 협력적
  - **S (Steadiness)**: The Peacekeeper - 안정형, 침착, 인내심
  - **C (Conscientiousness)**: The Analyst - 신중형, 분석적, 체계적
- 💡 **협업 가이드**: 각 타입별 효과적인 협업 방법 제공
- 📊 **결과 시각화**: 모달 창을 통한 상세 정보 제공

## 🛠 기술 스택

- **Frontend**: React 19.0.0
- **Routing**: React Router DOM 7.1.3
- **Styling**: CSS Modules, Styled Components 6.1.14
- **HTTP Client**: Axios 1.7.9
- **State Management**: React Hooks (useState, useEffect)
- **Cookie Management**: React Cookie 7.2.2

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 앱을 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

최적화된 프로덕션 빌드가 `build` 폴더에 생성됩니다.

## 📁 프로젝트 구조

```
src/
├── App.js              # 메인 라우팅 설정
├── Home.js             # 홈 페이지 (시작 화면)
├── Edong.js            # 회원가입 페이지
├── login.js            # 로그인 페이지
├── components/
│   └── Banner.js       # DISC 테스트 질문 컴포넌트
├── final.js            # 최종 결과 페이지 (4가지 타입 모두 표시)
├── ResultType1.js      # D 타입 결과
├── ResultType2.js      # I 타입 결과
├── ResultType3.js      # S 타입 결과
├── ResultType4.js      # C 타입 결과
└── *.module.css        # 각 컴포넌트별 CSS 모듈
```

## 🎮 사용 방법

1. **START 버튼 클릭** - 테스트 시작
2. **회원 정보 입력** - 이름, 비밀번호, 트랙(Planner/Designer/Front-end/Back-end) 선택
3. **로그인** - 입력한 정보로 로그인
4. **테스트 진행** - 7가지 질문에 답변 (각 질문당 하나씩 선택)
5. **결과 확인** - 나의 DISC 타입과 협업 팁 확인

## 🔌 API 연동

백엔드 API: `https://one3th-front-api.onrender.com`

### 주요 엔드포인트

- `POST /typeTest/signUp` - 회원가입
- `POST /typeTest/login` - 로그인
- `GET /typeTest/userInfo/{memberID}` - 사용자 정보 조회

## 👥 트랙 옵션

- Planner
- Designer
- Front-end
- Back-end

## 📝 라이선스

이 프로젝트는 Create React App으로 생성되었습니다.

## 🔗 참고 자료

- [Create React App 문서](https://facebook.github.io/create-react-app/docs/getting-started)
- [React 문서](https://reactjs.org/)
- [DISC 이론](https://en.wikipedia.org/wiki/DISC_assessment)
