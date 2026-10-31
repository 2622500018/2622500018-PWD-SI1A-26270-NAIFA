<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buku Tamu - Kopi Latte Naifa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- NAVIGASI -->
    <header class="navbar">
        <a href="index.php" class="logo">☕ Kopi Latte Naifa</a>

        <nav>
            <a href="index.php">Beranda</a>
            <a href="menu.php">Menu</a>
            <a href="biodata.php">Biodata Diri</a>
            <a href="buku-tamu.php">Buku Tamu</a>
        </nav>
    </header>

    <!-- BUKU TAMU -->
    <section class="buku-tamu">
        <h2>Buku Tamu</h2>
        <p class="pengantar">
            Yuk, ceritakan pengalamanmu menikmati Kopi Latte Naifa!
        </p>

        <form id="formBukuTamu">
            <label for="nama">Nama Pengunjung</label>
            <input type="text" id="nama" required
                   placeholder="Masukkan nama kamu">

            <label for="email">Email</label>
            <input type="email" id="email" required
                   placeholder="contoh@email.com">

            <label for="hp">Nomor HP</label>
            <input type="tel" id="hp" required
                   placeholder="Masukkan nomor HP">

            <label for="pesanan">Pesanan Kopi</label>
            <select id="pesanan" required>
                <option value="">-- Pilih menu kopi --</option>
                <option>Classic Latte</option>
                <option>Caramel Latte</option>
                <option>Popcorn Latte</option>
                <option>Hazelnut Latte</option>
                <option>Iced Latte</option>
            </select>

            <label for="kesan">Kesan untuk Kopi Latte Naifa</label>
            <textarea id="kesan" rows="4" required
                placeholder="Tulis kesan kamu di sini..."></textarea>

            <button type="submit">Kirim Pesan</button>
        </form>

        <h2>Pesan dari Pengunjung</h2>
        <div id="daftarPesan"></div>
    </section>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2026 Kopi Latte Naifa</p>
    </footer>

    <script src="buku-tamu.js"></script>
</body>
</html>