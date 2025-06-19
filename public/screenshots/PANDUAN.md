# Panduan Penggunaan Komponen Showcase

## Menampilkan UI Mobile Aplikasi

Komponen Showcase sekarang telah diperbarui untuk menampilkan UI mobile aplikasi Anda dalam format PNG. Berikut adalah panduan cara menggunakan dan menyesuaikannya.

## Cara Mengganti Screenshot UI Mobile

1. **Persiapkan gambar screenshot**
   - Format: PNG
   - Ukuran yang direkomendasikan: 1080px x 2340px (rasio 9:19)
   - Jumlah gambar: 2 screenshot berbeda dari UI aplikasi Anda

2. **Ganti file gambar placeholder**
   - Letakkan gambar screenshot Anda di folder `/public/screenshots/`
   - Beri nama sesuai dengan nama-nama berikut:
     - `app-screen-1.png`
     - `app-screen-2.png`

3. **Sesuaikan teks dan judul (opsional)**
   - Buka file `src/components/Showcase.tsx`
   - Ubah judul dan deskripsi di bagian `appScreenshots` array
   - Anda juga dapat mengubah teks di bagian "Fitur Unggulan"

## Cara Melihat Perubahan

1. Jalankan development server dengan perintah:
   ```
   npm run dev
   ```

2. Buka browser dan akses `http://localhost:3000`

3. Scroll ke bagian "CyberLens dalam Aksi" untuk melihat tampilan UI mobile aplikasi Anda

## Fitur yang Tersedia

- **Carousel otomatis**: Screenshot akan berganti setiap 5 detik
- **Navigasi manual**: Pengguna dapat klik tombol bulat untuk berganti screenshot
- **Responsif**: Tampilan menyesuaikan dengan ukuran layar
- **Animasi**: Efek transisi smooth saat pergantian screenshot
- **Fallback teks**: Menampilkan pesan panduan jika gambar tidak ditemukan

## Tips Tampilan Optimal

- Gunakan screenshot dengan resolusi tinggi untuk tampilan yang tajam
- Pilih screenshot yang menampilkan fitur utama aplikasi Anda
- Pastikan screenshot memiliki kontras yang baik dengan frame smartphone
- Sesuaikan deskripsi fitur untuk mencerminkan keunggulan aplikasi Anda 