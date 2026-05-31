document.addEventListener("DOMContentLoaded", () => {
    const manhuaContainer = document.getElementById("manhuaSlider");

    function buatSliderManhua() {
        if (!manhuaContainer) return;

        dataManhuaNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("manhua-card");

            const statusKonten = item.status || "Ongoing";

            kartu.innerHTML = `
                <div class="manhua-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="manhua-gambar" loading="lazy">
                    
                    <div class="manhua-meta-gambar">
                        <span class="manhua-badge-update">${item.updateKe}</span>
                        <span class="manhua-status ${statusKonten.toLowerCase()}">${statusKonten}</span>
                    </div>

                    <span class="manhua-rating"><i data-lucide="star"></i> ${item.rating}</span>
                </div>
                <div class="manhua-detail">
                    <h3 class="manhua-judul">${item.judul}</h3>
                </div>
            `;

            manhuaContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderManhua();
});
