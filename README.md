# WANAREA NETWORK — 포트폴리오 웹사이트

## 📁 폴더 구조
```
wanareanetwork/
├── index.html          ← 메인 파일 (내용 수정은 여기)
├── css/
│   └── style.css       ← 디자인 수정 (색상, 폰트 등)
├── js/
│   └── main.js         ← 기능 코드 (거의 수정 불필요)
├── images/             ← 사진 파일을 여기 넣으세요 (.jpg/.png/.webp)
├── music/              ← 음악 파일을 여기 넣으세요 (.mp3/.wav/.ogg)
└── videos/             ← 영상 파일을 여기 넣으세요 (.mp4)
```

---

## ✏️ 내용 수정 방법 (코딩 불필요!)

### 1. 이름/자기소개 변경
`index.html` 파일을 메모장(또는 VS Code)으로 열고:
- `Your Creative Universe` → 원하는 제목으로 변경
- `사진 · 영상 · 음악 · 디자인을 아우르는 크리에이터입니다.` → 나의 소개로 변경
- `당신의 이름` → 실제 이름으로 변경

### 2. 사진 추가 (갤러리)
1. 사진 파일을 `images/` 폴더에 넣기 (예: `mywork.jpg`)
2. `index.html`에서 `work1.jpg` 부분을 `mywork.jpg`로 변경
3. 작품 제목, 카테고리(photo/design/etc), 연도 수정

### 3. 음악 추가
1. mp3 파일을 `music/` 폴더에 넣기 (예: `mysong.mp3`)
2. `index.html`에서 `track1.mp3` → `mysong.mp3` 로 변경
3. 트랙 제목, 장르, 연도 수정
4. 앨범 커버 이미지는 `images/cover1.jpg` 파일을 교체

### 4. 영상 추가
**유튜브 방식 (추천):**
- `youtube.com/embed/dQw4w9WgXcQ` 에서 `dQw4w9WgXcQ` 부분을 본인 유튜브 영상 ID로 변경
- 유튜브 영상 URL: `youtube.com/watch?v=VIDEO_ID` 에서 VIDEO_ID 복사

**직접 업로드 방식:**
- mp4 파일을 `videos/` 폴더에 넣기
- index.html 하단의 주석 처리된 예시 코드 참고

### 5. 연락처 변경
`index.html` 에서 아래 항목 수정:
- `your@email.com` → 실제 이메일
- `@yourhandle` → 인스타그램 아이디
- YouTube/SoundCloud 링크 교체

### 6. 색상 변경 (style.css)
`css/style.css` 파일 맨 위 `:root { }` 블록에서:
```css
--color-bg: #f8f7f5;        ← 배경색
--color-text: #111111;       ← 텍스트 색
--color-accent: #111111;     ← 버튼/강조 색
```
원하는 색상의 HEX 코드로 변경 (예: 파란 계열 → `#1a56db`)

---

## 🚀 GitHub Pages 배포 방법

### 처음 배포
1. **GitHub 계정** 만들기: https://github.com
2. **새 Repository 만들기**: 이름을 `wanareanetwork.github.io` 로 설정
3. 파일 전체를 Repository에 업로드
4. Repository → **Settings** → **Pages** → Source: `main` 브랜치 선택
5. 저장하면 `https://wanareanetwork.github.io` 주소로 접속 가능!

### 파일 수정 후 업데이트
1. GitHub 사이트에서 파일 클릭 → 편집 버튼(✏️) 클릭
2. 수정 후 `Commit changes` 클릭
3. 약 1~2분 후 자동으로 반영됨

---

## 💡 유용한 팁

- **파일 크기**: 이미지는 1MB 이하로 압축 권장 (https://squoosh.app)
- **음악 파일**: GitHub 무료 플랜은 파일당 100MB 제한
- **대용량 영상**: 영상은 유튜브에 업로드 후 임베드 방식 사용 추천
- **도메인 연결**: 원하면 `wanareanetwork.com` 같은 도메인을 구매해 연결 가능 (연 1~2만원)
- **폼 이메일 수신**: https://formspree.io 에서 무료 폼을 만들어 index.html에 연결 가능

---
Made with ❤️ for WANAREA NETWORK
