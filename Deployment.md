# Deployment Aplikasi React ke Vercel

## Langkah-langkah Deployment

1. **Daftar dan Buat Akun di Vercel**
   - Kunjungi [Vercel](https://vercel.com/) dan daftar menggunakan akun GitHub.
   
2. **Integrasi dengan Vercel**
   - Login ke Vercel dan tambahkan proyek baru.
   - Pilih repository GitHub yang berisi aplikasi React Anda.
   - Konfigurasi build command (`npm run build`) dan output directory (`build`).
   - Klik "Deploy".

3. **Pipeline Deployment**
   - Setiap push ke branch utama di repository GitHub akan memicu deploy ulang.

4. **Custom Domain**
   - Tambahkan custom domain di tab "Domains" pada dashboard proyek di Vercel.
   - Ikuti petunjuk untuk mengatur DNS dan verifikasi domain.

5. **Pengujian dan Debugging**
   - Akses aplikasi di URL yang diberikan atau custom domain.
   - Uji fitur aplikasi dan perbaiki kesalahan yang ditemukan.

## Konfigurasi Vercel

- **Build Command**: `npm run build`
- **Output Directory**: `build`

