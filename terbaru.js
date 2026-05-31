document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("terbaruGrid");

    function buatGridTerbaru() {
        if (!gridContainer) return;

        // .slice(0, 24) memastikan maksimal hanya 24 data yang dimasukkan ke grid (3 kolom x 8 baris)
        dataTerbaruNexa.slice(0, 24).forEach((item) => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("kartu-nexa");

            kartu.innerHTML = `
                <div class="kartu-atas">
                    <img src="${item.gambar}" alt="${item.judul}" class="kartu-gambar" loading="lazy">
                    <span class="badge-jenis ${item.jenis.toLowerCase()}">${item.jenis}</span>
                    <span class="badge-update">${item.updateKe}</span>
                </div>
                <div class="kartu-bawah">
                    <h3 class="kartu-judul">${item.judul}</h3>
                    <div class="kartu-meta">
                        <span class="kartu-waktu"><i data-lucide="clock"></i> ${item.waktu}</span>
                        <span class="kartu-rating"><i data-lucide="star"></i> ${item.rating}</span>
                    </div>
                </div>
            `;

            gridContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatGridTerbaru();
});
