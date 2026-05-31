document.addEventListener("DOMContentLoaded", () => {
    const animeContainer = document.getElementById("animeSlider");

    function buatSliderAnime() {
        if (!animeContainer) return;

        dataAnimeNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("anime-card");

            const statusKonten = item.status || "Ongoing";

            kartu.innerHTML = `
                <div class="anime-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="anime-gambar" loading="lazy">
                    
                    <div class="anime-meta-gambar">
                        <span class="anime-badge-update">${item.updateKe}</span>
                        <span class="anime-status ${statusKonten.toLowerCase()}">${statusKonten}</span>
                    </div>

                    <span class="anime-rating"><i data-lucide="star"></i> ${item.rating}</span>
                </div>
                <div class="anime-detail">
                    <h3 class="anime-judul">${item.judul}</h3>
                </div>
            `;

            animeContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderAnime();
});
