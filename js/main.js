/* ===================================================
   WANAREA NETWORK — main.js
   =================================================== */

/* ===== NAVBAR 스크롤 효과 ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== 햄버거 메뉴 (모바일) ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== 갤러리 필터 ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.cat !== filter);
    });
  });
});

/* ===== 라이트박스 (이미지 클릭 시 확대) ===== */
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = '<button id="lightbox-close">✕</button><img id="lightbox-img" src="" alt="확대 이미지" />';
document.body.appendChild(lightbox);

const lbImg = document.getElementById('lightbox-img');
document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.querySelector('img')?.src;
    if (src && !item.querySelector('.gallery-img-wrap').classList.contains('no-img')) {
      lbImg.src = src;
      lightbox.classList.add('open');
    }
  });
});

/* ===== 뮤직 플레이어 ===== */
const audio = document.getElementById('audioPlayer');
const btnPlay = document.getElementById('btnPlay');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const progressBar = document.getElementById('progressBar');
const timeNow = document.getElementById('timeNow');
const timeDur = document.getElementById('timeDur');
const playerTitle = document.getElementById('playerTitle');
const playerSub = document.getElementById('playerSub');
const trackItems = document.querySelectorAll('.track-item');

let currentTrack = -1;

function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

function loadTrack(index) {
  if (index < 0 || index >= trackItems.length) return;
  trackItems.forEach(t => t.classList.remove('active'));
  trackItems[index].classList.add('active');
  currentTrack = index;

  const item = trackItems[index];
  const src = item.dataset.src;
  const title = item.querySelector('.track-title')?.textContent || '—';
  const sub = item.querySelector('.track-sub')?.textContent || '—';

  audio.src = src;
  playerTitle.textContent = title;
  playerSub.textContent = sub;
  audio.load();
  audio.play().catch(() => {});
  btnPlay.textContent = '⏸';
}

trackItems.forEach((item, i) => {
  item.addEventListener('click', () => loadTrack(i));
});

btnPlay.addEventListener('click', () => {
  if (currentTrack === -1) { loadTrack(0); return; }
  if (audio.paused) { audio.play(); btnPlay.textContent = '⏸'; }
  else { audio.pause(); btnPlay.textContent = '▶'; }
});

btnPrev.addEventListener('click', () => loadTrack(currentTrack > 0 ? currentTrack - 1 : trackItems.length - 1));
btnNext.addEventListener('click', () => loadTrack(currentTrack < trackItems.length - 1 ? currentTrack + 1 : 0));

audio.addEventListener('ended', () => {
  loadTrack(currentTrack < trackItems.length - 1 ? currentTrack + 1 : 0);
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressBar.value = pct;
  timeNow.textContent = formatTime(audio.currentTime);
  timeDur.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
  if (!audio.duration) return;
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

audio.addEventListener('pause', () => { btnPlay.textContent = '▶'; });
audio.addEventListener('play', () => { btnPlay.textContent = '⏸'; });

/* 트랙 로드 시 길이 표시 */
trackItems.forEach((item, i) => {
  const src = item.dataset.src;
  if (!src) return;
  const tmp = new Audio(src);
  tmp.addEventListener('loadedmetadata', () => {
    const dur = item.querySelector('.track-dur');
    if (dur) dur.textContent = formatTime(tmp.duration);
  });
  tmp.load();
});

/* ===== 문의 폼 ===== */
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  const result = document.getElementById('cf-result');

  // ✏️ 실제 폼 전송 서비스 (Formspree 등)를 연결하면 이메일로 받을 수 있습니다.
  // https://formspree.io 에서 무료 폼 엔드포인트를 만들어 아래 fetch URL을 교체하세요.
  result.textContent = `감사합니다, ${name}! 곧 연락드리겠습니다.`;
  e.target.reset();
}

/* ===== 스크롤 페이드인 (선택사항) ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.gallery-item, .track-item, .video-item, .contact-link').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
