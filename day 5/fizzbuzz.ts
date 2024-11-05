const fizzBuzz = (n: number) => {
  let result: string = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      result += " "; // kelipatan 3 dan 5 menampilkan fizzbuzz
    } else if (i % 3 === 0) {
      console.log("Fizz");
      result += " "; // kelipatan 3 menampilkan fizz
    } else if (i % 5 === 0) {
      console.log("Buzz");
      result += " "; // kelipatan 5 menampilkan buzz
    } else {
      console.log(i); // bukan kelipatan 3 atau 5 menampilkan angka
    }
  }
};

fizzBuzz(15);
