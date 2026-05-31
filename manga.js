document.addEventListener("DOMContentLoaded", () => {
    const mangaContainer = document.getElementById("mangaSlider");

    function buatSliderManga() {
        if (!mangaContainer) return;

        dataMangaNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("manga-card");

            const statusKonten = item.status || "Ongoing";

            kartu.innerHTML = `
                <div class="manga-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="manga-gambar" loading="lazy">
                    
                    <div class="manga-meta-gambar">
                        <span class="manga-badge-update">${item.updateKe}</span>
                        <span class="manga-status ${statusKonten.toLowerCase()}">${statusKonten}</span>
                    </div>

                    <span class="manga-rating"><i data-lucide="star"></i> ${item.rating}</span>
                </div>
                <div class="manga-detail">
                    <h3 class="manga-judul">${item.judul}</h3>
                </div>
            `;

            mangaContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderManga();
});
