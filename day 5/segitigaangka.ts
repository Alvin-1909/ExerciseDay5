function segitigaAngka(tinggi: number): void {
  let angka: number = 1;
  for (let i = 1; i <= tinggi; i++) {
    let barisAngka: string = "";
    for (let j = 1; j <= i; j++) {
      barisAngka += (angka < 10 ? "0" : "") + angka + " ";
      angka++;
    }
    console.log(barisAngka.trim());
  }
}

const tinggi1: number = 4;
segitigaAngka(tinggi);
