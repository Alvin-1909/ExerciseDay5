function hitungNilai(array: number[]): {
  rendah: number;
  tinggi: number;
  rata2: number;
} {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let rendah = array[0];
  let tinggi = array[0];
  let total = 0;

  for (const current of array) {
    total += current;

    if (current < rendah) {
      rendah = current;
    }

    if (current > tinggi) {
      tinggi = current;
    }
  }

  const rata2 = total / array.length;

  return { rendah, tinggi, rata2 };
}

const arr = [12, 5, 23, 18, 4, 45, 32];
try {
  const hasilnya = hitungNilai(arr);
  console.log(arr + "->", hasilnya);
} catch (error) {
  console.error(error.message);
}
