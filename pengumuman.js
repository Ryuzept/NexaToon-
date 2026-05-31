document.addEventListener("DOMContentLoaded", () => {
    const boxPengumuman = document.getElementById("boxPengumuman");
    const tombolTutup = document.getElementById("tombolTutupPengumuman");
    const tombolBuka = document.getElementById("tombolBukaPengumuman");

    // Pastikan semua komponen terdeteksi di HTML
    if (boxPengumuman && tombolTutup && tombolBuka) {
        
        // Fungsi ketika tombol silang (X) dipencet
        tombolTutup.addEventListener("click", () => {
            boxPengumuman.classList.add("tersembunyi"); // Sembunyikan teks berjalan
            tombolBuka.classList.remove("tersembunyi"); // Munculkan tombol "Lihat Pengumuman"
        });

        // Fungsi ketika tombol "Lihat Pengumuman" dipencet kembali
        tombolBuka.addEventListener("click", () => {
            tombolBuka.classList.add("tersembunyi"); // Sembunyikan dirinya sendiri
            boxPengumuman.classList.remove("tersembunyi"); // Munculkan kembali teks berjalan
        });
    }
});
