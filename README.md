# Klinik Coffee ☕

![Klinik Coffee](static/website/images/logo.png)

## 🌟 Overview

Klinik Coffee adalah aplikasi e-commerce untuk kedai kopi yang memungkinkan pelanggan untuk melihat menu, menambahkan item ke keranjang belanja, dan melakukan pembayaran secara online. Aplikasi ini dibangun dengan Django dan terintegrasi dengan Midtrans untuk pemrosesan pembayaran.

## ✨ Fitur

- 📋 Katalog produk dengan kategori
- 🛒 Keranjang belanja dengan manajemen sesi
- 💳 Proses checkout dan pembayaran online
- 🔄 Integrasi Midtrans untuk pemrosesan pembayaran
- 📱 Desain responsif untuk pengalaman pengguna yang optimal
- 👤 Manajemen pelanggan
- 📊 Pelacakan transaksi dan status pembayaran

## 🚀 Cara Memulai

### Prasyarat

- Python 3.8 atau lebih tinggi
- pip (Python package manager)
- Akun Midtrans (untuk pemrosesan pembayaran)

### Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/yourusername/klinik-coffee.git
   cd klinik-coffee
   ```

2. Buat dan aktifkan virtual environment:
   ```bash
   python -m venv venv
   
   # Di Windows
   venv\Scripts\activate
   
   # Di macOS/Linux
   source venv/bin/activate
   ```

3. Instal dependensi:
   ```bash
   pip install -r requirements.txt
   ```

4. Lakukan migrasi database:
   ```bash
   python manage.py migrate
   ```

5. Buat superuser untuk akses admin:
   ```bash
   python manage.py createsuperuser
   ```

6. Jalankan server pengembangan:
   ```bash
   python manage.py runserver
   ```

7. Buka browser dan akses `http://127.0.0.1:8000/`

## ⚙️ Konfigurasi

### Konfigurasi Midtrans

1. Daftar akun di [Midtrans](https://midtrans.com/)
2. Dapatkan Server Key dan Client Key dari dashboard Midtrans
3. Update `settings.py` dengan key Anda:
   ```python
   MIDTRANS_SERVER_KEY = 'your-server-key'
   MIDTRANS_CLIENT_KEY = 'your-client-key'
   ```

### Konfigurasi Database

Secara default, aplikasi menggunakan SQLite. Untuk menggunakan database lain (seperti PostgreSQL atau MySQL), update konfigurasi `DATABASES` di `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 🛠️ Kustomisasi

### Menambahkan Kategori dan Produk

1. Akses panel admin Django di `http://127.0.0.1:8000/admin/`
2. Login dengan kredensial superuser
3. Navigasi ke "Categories" dan tambahkan kategori baru
4. Navigasi ke "Products" dan tambahkan produk baru dengan kategori yang sesuai

### Menyesuaikan Tampilan

1. Template berada di folder `templates/website/`
2. File CSS dan JavaScript berada di folder `static/website/`
3. Untuk mengubah logo, ganti file gambar di `static/website/images/`
4. Untuk mengubah warna dan gaya, edit file CSS di `static/website/css/`

### Menambahkan Fitur Baru

1. Buat app Django baru:
   ```bash
   python manage.py startapp nama_app_baru
   ```

2. Tambahkan app ke `INSTALLED_APPS` di `settings.py`
3. Buat model, view, dan template yang diperlukan
4. Tambahkan URL ke `urls.py`

## 📱 Penggunaan

### Sebagai Pelanggan

1. Buka halaman utama untuk melihat menu
2. Pilih kategori untuk memfilter produk
3. Tambahkan produk ke keranjang belanja
4. Lihat keranjang dan lanjutkan ke checkout
5. Isi informasi pelanggan dan pilih metode pembayaran
6. Selesaikan pembayaran melalui Midtrans

### Sebagai Admin

1. Akses panel admin di `http://127.0.0.1:8000/admin/`
2. Kelola kategori, produk, dan pelanggan
3. Lihat dan kelola transaksi
4. Pantau status pembayaran

## 🔍 Struktur Proyek

```
klinik-coffee/
├── dashboard/              # App untuk fungsionalitas admin
│   ├── migrations/         # Migrasi database untuk app dashboard
│   ├── models.py           # Model data (Product, Category, dll)
│   └── views.py            # View untuk dashboard admin
├── media/                  # File media yang diunggah (gambar produk, dll)
│   └── products/           # Gambar produk
├── static/                 # File statis (CSS, JS, gambar)
│   └── website/            # File statis untuk website
├── templates/              # Template HTML
│   └── website/            # Template untuk website
│       └── component/      # Komponen template yang dapat digunakan kembali
├── website/                # App utama untuk website
│   ├── settings.py         # Konfigurasi Django
│   ├── urls.py             # Konfigurasi URL
│   └── views.py            # View untuk website
├── manage.py               # Script manajemen Django
└── README.md               # Dokumentasi proyek
```

## 🔧 Troubleshooting

### Masalah Umum

1. **Server tidak berjalan**
   - Pastikan virtual environment aktif
   - Periksa apakah semua dependensi terinstal
   - Periksa log error untuk detail lebih lanjut

2. **Pembayaran Midtrans gagal**
   - Verifikasi Server Key dan Client Key
   - Pastikan akun Midtrans dalam mode sandbox untuk pengujian
   - Periksa koneksi internet

3. **Gambar produk tidak muncul**
   - Pastikan MEDIA_URL dan MEDIA_ROOT dikonfigurasi dengan benar
   - Periksa izin folder media

## 🤝 Kontribusi

Kontribusi selalu diterima! Berikut cara Anda dapat berkontribusi:

1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

⭐️ Dibuat dengan ❤️ oleh [Anak UMKT](https://github.com/ItsAltoo)
