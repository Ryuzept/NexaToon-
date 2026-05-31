document.addEventListener("DOMContentLoaded", () => {
    const rekomendasiContainer = document.getElementById("rekomendasiList");

    function buatListRekomendasi() {
        if (!rekomendasiContainer) return;

        dataRekomendasiNexa.forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("rekomendasi-card");

            // Membuat element genre tags kecil di dalam kartu
            const genreTagsHTML = item.genres.map(g => `<span class="reko-tag">${g}</span>`).join("");

            kartu.innerHTML = `
                <div class="reko-img-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="reko-gambar" loading="lazy">
                    <span class="reko-badge ${item.jenis.toLowerCase()}">${item.jenis}</span>
                </div>
                <div class="reko-info">
                    <div class="reko-meta-atas">
                        <h3 class="reko-judul">${item.judul}</h3>
                        <span class="reko-rating"><i data-lucide="star"></i> ${item.rating}</span>
                    </div>
                    <div class="reko-tags-container">
                        ${genreTagsHTML}
                    </div>
                    <p class="reko-sinopsis">${item.sinopsis}</p>
                </div>
            `;

            rekomendasiContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatListRekomendasi();
});
