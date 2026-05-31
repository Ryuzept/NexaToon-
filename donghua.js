document.addEventListener("DOMContentLoaded", () => {
    const donghuaContainer = document.getElementById("donghuaSlider");

    function buatSliderDonghua() {
        if (!donghuaContainer) return;

        dataDonghuaNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("donghua-card");

            // Menentukan status default jika belum tertulis di data
            const statusKonten = item.status || "Ongoing";

            kartu.innerHTML = `
                <div class="donghua-thumb-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="donghua-gambar" loading="lazy">
                    
                    <div class="donghua-meta-gambar">
                        <span class="donghua-badge-update">${item.updateKe}</span>
                        <span class="donghua-status ${statusKonten.toLowerCase()}">${statusKonten}</span>
                    </div>

                    <span class="donghua-rating"><i data-lucide="star"></i> ${item.rating}</span>
                </div>
                <div class="donghua-detail">
                    <h3 class="donghua-judul">${item.judul}</h3>
                </div>
            `;

            donghuaContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatSliderDonghua();
});

