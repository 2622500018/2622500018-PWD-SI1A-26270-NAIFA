const form = document.getElementById("formBukuTamu");
const daftarPesan = document.getElementById("daftarPesan");

// Mengambil pesan yang tersimpan di browser
let pesanPengunjung = JSON.parse(
    localStorage.getItem("pesanKopiNaifa") || "[]"
);

// Menampilkan semua pesan
function tampilkanPesan() {
    daftarPesan.replaceChildren();

    if (pesanPengunjung.length === 0) {
        daftarPesan.textContent = "Belum ada pesan dari pengunjung.";
        return;
    }

    pesanPengunjung.forEach(function(pesan) {
        const kartu = document.createElement("div");
        kartu.className = "pesan-pengunjung";

        const judul = document.createElement("h3");
        judul.textContent = pesan.nama;

        const email = document.createElement("p");
        email.textContent = "Email: " + pesan.email;

        const hp = document.createElement("p");
        hp.textContent = "Nomor HP: " + pesan.hp;

        const pesanan = document.createElement("p");
        pesanan.textContent = "Pesanan: " + pesan.pesanan;

        const kesan = document.createElement("p");
        kesan.textContent = "Kesan: " + pesan.kesan;

        kartu.append(judul, email, hp, pesanan, kesan);
        daftarPesan.appendChild(kartu);
    });
}

// Menyimpan pesan saat formulir dikirim
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const pesanBaru = {
        nama: document.getElementById("nama").value.trim(),
        email: document.getElementById("email").value.trim(),
        hp: document.getElementById("hp").value.trim(),
        pesanan: document.getElementById("pesanan").value,
        kesan: document.getElementById("kesan").value.trim()
    };

    pesanPengunjung.push(pesanBaru);

    localStorage.setItem(
        "pesanKopiNaifa",
        JSON.stringify(pesanPengunjung)
    );

    form.reset();
    tampilkanPesan();

    alert("Terima kasih! Pesan kamu berhasil disimpan.");
});

// Menampilkan pesan yang sudah tersimpan
tampilkanPesan();