document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("jadwalGrid");
    const tombolTabs = document.querySelectorAll(".tab-hari");

    // Fungsi merender list konten berdasarkan hari yang dipilih
    function tampilkanJadwal(hari) {
        if (!gridContainer) return;
        gridContainer.innerHTML = ""; // Bersihkan grid lama

        const listKonten = dataJadwalNexa[hari] || [];

        if (listKonten.length === 0) {
            gridContainer.innerHTML = `<p class="jadwal-kosong">Tidak ada jadwal rilis untuk hari ini.</p>`;
            return;
        }

        listKonten.forEach(item => {
            const kartu = document.createElement("a");
            kartu.href = item.link;
            kartu.classList.add("jadwal-card");

            kartu.innerHTML = `
                <div class="jadwal-thumb">
                    <img src="${item.gambar}" alt="${item.judul}" loading="lazy">
                    <span class="jadwal-badge-jam"><i data-lucide="clock"></i> ${item.jam}</span>
                </div>
                <div class="jadwal-info">
                    <span class="badge-jenis-mini ${item.jenis.toLowerCase().replace(" ", "-")}">${item.jenis}</span>
                    <h3 class="jadwal-judul-teks">${item.judul}</h3>
                </div>
            `;
            gridContainer.appendChild(kartu);
        });

        if (window.lucide) window.lucide.createIcons();
    }

    // Ambil hari asli dari device user untuk auto-active
    const hariInggris = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
    const hariIni = hariInggris[new Date().getDay()];

    // Set tab hari ini jadi aktif dan render datanya
    tombolTabs.forEach(tombol => {
        if (tombol.getAttribute("data-hari") === hariIni) {
            tombol.classList.add("active");
            tampilkanJadwal(hariIni);
        }

        // Event listener ketika user klik hari lain
        tombol.addEventListener("click", () => {
            tombolTabs.forEach(t => t.classList.remove("active"));
            tombol.classList.add("active");
            tampilkanJadwal(tombol.getAttribute("data-hari"));
        });
    });
});
