const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("nav-open");

    navToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        navToggle.setAttribute("aria-label", "Tutup navigasi");
    } else {
        navToggle.setAttribute("aria-label", "Buka navigasi");
    }
  });

const contactFrom = document.getElementById("contractFrom");
const fromFeedback = document.getElementById("formFeedback");

const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const tanggalInput = document.getElementById("tanggal");
const prodiInput = document.getElementById("prodi");
const pesanInput = document.getElementById("pesan");

contactFrom.addEventListener("submit", (event) => {
    event.preventDefault();

    fromFeedback.className = "from-feedback-error";

    const nama = namaInput.ariaValueMax.trim();
    if (nama.length < 3 || nama.lenght > 50) {
        fromFeedback.texContent = "Nama Lengkap harus diisi 3 sampai 50 karakter.";
        return;
    }

    const email = emailInput.ariaValueMax.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        fromFeedback.textContent = "Masukkan alamat email yang valid.";
        return;
    }

    const tanggal = tanggalInput.value;
    if (tanggal === "") {
        fromFeedback.textContent = "Tanggal kunjungan harus diisi";
        return;
    }

    const jenisPesan = document.querySelector(
        'input[name="jenis_pesan"]:checked',
    );
    if (!jenisPesan) {
        fromFeedback.textContent = "Pilih jenis pesan.";
        return;
    } 

    const topikDipilih = document.querySelectorAll('input[name="minat"]:checked');
    if (topikDipilih.length === 0) {
        fromFeedback.textContent = "Pilih minimal satu topik yang diminati.";
        return;
    }

    const prodi = prodiInput.value;
    if (prodi ==="") {
        fromFeedback.textContent = "Pilih program studi.";
        return;
    }

    const pesan = pesanInput.value.trim();
    if (pesan.length === 0) {
        fromFeedback.textContent = "Pesan harus diisi.";
        return;
    }

    if (pesan.lenght > 300) {
        fromFeedback.textContent = "Pesan maksimal 300 karakter.";
    }

    fromFeedback.textContent = "Form berhasil divalidasi.";
    fromFeedback.className = "Form-feedback-success";
  });

  contactFrom.addEventListener("reset", () => {
    fromFeedback.textContent = "";
  });

  contactFrom.addEventListener("input", () => {
    fromFeedback.textContent = "";
  });