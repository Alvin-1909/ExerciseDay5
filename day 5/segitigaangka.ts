// buat segitiga angka
// tinggi = 4

function segitigaAngka(tinggi: number) {
  let angka7: number = 1;
  for (let i = 1; i <= tinggi; i++) {
    let barisAngka = "";
    for (let j = 1; j <= i; j++) {
      barisAngka += (angka7 < 10 ? "0" : "") + angka7 + " ";
      angka7++;
    }
    console.log(barisAngka.trim());
  }
}

segitigaAngka(4);
