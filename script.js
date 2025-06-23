// refactor
//id d1 - d4 and s1- s4
const d = [];
const s = [];

const plus = [];
const minus = [];

// icon plus and minus

for (let i = 1; i <= 4; i++) {
  d[i] = document.getElementById(`d${i}`);
  s[i] = document.getElementById(`s${i}`);
  plus[i] = document.getElementById(`plus${i}`);
  minus[i] = document.getElementById(`minus${i}`);

  d[i].addEventListener("click", function () {
    const isOpen = s[i].classList.contains("show");

    // Tutup semua dulu
    for (let j = 1; j <= 4; j++) {
      s[j].classList.remove("show");
      plus[j].classList.remove("hide");
      minus[j].classList.remove("visible"); // 🧽 Bersihkan dulu
      minus[j].classList.add("hide");
    }

    // Kalau belum terbuka, baru buka
    if (!isOpen) {
      s[i].classList.add("show");
      plus[i].classList.add("hide");
      minus[i].classList.remove("hide"); // Tampilkan
      minus[i].classList.add("visible"); // Beri class tampil
    }
  });
}

