# 🌟 MySite

개인 포트폴리오 및 블로그 웹사이트

## ✨ 프로젝트 소개

개인 포트폴리오 및 블로그 웹사이트로, 기술 프로젝트 소개, 기술 스택, 그리고 연락처 정보를 한눈에 볼 수 있는 웹사이트이다.

## 🎨 테마

Dark와 Light 두 가지 테마를 지원하며, 클릭 한 번으로 자유롭게 전환할 수 있다.

### Dark Theme
![Dark Theme](./images/screenshot//dark.png)

### Light Theme
![Light Theme](./images/screenshot//light.png)

## ✨ 주요 기능

- 🌓 **Dark & Light 테마**: 사용자 선호도에 맞춘 테마 전환
- 🎯 **클릭 효과**: 부드럽고 매력적인 인터랙티브 효과
- 📜 **스크롤 애니메이션**: 스크롤 시 동적인 요소 표현
- 📱 **반응형 디자인**: 모든 기기에 최적화된 레이아웃
- ⚡ **빠른 로딩**: 최적화된 성능

## 🛠️ 기술 스택

- **마크업**: HTML5
- **스타일**: CSS3
- **인터랙션**: JavaScript (ES6+)

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/LeF-0213/MySite.git
cd MySite
```

### 2. 로컬 서버 실행

간단한 로컬 서버를 통해 웹사이트를 실행합니다.

```bash
# Python 3
python -m http.server 8000

# 또는 Node.js의 http-server 사용
npx http-server
```

### 3. 브라우저에서 확인

```
http://localhost:8000
```

## 📁 프로젝트 구조

```
MySite/
├── index.html          # 메인 HTML 파일
├── styles/
│   └── style.css       # 전역 스타일 및 테마
├── js/
│   ├── main.js         # 메인 스크립트
│   ├── theme.js        # 테마 전환 로직
│   └── animations.js   # 클릭 및 스크롤 애니메이션
├── images
└── README.md           # 현재 파일
```

## 🎯 사용 방법

1. **테마 전환**: 상단의 테마 토글 버튼을 클릭하여 Dark/Light 테마를 전환할 수 있습니다.
2. **인터랙션**: 각 요소를 클릭하면 부드러운 애니메이션 효과가 작동합니다.
3. **스크롤 효과**: 페이지를 스크롤하면 콘텐츠가 동적으로 나타납니다.
  
---