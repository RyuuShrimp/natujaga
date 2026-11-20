/* ===== Script Utama Natujaga ===== */

/* Render daftar kegiatan di halaman kegiatan.html */
function renderKegiatan(kategoriFilter = 'semua') {
    const grid = document.getElementById('kegiatan-grid');
    if (!grid) return;

    const filtered = kategoriFilter === 'semua'
        ? kegiatan
        : kegiatan.filter(k => k.kategori === kategoriFilter);

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 2rem;">Belum ada kegiatan untuk kategori ini.</p>';
        return;
    }

    filtered.forEach(k => {
        const card = document.createElement('div');
        card.className = 'kegiatan-card';
        card.dataset.id = k.id;
        card.innerHTML = `
            <div class="kegiatan-thumb" style="background-image: url('${k.gambar && k.gambar.length ? k.gambar[0] : ''}'); background-size: cover; background-position: center;"></div>
            <div class="kegiatan-body">
                <span class="kegiatan-tag">${k.icon || ''} ${k.kategori}</span>
                <h3>${k.judul}</h3>
                <p>${k.deskripsi}</p>
                <a href="artikel-detail.html?id=${k.id}" class="link-more" style="margin-top: auto; display: inline-flex;">Lihat Detail ❯</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* Filter tabs di halaman kegiatan.html */
function setupKegiatanFilters() {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderKegiatan(btn.dataset.filter);
        });
    });
}

/* Render preview kegiatan di halaman index.html */
function renderActivityPreview() {
    const grid = document.querySelector('.activity-grid-preview');
    if (!grid) return;

    kegiatan.slice(0, 4).forEach(k => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <div class="activity-card-image" style="background-image: url('${k.gambar && k.gambar.length ? k.gambar[0] : ''}'); background-size: cover; background-position: center;"></div>
            <div class="activity-card-body">
                <span class="activity-card-tag">${k.icon || ''} ${k.kategori}</span>
                <h3>${k.judul}</h3>
                <p>${k.deskripsi}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ===== Slideshow Foto ===== */
function setupSlideshow(container) {
    const slides = Array.from(container.querySelectorAll('.slide'));
    if (slides.length === 0) return;

    const dotsContainer = container.querySelector('.slideshow-dots');
    const prevBtn = container.querySelector('.slideshow-prev');
    const nextBtn = container.querySelector('.slideshow-next');
    let current = 0;
    let timer = null;
    const INTERVAL = 4000;

    // Buat dots
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        current = index;
    }

    function goTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        showSlide(index);
        resetTimer();
    }

    function nextSlide() {
        goTo(current + 1);
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextSlide, INTERVAL);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    showSlide(0);
    resetTimer();
}

function setupAllSlideshows() {
    document.querySelectorAll('.slideshow-container').forEach(setupSlideshow);
}

/* Inisialisasi */
document.addEventListener('DOMContentLoaded', () => {
    setupKegiatanFilters();
    renderKegiatan();
    renderActivityPreview();
    setupAllSlideshows();
});