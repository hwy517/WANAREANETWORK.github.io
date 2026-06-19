/* ===== 필터 ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const rows = document.querySelectorAll('.archive-row');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    rows.forEach(row => {
      
      row.classList.toggle('hidden', f !== 'all' && row.dataset.cat !== f);
    });
  });
});

/* ===== 페이지 구분 ===== */
const viewer = document.getElementById('workViewer');
const panel  = document.getElementById('workPanel');

/* ===== 풀스크린 뷰어 (archive 페이지) ===== */
if (viewer) {
  const vMainImg = document.getElementById('viewerMainImg');
  const vStrip   = document.getElementById('viewerStrip');
  const vTitle   = document.getElementById('viewerTitle');
  const vCaption = document.getElementById('viewerCaption');
  const vDesc    = document.getElementById('viewerDesc');
  const vLink    = document.getElementById('viewerLink');
  const vClose   = document.getElementById('viewerClose');

  rows.forEach(row => {
    row.addEventListener('click', () => {
      const link = row.dataset.link;
      if (link && link.trim()) { window.open(link, '_blank'); return; }

      const images = (row.dataset.images || row.dataset.thumb || '').split(',').map(s => s.trim()).filter(Boolean);
      vMainImg.src         = images[0] || '';
      vTitle.textContent   = row.querySelector('.col-title').textContent.trim();
      vCaption.textContent = row.dataset.caption || '';
      vDesc.textContent    = row.dataset.desc    || '';

      const url = row.dataset.url || '';
      vLink.href          = url;
      vLink.style.display = url ? 'inline-block' : 'none';

      vStrip.innerHTML = '';
      images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        if (i === 0) img.classList.add('active');
        img.addEventListener('click', () => {
          vMainImg.src = src;
          vStrip.querySelectorAll('img').forEach(el => el.classList.remove('active'));
          img.classList.add('active');
        });
        vStrip.appendChild(img);
      });

      viewer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  vClose.addEventListener('click', () => {
    viewer.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      viewer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ===== 사이드 패널 (exhibition 페이지) ===== */
if (panel) {
  const overlay    = document.getElementById('panelOverlay');
  const panelClose = document.getElementById('panelClose');
  const panelImages = document.getElementById('panelImages');
  const panelTitle  = document.getElementById('panelTitle');
  const panelCaption = document.getElementById('panelCaption');
  const panelDesc   = document.getElementById('panelDesc');
  const panelLink   = document.getElementById('panelLink');

  rows.forEach(row => {
    row.addEventListener('click', () => {
      const images = (row.dataset.images || '').split(',').map(s => s.trim()).filter(Boolean);

      panelImages.innerHTML = '';
      images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        panelImages.appendChild(img);
      });

      panelTitle.textContent    = row.querySelector('.col-title').textContent.trim();
      panelCaption.textContent  = row.dataset.caption || '';
      panelDesc.textContent     = row.dataset.desc    || '';
      const url = row.dataset.url || '';
const panelLink = document.getElementById('panelLink');
if (panelLink) {
  panelLink.href = url;
  panelLink.style.display = url ? 'inline-block' : 'none';
}

panel.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  panelClose.addEventListener('click', () => {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', () => {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      panel.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}