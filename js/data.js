/* ===== Data Kegiatan Natujaga =====
Cara menambah dokumentasi kegiatan baru:
1. Masukkan foto ke folder assets/images/kegiatan/
2. Tambah objek baru di array kegiatan di bawah ini (salin salah satu contoh),
   isi 'gambar' dengan daftar nama file foto (boleh lebih dari satu).
*/

const kegiatan = [
    {
        id: 'aksi-bersih-lingkungan',
        judul: 'Aksi Bersih Lingkungan',
        tanggal: '10 Nov 2025',
        kategori: 'Aksi Bersih',
        icon: '🌱',
        deskripsi: 'Menjaga kebersihan lingkungan bersama masyarakat.',
        gambar: [
            'assets/images/kegiatan/aksibersih/gerakanpedulilingkungan.jpg'
        ]
    },
    {
        id: 'beach-clean-up-pantai-maluk',
        judul: 'Beach Clean Up Pantai Maluk',
        tanggal: '12 Desember 2026',
        kategori: 'Aksi Bersih',
        icon: '🏖️',
        deskripsi: 'Menjaga kebersihan pantai bersama masyarakat.',
        gambar: [
            'assets/images/kegiatan/aksibersih/pantaimaluk121226/542742.jpg',
            'assets/images/kegiatan/aksibersih/pantaimaluk121226/2880x1800.jpg'
        ]
    },
    {
        id: 'penanaman-pohon',
        judul: 'Penanaman Pohon',
        tanggal: '28 Okt 2025',
        kategori: 'Penanaman',
        icon: '🌳',
        deskripsi: 'Menanam pohon untuk masa depan yang lebih hijau.',
        gambar: [
            'assets/images/kegiatan/penanaman/penghijauan.jpg'
        ]
    },
    {
        id: 'edukasi-lingkungan',
        judul: 'Edukasi Lingkungan',
        tanggal: '15 Okt 2025',
        kategori: 'Edukasi',
        icon: '📚',
        deskripsi: 'Meningkatkan kesadaran lingkungan sejak dini.',
        gambar: [
            'assets/images/kegiatan/edukasi/baca.png'
        ]
    },
    {
        id: 'kegiatan-sosial',
        judul: 'Kegiatan Sosial',
        tanggal: '5 Okt 2025',
        kategori: 'Sosial',
        icon: '🤝',
        deskripsi: 'Berbagi dan peduli bersama.',
        gambar: [
            'assets/images/kegiatan/sosial/kolaborasisosial.jpg'
        ]
    }
];

/* ===== Data Artikel Natujaga =====
Tambah artikel baru: buat entri baru dengan id unik, lalu tautkan
ke artikel-detail.html?id=ID_ARTIKEL dari halaman artikel.html.
*/
const articles = {
    sampah: {
        judul: 'Pentingnya Pengelolaan Sampah',
        tanggal: '12 Sep 2025',
        kategori: 'Berita',
        isi: `
            <p>Sampah adalah salah satu masalah terbesar yang dihadapi masyarakat modern. Tanpa pengelolaan yang baik, sampah dapat mencemari tanah, air, dan udara.</p>
            <h3>Langkah Sederhana:</h3>
            <ul>
                <li>Kurangi penggunaan plastik sekali pakai.</li>
                <li>Pilah sampah organik dan anorganik.</li>
                <li>Buat kompos dari sampah organik rumahan.</li>
            </ul>
            <p>Dengan sedikit perhatian, kita dapat menciptakan lingkungan yang lebih bersih dan sehat.</p>
        `,
        gambar: [
            'assets/images/artikel/FB_IMG_1685717936789.jpg'
        ]
    },
    hutan: {
        judul: 'Manfaat Hutan Kota',
        tanggal: '5 Sep 2025',
        kategori: 'Lingkungan',
        isi: `
            <p>Hutan kota tidak hanya indah dipandang, tetapi juga memiliki peran penting dalam membersihkan udara dan menyerap emisi karbon.</p>
            <h3>Manfaat Utama:</h3>
            <ul>
                <li>Menyerap polusi udara dari kendaraan bermotor.</li>
                <li>Menurunkan suhu di area perkotaan.</li>
                <li>Menjadi tempat bermain dan edukasi untuk anak-anak.</li>
            </ul>
        `,
        gambar: [
            'assets/images/artikel/1.jpg'
        ]
    },
    bersama: {
        judul: 'Bersama untuk Lingkungan',
        tanggal: '28 Agu 2025',
        kategori: 'Sosial',
        isi: `
            <p>Perubahan besar selalu dimulai dari langkah kecil yang dilakukan bersama-sama. Ketika individu, komunitas, dan organisasi bersatu, dampak yang tercipta jauh lebih besar.</p>
            <h3>Cara Memulai:</h3>
            <ul>
                <li>Ajak tetangga dan teman bergabung program komunitas.</li>
                <li>Mulai dari kegiatan kecil di lingkungan sekitar.</li>
                <li>Bagikan hasil dokumentasi agar makin banyak yang terinspirasi.</li>
            </ul>
        `,
        gambar: [
            'assets/images/kegiatan/amri.jpeg',
            'assets/images/kegiatan/Life.jpg'
        ]

    },
    edukasi: {
        judul: 'Pemuda Benete Berhasil Juara Tingkat Kabupaten',
        tanggal: '15 Jan 2026',
        kategori: 'Edukasi',
        isi: `
            <p>Perubahan besar selalu dimulai dari langkah kecil yang dilakukan bersama-sama. Ketika individu, komunitas, dan organisasi bersatu, dampak yang tercipta jauh lebih besar.</p>
            <h3>Cara Memulai:</h3>
            <ul>
                <li>Ajak tetangga dan teman bergabung program komunitas.</li>
                <li>Mulai dari kegiatan kecil di lingkungan sekitar.</li>
                <li>Bagikan hasil dokumentasi agar makin banyak yang terinspirasi.</li>
            </ul>
        `,
        gambar: [
            'assets/images/kegiatan/amri.jpeg',
            'assets/images/kegiatan/Life.jpg'
        ]
    },
    amri: {
        judul: 'test 1',
        tanggal: '15 Jan 2026',
        kategori: 'Edukasi',
        isi: `
            <p>Perubahan besar selalu dimulai dari langkah kecil yang dilakukan bersama-sama. Ketika individu, komunitas, dan organisasi bersatu, dampak yang tercipta jauh lebih besar.</p>
            <h3>Cara Memulai:</h3>
            <ul>
                <li>Ajak tetangga dan teman bergabung program komunitas.</li>
                <li>Mulai dari kegiatan kecil di lingkungan sekitar.</li>
                <li>Bagikan hasil dokumentasi agar makin banyak yang terinspirasi.</li>
            </ul>
        `,
        gambar: [
            'assets/images/kegiatan/amri.jpeg',
            'assets/images/kegiatan/Life.jpg'
        ]
    },
    saidul: {
        judul: 'test 2',
        tanggal: '15 Jan 2026',
        kategori: 'Edukasi',
        isi: `
            <p>Perubahan besar selalu dimulai dari langkah kecil yang dilakukan bersama-sama. Ketika individu, komunitas, dan organisasi bersatu, dampak yang tercipta jauh lebih besar.</p>
            <h3>Cara Memulai:</h3>
            <ul>
                <li>Ajak tetangga dan teman bergabung program komunitas.</li>
                <li>Mulai dari kegiatan kecil di lingkungan sekitar.</li>
                <li>Bagikan hasil dokumentasi agar makin banyak yang terinspirasi.</li>
            </ul>
        `,
        gambar: [
            'assets/images/kegiatan/amri.jpeg',
            'assets/images/kegiatan/Life.jpg'
        ]
    },
    boy: {
        judul: 'test3',
        tanggal: '15 Jan 2026',
        kategori: 'Edukasi',
        isi: `
            <p>Perubahan besar selalu dimulai dari langkah kecil yang dilakukan bersama-sama. Ketika individu, komunitas, dan organisasi bersatu, dampak yang tercipta jauh lebih besar.</p>
            <h3>Cara Memulai:</h3>
            <ul>
                <li>Ajak tetangga dan teman bergabung program komunitas.</li>
                <li>Mulai dari kegiatan kecil di lingkungan sekitar.</li>
                <li>Bagikan hasil dokumentasi agar makin banyak yang terinspirasi.</li>
            </ul>
        `,
        gambar: [
            'assets/images/kegiatan/amri.jpeg',
            'assets/images/kegiatan/Life.jpg'
        ]
    },
    lol: {
        judul: 'test4',
        tanggal: '15 Jan 2026',
        kategori: 'Edukasi',
        isi: `
            <p>Perubahan besar selalu dimulai dari langkah kecil yang dilakukan bersama-sama. Ketika individu, komunitas, dan organisasi bersatu, dampak yang tercipta jauh lebih besar.</p>
            <h3>Cara Memulai:</h3>
            <ul>
                <li>Ajak tetangga dan teman bergabung program komunitas.</li>
                <li>Mulai dari kegiatan kecil di lingkungan sekitar.</li>
                <li>Bagikan hasil dokumentasi agar makin banyak yang terinspirasi.</li>
            </ul>
        `,
        gambar: [
            'assets/images/kegiatan/amri.jpeg',
            'assets/images/kegiatan/Life.jpg'
        ]
    }
};