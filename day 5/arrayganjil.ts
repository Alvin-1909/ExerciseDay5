function angkaGanjil(array: number[]): number[] {
  return array.filter((n) => n % 2 === 0);
}

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = angkaGanjil(angka);
console.log(angka + "->", hasil);

const removeOdd = (numbers: number[]) =>
  console.log(numbers.filter((n) => n % 2 == 0));
