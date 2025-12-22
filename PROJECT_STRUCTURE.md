# DISC 프로젝트 - 최종 폴더 구조

## 📁 완성된 프로젝트 구조

```
src/
├── index.js                 # 앱 엔트리 포인트
├── index.css                # 글로벌 스타일
├── App.js                   # 메인 App 컴포넌트 (라우팅)
│
├── pages/                   # 📄 페이지 컴포넌트
│   ├── HomePage.js          # 홈 화면
│   ├── SignupPage.js        # 회원가입
│   ├── LoginPage.js         # 로그인
│   ├── DiscTestPage.js      # DISC 테스트
│   ├── ResultPage.js        # 개별 결과 (동적 라우팅)
│   └── AllResultsPage.js    # 전체 결과
│
├── components/              # 🧩 재사용 컴포넌트
│   ├── common/             # 공통 UI 컴포넌트
│   │   ├── Button.js       # 버튼
│   │   ├── Input.js        # 입력 필드
│   │   ├── LoadingSpinner.js  # 로딩 애니메이션
│   │   └── ErrorMessage.js    # 에러 메시지
│   └── disc/               # DISC 전용 컴포넌트
│       ├── TestQuestion.js    # 테스트 질문 UI
│       ├── ResultDisplay.js   # 결과 표시
│       └── DiscModal.js       # 모달 팝업
│
├── constants/               # 🔧 상수 정의
│   ├── index.js            # 통합 export
│   ├── api.js              # API 엔드포인트
│   ├── discTypes.js        # DISC 타입 데이터
│   ├── routes.js           # 라우트 경로
│   └── tracks.js           # 트랙 옵션
│
├── hooks/                   # 🎣 커스텀 훅
│   ├── index.js            # 통합 export
│   ├── useUserInfo.js      # 사용자 정보
│   ├── useLogin.js         # 로그인
│   ├── useSignup.js        # 회원가입
│   └── useDiscTest.js      # 테스트 로직
│
├── services/                # 🌐 API 서비스
│   └── api.js              # API 호출 & 스토리지
│
├── utils/                   # 🛠 유틸리티
│   ├── colorUtils.js       # 색상 처리
│   ├── discUtils.js        # DISC 로직
│   └── validation.js       # 입력 검증
│
├── styles/                  # 🎨 스타일 파일
│   ├── Common.module.css   # 공통 스타일
│   ├── Auth.module.css     # 인증 관련
│   ├── Result.module.css   # 결과 페이지
│   └── Home.module.css     # 홈 페이지
│
├── assets/                  # 📦 정적 자산
│   ├── img/                # 이미지
│   │   ├── d.png           # D 타입
│   │   ├── i.png           # I 타입
│   │   ├── s.png           # S 타입
│   │   ├── c.png           # C 타입
│   │   ├── dm.png          # D 타입 상세
│   │   ├── im.png          # I 타입 상세
│   │   ├── sm.png          # S 타입 상세
│   │   └── cm.png          # C 타입 상세
│   └── README.md
│
└── legacy/                  # 🗄️ 기존 파일 보관
    ├── App.js              # 구 App
    ├── Home.js             # 구 홈
    ├── Edong.js            # 구 회원가입
    ├── login.js            # 구 로그인
    ├── final.js            # 구 전체 결과
    ├── ResultType1-4.js    # 구 개별 결과
    ├── ResultType1-4New.js # 1차 리팩토링 결과
    ├── ResultRedirect.js   # 구 리다이렉트
    ├── *.module.css        # 구 스타일
    └── README.md
```

## 🎯 각 폴더의 역할

### 📄 pages/

- 라우팅되는 페이지 레벨 컴포넌트
- 각 페이지는 비즈니스 로직을 훅으로 분리
- `*Page.js` 네이밍 컨벤션

### 🧩 components/

- **common/**: 프로젝트 전체에서 재사용되는 UI 컴포넌트
- **disc/**: DISC 기능에 특화된 컴포넌트

### 🔧 constants/

- 하드코딩된 값을 중앙 관리
- `index.js`에서 통합 export로 import 편의성 향상

### 🎣 hooks/

- 재사용 가능한 상태 로직
- API 호출, 폼 관리, 테스트 로직 등
- `index.js`에서 통합 export

### 🌐 services/

- 외부 API와의 통신 로직
- 로컬 스토리지 관리
- axios 인스턴스 설정

### 🛠 utils/

- 순수 함수들의 모음
- 비즈니스 로직과 독립적
- 테스트하기 쉬운 구조

### 🎨 styles/

- CSS Modules 파일들을 중앙 관리
- 공통 스타일과 페이지별 스타일 분리

### 📦 assets/

- 이미지, 아이콘, 폰트 등 정적 자산
- 기능별/타입별로 하위 폴더 구성

### 🗄️ legacy/

- 리팩토링 이전 코드 보관
- 참조용으로만 사용
- 실제 앱에서는 사용되지 않음

## 📊 이전 vs 이후 비교

### Before (리팩토링 전)

```
src/
├── App.js
├── Home.js
├── Edong.js
├── login.js
├── final.js
├── ResultType1.js
├── ResultType2.js
├── ResultType3.js
├── ResultType4.js
├── components/Banner.js
├── img/
└── *.module.css (여러 위치에 분산)
```

### After (최종)

```
src/
├── App.js (깔끔한 라우팅만)
├── pages/ (6개 페이지)
├── components/ (10개 재사용 컴포넌트)
├── constants/ (통합 상수 관리)
├── hooks/ (5개 커스텀 훅)
├── services/ (API 추상화)
├── utils/ (유틸리티 함수)
├── styles/ (CSS 통합)
├── assets/ (정적 자산)
└── legacy/ (기존 코드 보관)
```

## 💡 주요 개선 사항

1. **명확한 책임 분리**: 각 폴더가 명확한 역할을 가짐
2. **재사용성 향상**: 공통 컴포넌트와 훅으로 코드 중복 제거
3. **유지보수성**: 파일 찾기 쉽고, 수정 영향 범위 파악 용이
4. **확장성**: 새 기능 추가 시 어디에 넣을지 명확함
5. **테스트 용이성**: 순수 함수와 로직 분리로 테스트 작성 쉬움

## 🚀 사용 방법

### Import 예시

```javascript
// 통합 export 활용
import { ROUTES, DISC_DATA, TRACKS } from "./constants";
import { useLogin, useSignup, useUserInfo } from "./hooks";

// 컴포넌트
import Button from "./components/common/Button";
import TestQuestion from "./components/disc/TestQuestion";

// 이미지
import dImage from "./assets/img/d.png";
```

### 새 기능 추가 시

1. **새 페이지**: `src/pages/NewPage.js` 생성
2. **새 컴포넌트**: `src/components/common/` 또는 `src/components/disc/`
3. **새 상수**: `src/constants/`에 추가 후 `index.js`에서 export
4. **새 훅**: `src/hooks/` 생성 후 `index.js`에서 export
5. **새 유틸**: `src/utils/`에 순수 함수 추가

## 📝 네이밍 컨벤션

- **Pages**: `*Page.js` (HomePage, LoginPage)
- **Components**: PascalCase (Button, TestQuestion)
- **Hooks**: `use*` (useLogin, useDiscTest)
- **Utils**: camelCase (validateForm, findMaxIndex)
- **Constants**: UPPER_SNAKE_CASE (DISC_TYPES, API_ENDPOINTS)
- **Styles**: `*.module.css`

---

**정리 완료!** 이제 모든 파일이 체계적으로 정리되었습니다. 🎉
