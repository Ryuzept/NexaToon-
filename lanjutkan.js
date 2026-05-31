document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.getElementById("lanjutkanSlider");

    function buatSliderLanjutkan() {
        if (!sliderContainer) return;

        dataLanjutkanNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("lanjutkan-card");

            kartu.innerHTML = `
                <div class="lanjutkan-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="lanjutkan-gambar" loading="lazy">
                    
                    <span class="lanjutkan-badge-durasi"><i data-lucide="clock"></i> ${item.durasi}</span>
                    
                    <div class="lanjutkan-overlay">
                        <span class="lanjutkan-ikon-play"><i data-lucide="play"></i></span>
                    </div>
                    <div class="lanjutkan-progress-bg">
                        <div class="lanjutkan-progress-bar" style="width: ${item.progress}%"></div>
                    </div>
                </div>
                <div class="lanjutkan-detail">
                    <h3 class="lanjutkan-judul">${item.judul}</h3>
                    <div class="lanjutkan-meta-bawah">
                        <span class="badge-jenis-mini ${item.jenis.toLowerCase()}">${item.jenis}</span>
                        <p class="lanjutkan-posisi">Lanjut ${item.posisiTerakhir}</p>
                    </div>
                </div>
            `;

            sliderContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderLanjutkan();
});
