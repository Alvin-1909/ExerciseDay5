function angkaGanjil(array: number[]): number[] {
  let arrayGenap: number[] = []; //array baru untuk menyimpan angka genap

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayGenap.push(array[i]);
    }
  }
  return arrayGenap;
}

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = angkaGanjil(angka);
console.log(angka + "->", hasil);

const removeOdd = (numbers: number[]) =>
  console.log(numbers.filter((n) => n % 2 == 0));
