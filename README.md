## Aplikasi Todo dengan React

Aplikasi ini adalah sebuah aplikasi sederhana untuk manajemen tugas (Todo) yang dibangun menggunakan React. Berikut ini adalah dokumentasi mengenai fitur-fitur yang ada dalam aplikasi serta cara instalasi dan menjalankannya.

### Fitur-fitur Aplikasi

1. Tambahkan Tugas Baru
   Pengguna dapat menambahkan tugas baru dengan memasukkan judul tugas melalui input yang disediakan.

2. Tampilkan Daftar Tugas
   Daftar tugas ditampilkan dalam bentuk daftar yang dapat dilihat, yang mencakup judul tugas dan status tugas apakah sudah selesai atau belum.
3. Tandai Tugas Selesai
   Pengguna dapat menandai tugas sebagai selesai dengan mengklik tombol yang sesuai di sebelah tugas yang ingin ditandai.

4. Hapus Tugas
   Tugas dapat dihapus dari daftar dengan mengklik tombol hapus yang tersedia di sebelah tugas yang ingin dihapus.

5. Simpan ke Local Storage
   Daftar tugas disimpan secara lokal menggunakan localStorage, sehingga data tugas tetap tersedia setelah pengguna menutup dan membuka kembali aplikasi.

6. Navigasi Halaman
   Terdapat halaman selamat datang (Welcome) saat pertama kali membuka aplikasi, halaman utama (Home) untuk manajemen tugas, dan halaman perpisahan (Goodbye) saat keluar dari aplikasi.

## Instalasi

Untuk menjalankan aplikasi ini secara lokal, ikuti langkah-langkah berikut:

1. Clone repositori:

   ```bash
   git clone https://github.com/RezaR2P/react-todo.git
   cd react-todo
   ```

2. Instal dependensi:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka Aplikasi
   Aplikasi akan berjalan di browser Anda. Buka http://localhost:5173/ untuk melihat aplikasi Todo.

## Teknologi yang Digunakan

- React: Digunakan untuk membangun antarmuka pengguna aplikasi.
- React Router: Untuk mengelola navigasi antar halaman (Welcome, Home, Goodbye).
- React Hooks (useState, useEffect): Untuk mengelola state komponen fungsional dan efek samping.
- React: Library JavaScript untuk membangun antarmuka pengguna.
- Bootstrap: Framework CSS untuk desain responsif.
- Bootstrap Icons: Library ikon untuk Bootstrap.
- CSS: Gaya kustom untuk aplikasi.

## Struktur File

```plaintext
react-todo/
├── public/         # Direktori untuk file publik seperti index.html, gambar, dll.
└── src/            # Direktori utama aplikasi
    ├── components/ # Direktori untuk komponen React
    │   ├── Header/         # Direktori untuk komponen Header
    │   │   ├── Header.jsx  # File komponen Header
    │   │   └── styles.css  # File gaya untuk komponen Header
    │   ├── Tasks/          # Direktori untuk komponen Daftar Tugas
    │   │   ├── Tasks.jsx   # File komponen Daftar Tugas
    │   │   └── styles.css  # File gaya untuk komponen Daftar Tugas
    ├── pages/      # Direktori untuk halaman-halaman aplikasi
    │   ├── Goodbye.jsx     # Halaman perpisahan
    │   ├── Home.jsx        # Halaman utama untuk manajemen tugas
    │   └── Welcome.jsx     # Halaman selamat datang
    ├── App.js      # Komponen utama aplikasi
    └── index.js    # File utama untuk rendering aplikasi
```

## Berkontribusi

Kontribusi sangat diterima! Silakan ikuti langkah-langkah ini:

1. Fork repositori.
2. Buat cabang baru (git checkout -b feature-branch).
3. Lakukan perubahan Anda.
4. Commit perubahan Anda (git commit -m 'Tambah fitur baru').
5. Push ke cabang (git push origin feature-branch).
6. Buka Pull Request.

## Kontak

- GitHub: [RezaR2P](https://github.com/RezaR2P)
- Instagram: [sjhdskd](https://www.instagram.com/sjhdskd/)

---

Dibuat dengan ❤️ oleh [RezaR2P](https://github.com/RezaR2P)
