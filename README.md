# 카카오브레인 공식 홈페이지

> AI 연구 기업의 **연구 · 기술 · 문화 이야기를 콘텐츠로 풀어낸** 브랜드 사이트.
> 생성형 AI 모델(Karlo) 체험 데모까지 포함한 카카오브레인 공식 홈페이지의 프론트엔드입니다.

> 회사(프리아이브)에서 진행한 프로젝트로, 이 문서는 포트폴리오용으로 작성했으며 실서비스 주소와 설정 값은 포함하지 않습니다.

<br>

## 📋 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 소속 | 프리아이브 프론트개발팀 |
| 역할 | **프론트엔드 팀장** · 프론트엔드 개발 |
| 형태 | Nuxt.js 기반 SSR 웹사이트 |

<br>

## 🎯 해결해야 했던 문제

| 문제 | 접근 |
|---|---|
| 연구 · 기술 · 브랜드 · 채용 등 **콘텐츠 종류가 매우 많음** | 콘텐츠 유형별 페이지와 재사용 가능한 상세 컴포넌트(제목, 본문, 이미지, 유튜브) 체계 |
| 콘텐츠가 **검색에 잘 노출**되어야 함 | 서버 사이드 렌더링, 사이트맵 자동 생성 |
| 브라우저에서 **AI 이미지 생성 모델을 직접 체험**하는 데모 필요 | 생성 · 변형 · 부분 수정 흐름을 하나의 데모 화면에 구성 |
| 개발 · 스테이징 · 운영 **환경이 분리**되어 있음 | 환경별 빌드 · 실행 스크립트와 컨테이너 배포 |

<br>

## 👤 담당 역할

- **프론트엔드 구조 설계** — 페이지 · 컴포넌트 · 플러그인 구성, 공통 믹스인과 미들웨어
- **콘텐츠 페이지 개발** — 회사 소개, 연구 · 기술 콘텐츠, 아카이브, 월간 이슈, 스토리텔링
- **Karlo 체험 데모 개발** — 텍스트로 이미지 생성, 변형(Variation), 부분 수정(Inpainting), 결과 일괄 다운로드
- **다국어 · 개인정보처리방침** — 언어별 · 버전별 처리방침 페이지
- **배포 환경 구성** — 환경별 빌드, Docker, nginx, GitLab CI

<br>

## ✨ 주요 화면

| 영역 | 내용 |
|---|---|
| About | 회사 소개, 원칙, 문화 |
| Contents | 연구(논문 · 챌린지 · 협업), 기술, 영상 로그, 뉴스 · 다큐 |
| Archive · Monthly Issue | 아카이브, 월간 이슈 |
| Innovation · Ethics | 혁신 사례, AI 윤리 |
| Tech Playground | **Karlo 이미지 생성 체험 데모**, 이용약관 · 개인정보 |
| Privacy | 버전 · 언어별 개인정보처리방침 |

<br>

## 🛠 기술 스택

| 영역 | 기술 |
|---|---|
| 프레임워크 | Nuxt.js 2 (Vue 2), SSR |
| 상태 | Vuex |
| 스타일 | SCSS (style-resources) |
| 통신 | @nuxtjs/axios |
| UI | Swiper, vue-masonry-css, vue-select, vue-marquee-slider |
| 이미지 편집 | TOAST UI Image Editor |
| 파일 처리 | JSZip, FileSaver |
| SEO · 분석 | @nuxtjs/sitemap, Google Analytics |
| 배포 | Docker, nginx, GitLab CI |
| 품질 | ESLint, Prettier, EditorConfig |

<br>

## 🏗 프로젝트 구조

```text
├── pages/
│   ├── about/  archive/  contents/  ethics/  innovation/
│   ├── monthly-issue/  story-telling/
│   ├── techplayground/karlo/   # 이미지 생성 체험 데모
│   └── privacy/_version/_language.vue
├── components/
│   ├── about/      # 회사 소개 섹션 컴포넌트
│   ├── detail/     # 콘텐츠 상세 공통 블록 (제목, 본문, 이미지, 유튜브)
│   └── elements/   # 버튼, 카드, 태그, 페이징, 검색 등 공통 요소
├── layouts/
├── store/          # Vuex (번역, 이슈, 정적 데이터)
├── plugins/        # axios, 이벤트 버스, 이미지 에디터, 기기 감지 등
├── middleware/     # 라우트 미들웨어
├── mixin/          # 전역 믹스인
└── nginx/          # nginx 설정
```

<br>

## 💡 주요 작업

### 1. 콘텐츠 상세 블록 컴포넌트화
- 상세 페이지를 제목 · 소제목 · 본문 · 이미지 · 유튜브 블록으로 나눠 조합하는 구조
- → 새 콘텐츠 유형이 생겨도 블록을 조합해 빠르게 페이지 추가

### 2. 브라우저 기반 AI 이미지 생성 데모
- 프롬프트 입력 → 이미지 생성 → 변형 · 부분 수정(마스킹은 이미지 에디터로) → 결과를 ZIP으로 다운로드
- 이미지 에디터 · ZIP 등 브라우저 전용 라이브러리는 클라이언트에서만 로드하도록 분리
- → SSR 환경에서도 무거운 라이브러리가 서버 렌더링을 방해하지 않음

### 3. 환경별 빌드 · 배포
- `dev` · `stg` · `prod` 환경별 빌드 · 실행 · 정적 생성 스크립트를 분리하고 컨테이너로 배포

<br>

## 🚀 실행 방법

```bash
npm install
npm run dev           # 개발 서버
npm run build:stg     # 스테이징 빌드
npm run build:prod    # 운영 빌드
npm run lint
```

환경 변수 값은 이 문서에 포함하지 않습니다.
