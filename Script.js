function masuk() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
}

let tombol2Diklik = false;
let tombol3Diklik = false;
let sudahAktif = false;

function showText(nomor) {
  const textBox = document.getElementById('textBox');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');

  if (nomor === 1) {
    textBox.textContent = `Ciri-cirinya:
Aku tinggi, pinter, baik, tingkahnya kadang lucu, kamu mungkin sering menanyakan sesuatu kepadaku, dan inisial nama panggilanku huruf ke-23 setelah huruf T (VWXYZA dan seterusnya).`;

    if (!sudahAktif) {
      btn2.disabled = false;
      btn3.disabled = false;
      sudahAktif = true;
    } else {
      if (tombol2Diklik) btn2.disabled = false;
      if (tombol3Diklik) btn3.disabled = false;
    }
  }

  if (nomor === 2) {
    textBox.textContent = `Serius Rin? Kalau begitu kasih kertas dengan kode 223 ke Dedi atau Elis, bilang aja nanti kasih ke aku. Soalnya kalau kamu yang ngasih pasti ada yang cemburu (iki). Tapi maaf hubungan kita mungkin sebentar karena beda jalur.`;
    tombol2Diklik = true;
    btn2.disabled = true;
    btn3.disabled = true;
  }

  if (nomor === 3) {
    textBox.textContent = `Ya sudah, jika ini yang terbaik untukmu aku tidak akan memaksa. Karena tujuan kita berbeda.`;
    tombol3Diklik = true;
    btn2.disabled = true;
    btn3.disabled = true;
  }
}
