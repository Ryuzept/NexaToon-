document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("sliderWrapper");
    const dotsContainer = document.getElementById("sliderDots");

    let indeksSekarang = 0;
    let timerOtomatis; // Variabel untuk menyimpan interval waktu otomatis

    // 1. Fungsi Render 9 Slide
    function buatSlider() {
        dataSliderNexa.forEach((item, indeks) => {
            const slide = document.createElement("a");
            slide.href = item.link;
            slide.classList.add("slide");
            if (indeks === 0) slide.classList.add("aktif");

            slide.innerHTML = `
                <img src="${item.gambar}" alt="${item.judul}" class="slide-gambar">
                <div class="slide-overlay-merah"></div>
                
                <div class="slide-info-atas">
                    <span class="info-item jadwal"><i data-lucide="calendar"></i> Rilis: ${item.jadwal}</span>
                    <span class="info-item status"><i data-lucide="play-circle"></i> ${item.status}</span>
                    <span class="info-item rating"><i data-lucide="star"></i> ${item.rating}</span>
                    <span class="info-item total"><i data-lucide="layers"></i> ${item.totalEpisode}</span>
                </div>

                <div class="slide-info-bawah">
                    <h2 class="slide-judul">${item.judul}</h2>
                    <p class="slide-sinopsis">${item.sinopsis}</p>
                    <div class="slide-genre"><i data-lucide="tags"></i> ${item.genre}</div>
                </div>
            `;
            wrapper.appendChild(slide);

            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (indeks === 0) dot.classList.add("aktif");
            dot.addEventListener("click", (e) => {
                e.preventDefault(); 
                gantiSlide(indeks);
                resetTimer(); // Reset waktu otomatis kalau dot diklik manual
            });
            dotsContainer.appendChild(dot);
        });
        
        if (window.lucide) window.lucide.createIcons();
    }

    // 2. Fungsi Mengubah Slide Aktif
    function gantiSlide(indeksBaru) {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");

        slides[indeksSekarang].classList.remove("aktif");
        dots[indeksSekarang].classList.remove("aktif");

        indeksSekarang = (indeksBaru + dataSliderNexa.length) % dataSliderNexa.length;

        slides[indeksSekarang].classList.add("aktif");
        dots[indeksSekarang].classList.add("aktif");
    }

    // 3. Sistem Otomatis Ganti (Setiap 4 Detik)
    function mulaiTimer() {
        timerOtomatis = setInterval(() => {
            gantiSlide(indeksSekarang + 1);
        }, 4000); // 4000 milidetik = 4 detik
    }

    function resetTimer() {
        clearInterval(timerOtomatis);
        mulaiTimer();
    }

    // 4. Fitur Ganti Slide dengan Swipe (Scroll Tangan) + Reset Timer
    let startX = 0;
    wrapper.addEventListener("touchstart", (e) => { 
        startX = e.touches[0].clientX; 
    });
    
    wrapper.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) { 
            gantiSlide(indeksSekarang + 1); // Swipe Kiri
            resetTimer();
        }
        if (endX - startX > 50) { 
            gantiSlide(indeksSekarang - 1); // Swipe Kanan
            resetTimer();
        }
    });

    // Eksekusi Awal saat Halaman Dimuat
    if (dataSliderNexa.length > 0) {
        buatSlider();
        mulaiTimer(); // Jalankan pergantian otomatis sejak awal
    }
});
