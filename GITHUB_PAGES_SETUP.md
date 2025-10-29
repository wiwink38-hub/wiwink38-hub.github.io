# Panduan Deploy ke GitHub Pages

## Konfigurasi yang Sudah Dibuat

### 1. Vite Configuration (vite.config.ts)
Konfigurasi Vite sudah diatur untuk mendukung GitHub Pages dengan:
- `base: '/'` - Mengatur aplikasi berjalan di root directory
- `host: "0.0.0.0"` dan `port: 5000` - Untuk development lokal
- `build.outDir: 'dist'` - Output build ke folder dist

### 2. GitHub Actions Workflow (.github/workflows/deploy.yml)
Workflow otomatis untuk deployment sudah dibuat dengan fitur:
- Auto-deploy saat push ke branch `main` atau `master`
- Manual deployment dengan workflow_dispatch
- Build dan upload artifact ke GitHub Pages
- Menggunakan Node.js 20 dan npm cache

## Cara Menggunakan

### Setup di GitHub Repository

1. **Push kode ke GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push origin main
   ```

2. **Aktifkan GitHub Pages**:
   - Buka repository Anda di GitHub
   - Pergi ke **Settings** > **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**
   
3. **Deploy Otomatis**:
   - Setiap kali Anda push ke branch main/master, GitHub Actions akan otomatis:
     - Install dependencies
     - Build aplikasi
     - Deploy ke GitHub Pages
   
4. **Website Anda akan tersedia di**:
   - Untuk user/org pages: `https://username.github.io/`
   - Untuk project pages: `https://username.github.io/repository-name/`

### Deployment Manual

Jika Anda ingin deploy secara manual:
1. Pergi ke tab **Actions** di GitHub repository
2. Pilih workflow "Deploy to GitHub Pages"
3. Klik **Run workflow**

### Development Lokal

Untuk menjalankan aplikasi secara lokal:
```bash
npm install
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5000`

### Build Lokal

Untuk build aplikasi secara lokal:
```bash
npm run build
```

Preview build:
```bash
npm run preview
```

## Catatan Penting

### Mengubah Base Path

Jika repository Anda bukan di root (misalnya `username.github.io/my-app/`):
1. Edit `vite.config.ts`
2. Ubah `base: '/'` menjadi `base: '/my-app/'` (sesuaikan dengan nama repository)

### Troubleshooting

**Masalah**: Halaman kosong setelah deploy
- **Solusi**: Periksa base path di vite.config.ts sesuai dengan URL GitHub Pages Anda

**Masalah**: Assets tidak muncul (404)
- **Solusi**: Pastikan base path sudah benar

**Masalah**: Workflow gagal
- **Solusi**: Periksa tab Actions di GitHub untuk melihat error log

## Custom Domain

Jika Anda menggunakan custom domain:
1. Tambahkan file `CNAME` di folder `public/` dengan nama domain Anda
2. Konfigurasi DNS domain Anda sesuai petunjuk GitHub
3. `base: '/'` sudah benar untuk custom domain

## Resources

- [Vite Deployment Guide](https://vite.dev/guide/static-deploy)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
