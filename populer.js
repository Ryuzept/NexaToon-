document.addEventListener("DOMContentLoaded", () => {
    const populerContainer = document.getElementById("populerList");

    function buatListPopuler() {
        if (!populerContainer) return;

        dataPopulerNexa.slice(0, 5).forEach((item, indeks) => {
            const baris = document.createElement("a");
            baris.href = item.link;
            baris.classList.add("list-populer-item");

            // indeks + 1 digunakan untuk membuat angka rank (1, 2, 3, dst)
            baris.innerHTML = `
                <div class="populer-rank">0${indeks + 1}</div>
                <div class="populer-img-box">
                    <img src="${item.gambar}" alt="${item.judul}" class="populer-gambar" loading="lazy">
                </div>
                <div class="populer-info">
                    <div class="populer-meta-atas">
                        <span class="populer-badge ${item.jenis.toLowerCase()}">${item.jenis}</span>
                        <span class="populer-rating"><i data-lucide="star"></i> ${item.rating}</span>
                    </div>
                    <h3 class="populer-judul">${item.judul}</h3>
                    <p class="populer-genre">${item.genre}</p>
                </div>
                <div class="populer-panah-pindah">
                    <i data-lucide="chevron-right"></i>
                </div>
            `;

            populerContainer.appendChild(baris);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    buatListPopuler();
});
