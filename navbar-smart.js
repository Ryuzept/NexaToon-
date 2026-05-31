document.addEventListener("DOMContentLoaded", () => {
    // 1. Ambil elemen navbar (Sesuaikan class jika berbeda, misal: .navbar atau .header)
    const navbar = document.querySelector(".navbar-atas") || document.querySelector("nav") || document.querySelector("header"); 
    
    if (!navbar) return;

    // 2. AMANKAN LAYOUT (Agar TIDAK NABRAK Slider/Konten di bawahnya)
    const tinggiNavbar = navbar.offsetHeight;
    // Otomatis memberikan jarak pada body agar slider tidak amblas ke atas
    document.body.style.paddingTop = tinggiNavbar + "px"; 

    // Kunci CSS dasar langsung lewat JS agar sinkron
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "10000"; // Angka super tinggi agar tidak tertutup slider
    
    // TRANSISI SUPER HALUS (Menggunakan cubic-bezier premium ala aplikasi iOS)
    navbar.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease";

    let posisiTerakhir = window.scrollY;
    let ticking = false;

    // 3. LOGIKA SCROLL DENGAN REDAMAN (RequestAnimationFrame agar pergerakan mulus)
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                let posisiSekarang = window.scrollY;

                // Tolong toleransi 10px scroll agar tidak terlalu sensitif/kasar
                if (Math.abs(posisiTerakhir - posisiSekarang) <= 10) {
                    ticking = false;
                    return;
                }

                // Scroll ke BAWAH -> Sembunyikan Slider Navbar
                if (posisiSekarang > posisiTerakhir && posisiSekarang > tinggiNavbar) {
                    navbar.style.transform = `translateY(-${tinggiNavbar}px)`;
                } 
                // Scroll ke ATAS -> Munculkan Navbar
                else {
                    navbar.style.transform = "translateY(0)";
                }

                posisiTerakhir = posisiSekarang;
                ticking = false;
            });

            ticking = true;
        }
    });
});
