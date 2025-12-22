# Legacy 폴더

이 폴더는 리팩토링 이전의 기존 컴포넌트들을 보관합니다.

## 포함된 파일들

### 기존 페이지 컴포넌트

- `App.js` - 기존 App 컴포넌트 (라우팅)
- `Home.js` - 홈 페이지
- `Edong.js` - 회원가입 페이지
- `login.js` - 로그인 페이지
- `final.js` - 전체 결과 페이지

### 결과 페이지들

- `ResultType1.js` - D 타입 결과
- `ResultType2.js` - I 타입 결과
- `ResultType3.js` - S 타입 결과
- `ResultType4.js` - C 타입 결과
- `ResultRedirect.js` - 결과 리다이렉트

### 통합 결과 컴포넌트 (1차 리팩토링)

- `ResultType1New.js`
- `ResultType2New.js`
- `ResultType3New.js`
- `ResultType4New.js`

### CSS 파일들

- `Edong.module.css`
- `ResultType1.module.css`
- `ResultType2.module.css`
- `ResultType3.module.css`
- `ResultType4.module.css`

## 참고사항

이 파일들은 **사용되지 않습니다**. 새로운 구조는 다음과 같습니다:

- `src/pages/` - 새로운 페이지 컴포넌트
- `src/components/` - 재사용 가능한 컴포넌트
- `src/styles/` - 통합 스타일 파일

필요시 참조용으로만 사용하세요.
