document.addEventListener("DOMContentLoaded", () => {
    const manhwaContainer = document.getElementById("manhwaSlider");

    function buatSliderManhwa() {
        if (!manhwaContainer) return;

        dataManhwaNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("manhwa-card");

            const statusKonten = item.status || "Ongoing";

            kartu.innerHTML = `
                <div class="manhwa-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="manhwa-gambar" loading="lazy">
                    
                    <div class="manhwa-meta-gambar">
                        <span class="manhwa-badge-update">${item.updateKe}</span>
                        <span class="manhwa-status ${statusKonten.toLowerCase()}">${statusKonten}</span>
                    </div>

                    <span class="manhwa-rating"><i data-lucide="star"></i> ${item.rating}</span>
                </div>
                <div class="manhwa-detail">
                    <h3 class="manhwa-judul">${item.judul}</h3>
                </div>
            `;

            manhwaContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderManhwa();
});
