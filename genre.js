document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("genreContainer");

    function buatMenuGenre() {
        if (!container) return;

        dataGenreNexa.forEach((genre) => {
            // Buat elemen link berupa tombol kapsul
            const tombolGenre = document.createElement("a");
            tombolGenre.href = genre.link;
            tombolGenre.classList.add("genre-item");
            tombolGenre.textContent = genre.nama;

            // Jika statusnya aktif (seperti menu "All"), berikan class tambahan
            if (genre.aktif) {
                tombolGenre.classList.add("aktif");
            }

            container.appendChild(tombolGenre);
        });
    }

    buatMenuGenre();
});
