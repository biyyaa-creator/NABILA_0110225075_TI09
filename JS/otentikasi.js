function cekLogin() {
    const benarUser = "biwwa";
    const benarPass = "0103";

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === benarUser && pass === benarPass) {
        alert("🎀 Login Berhasil, welcome sweetie! 💗");
        window.location.href = "sukses.html";
    } else {
        alert("❌ Login Gagal! Username atau password salah.");
    }
}
