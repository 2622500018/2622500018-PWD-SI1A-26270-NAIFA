<?php
// konfigurasi koneksi ke basis data MySQL.
$host = "localhost"; 
$username = "root";
$password = "";
$database = "db_pwd_2622500018";

// membuat koneksi PHP dengan MySQL menggunakan MySQLi.
mysqli_report(MYSQLI_REPORT_OFF);

$koneksi = mysqli_connect($host, $username, $password, $database);

// memeriksa apakah koneksi berhasil atau gagal.
if (!$koneksi) {
    die("Koneksi ke basis data gagal.");
}