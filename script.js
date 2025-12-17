/**
 * PORTFOLIO LOGIC - ARIEF RAHMAN
 * Mengatur navigasi dan animasi halaman
 */

function showPage(pageId) {
    // 1. Ambil semua elemen dengan class 'page'
    const pages = document.querySelectorAll('.page');
    
    // 2. Sembunyikan semua halaman dan hapus class animasi lama
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.remove('animate__fadeIn');
        
        // Cari elemen di dalam halaman yang punya animasi dan reset mereka
        const animatedElements = page.querySelectorAll('.animate__animated');
        animatedElements.forEach(el => {
            // Kita hapus class animasi sementara agar bisa di-trigger ulang
            const currentClasses = Array.from(el.classList);
            const animationClass = currentClasses.find(c => c.startsWith('animate__'));
            if (animationClass) {
                el.classList.remove(animationClass);
                // Trigger reflow (trik agar browser mendeteksi perubahan untuk animasi ulang)
                void el.offsetWidth; 
                el.classList.add(animationClass);
            }
        });
    });

    // 3. Tampilkan halaman yang dituju
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        activePage.classList.add('animate__animated');
        activePage.classList.add('animate__fadeIn');
        
        // Log ke console untuk debugging (bisa dilihat dengan F12 di browser)
        console.log("Menampilkan Halaman: " + pageId);
    }

    // 4. Scroll ke atas otomatis setiap pindah halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * EFEK INTERAKTIF TAMBAHAN
 */

// Menambahkan efek hover pada tombol navigasi yang sedang aktif
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        navButtons.forEach(b => b.style.color = ''); // Reset warna semua tombol
        this.style.color = '#3498db'; // Beri warna pada tombol yang diklik
    });
});

// Menangani klik pada tombol "Download CV" agar memberikan feedback visual
function downloadFeedback() {
    alert("Terima kasih Arief! CV sedang disiapkan untuk dicetak.");
}

// Inisialisasi: Pastikan saat pertama kali dibuka, halaman Home yang muncul
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portofolio Arief Rahman Siap!");
});
