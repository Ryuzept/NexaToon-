document.addEventListener("DOMContentLoaded", () => {
    const novelContainer = document.getElementById("novelSlider");

    function buatSliderNovel() {
        if (!novelContainer) return;

        dataNovelNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("novel-card");

            const statusKonten = item.status || "Ongoing";

            kartu.innerHTML = `
                <div class="novel-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="novel-gambar" loading="lazy">
                    
                    <div class="novel-meta-gambar">
                        <span class="novel-badge-update">${item.updateKe}</span>
                        <span class="novel-status ${statusKonten.toLowerCase()}">${statusKonten}</span>
                    </div>

                    <span class="novel-rating"><i data-lucide="star"></i> ${item.rating}</span>
                </div>
                <div class="novel-detail">
                    <h3 class="novel-judul">${item.judul}</h3>
                </div>
            `;

            novelContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderNovel();
});
