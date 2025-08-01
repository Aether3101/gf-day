document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan referensi ke semua elemen yang diperlukan berdasarkan ID
    const nextButton1 = document.getElementById('nextButton1');
    const nextButton2 = document.getElementById('nextButton2');
    const introSection = document.getElementById('intro-section');
    const contentSection1 = document.getElementById('content-section-1');
    const contentSection2 = document.getElementById('content-section-2');

    // Listener untuk tombol Next pertama (dari intro-section ke content-section-1)
    if (nextButton1 && introSection && contentSection1) {
        nextButton1.addEventListener('click', function() {
            // Sembunyikan intro-section dengan animasi fade-out
            introSection.classList.add('fade-out');
            introSection.classList.remove('active'); // Hapus 'active' agar tidak mengambil ruang

            // Tunggu hingga animasi fade-out selesai (durasi 1000ms = 1 detik)
            setTimeout(function() {
                introSection.style.display = 'none'; // Sembunyikan elemen secara fisik

                // Tampilkan content-section-1 dengan animasi fade-in
                contentSection1.style.display = 'flex'; // Penting: atur display ke 'flex' agar konten terlihat
                contentSection1.classList.add('active', 'fade-in');

                // Bersihkan kelas 'fade-out' dari intro-section (opsional, untuk reuse)
                introSection.classList.remove('fade-out');
            }, 1000); // Durasi ini harus sesuai dengan 'transition' di CSS untuk '.section'
        });
    } else {
        // Logging error di konsol jika ada elemen yang tidak ditemukan
        console.error("Kesalahan JS: Elemen HTML untuk tombol Next 1 atau section pembuka/konten 1 tidak ditemukan.");
        console.log("nextButton1:", nextButton1, "introSection:", introSection, "contentSection1:", contentSection1);
    }

    // Listener untuk tombol Next kedua (dari content-section-1 ke content-section-2)
    if (nextButton2 && contentSection1 && contentSection2) {
        nextButton2.addEventListener('click', function() {
            // Sembunyikan content-section-1 dengan animasi fade-out
            contentSection1.classList.add('fade-out');
            contentSection1.classList.remove('active');

            // Tunggu hingga animasi fade-out selesai
            setTimeout(function() {
                contentSection1.style.display = 'none'; // Sembunyikan elemen secara fisik

                // Tampilkan content-section-2 dengan animasi fade-in
                contentSection2.style.display = 'flex'; // Penting: atur display ke 'flex'
                contentSection2.classList.add('active', 'fade-in');

                // Bersihkan kelas 'fade-out' dari content-section-1
                contentSection1.classList.remove('fade-out');
            }, 1000); // Durasi ini harus sesuai dengan 'transition' di CSS
        });
    } else {
        // Logging error di konsol jika ada elemen yang tidak ditemukan
        console.error("Kesalahan JS: Elemen HTML untuk tombol Next 2 atau konten 1/2 tidak ditemukan.");
        console.log("nextButton2:", nextButton2, "contentSection1:", contentSection1, "contentSection2:", contentSection2);
    }
});