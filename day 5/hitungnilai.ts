function hitungNilai(array: number[]): {
  rendah: number;
  tinggi: number;
  rata2: number;
} {
  let rendah = array[0];
  let tinggi = array[0];
  let total = 0;
  const count = array.length;

  for (let i = 0; i < count; i++) {
    const current = array[i];
    total += current;

    if (current < rendah) {
      rendah = current;
    }

    if (current > tinggi) {
      tinggi = current;
    }
  }

  const rata2 = total / count;

  return { rendah, tinggi, rata2 };
}

const arr = [12, 5, 23, 18, 4, 45, 32];
const hasilnya = hitungNilai(arr);
console.log(arr + "->", hasilnya);
