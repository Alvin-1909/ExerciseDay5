// menghitung BMI

function hitungBMI(berat: number, tinggi: number): string {
  const bmi = berat / (tinggi * tinggi);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

const berat = 74;
const tinggi = 1.68;

console.log(`Berat: ${berat} kg`);
console.log(`Tinggi: ${tinggi} m`);
console.log(`Kategori BMI: ${hitungBMI(berat, tinggi)}`);
