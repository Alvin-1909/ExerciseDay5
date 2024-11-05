// menghitung BMI

function hitungBMI(berat: number, tinggi: number): string {
  let bmi = berat / (tinggi * tinggi);

  if (bmi < 18.5) {
    // berat kurang dari 18.5 = less weight
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // berat 18.5 / lebih dari 18.5 sampai 24.9/kurang dari 24.9 = normal weight
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    // berat 25.0 / lebih dari 25.0 sampai 29.9/kurang dari 29.9 = over
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    // berat 30.0 / lebih dari 30.0 sampai 39.9/kurang dari 39.9 = very overweight
    return "very overweight";
  } else {
    return "obesity"; // berat lebih dri 40.0 maka obesitas
  }
}

let berat = 70;
let tinggi = 1.75;

console.log("Berat:", berat, "kg");
console.log("Tinggi:", tinggi, "m");
console.log("Kategori BMI:", hitungBMI(berat, tinggi));
