# Assets 폴더

프로젝트에서 사용하는 정적 자산들을 관리합니다.

## 폴더 구조

```
assets/
└── img/           # 이미지 파일
    ├── d.png      # D 타입 이미지
    ├── i.png      # I 타입 이미지
    ├── s.png      # S 타입 이미지
    ├── c.png      # C 타입 이미지
    ├── dm.png     # D 타입 상세 이미지
    ├── im.png     # I 타입 상세 이미지
    ├── sm.png     # S 타입 상세 이미지
    └── cm.png     # C 타입 상세 이미지
```

## 사용 방법

```javascript
// constants/discTypes.js에서 import
import dImage from "../assets/img/d.png";
```

## 추가 예정

- 아이콘
- 로고
- 배경 이미지
- 기타 정적 파일
