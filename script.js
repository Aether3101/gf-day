document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan referensi ke semua elemen yang diperlukan
    const nextButton1 = document.getElementById('nextButton1');
    const nextButton2 = document.getElementById('nextButton2'); // Pastikan ID ini benar
    const introSection = document.getElementById('intro-section');
    const contentSection1 = document.getElementById('content-section-1'); // Pastikan ID ini benar
    const contentSection2 = document.getElementById('content-section-2'); // Pastikan ID ini benar

    // Listener untuk tombol Next pertama
    if (nextButton1 && introSection && contentSection1) {
        nextButton1.addEventListener('click', function() {
            introSection.classList.add('fade-out');
            introSection.classList.remove('active');

            setTimeout(function() {
                introSection.style.display = 'none';
                contentSection1.style.display = 'flex'; // Pastikan ini diatur ke 'flex'
                contentSection1.classList.add('active', 'fade-in');
                introSection.classList.remove('fade-out');
            }, 1000);
        });
    } else {
        console.error("Kesalahan JS: Elemen HTML untuk tombol Next 1 atau intro/konten 1 tidak ditemukan.");
        console.log("nextButton1:", nextButton1, "introSection:", introSection, "contentSection1:", contentSection1);
    }

    // Listener untuk tombol Next kedua
    if (nextButton2 && contentSection1 && contentSection2) { // Pastikan semua ini non-null
        nextButton2.addEventListener('click', function() {
            contentSection1.classList.add('fade-out');
            contentSection1.classList.remove('active');

            setTimeout(function() {
                contentSection1.style.display = 'none';
                contentSection2.style.display = 'flex'; // Pastikan ini diatur ke 'flex'
                contentSection2.classList.add('active', 'fade-in');
                contentSection1.classList.remove('fade-out');
            }, 1000);
        });
    } else {
        // Ini akan muncul di konsol jika tombol Next 2 atau salah satu section tidak ditemukan
        console.error("Kesalahan JS: Elemen HTML untuk tombol Next 2 atau konten 1/2 tidak ditemukan.");
        console.log("nextButton2:", nextButton2, "contentSection1:", contentSection1, "contentSection2:", contentSection2);
    }
});