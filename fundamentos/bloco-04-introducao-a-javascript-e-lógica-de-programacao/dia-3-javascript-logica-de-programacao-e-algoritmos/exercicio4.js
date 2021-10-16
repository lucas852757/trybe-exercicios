let n = 8;
let n3 = 0;
let count = 0;
let store = 0;
let store1 = 0;
let number = 0;
let pair = false;
let breakPoint = false;

if (n % 2 == 0) {
  pair = true;
  store = n - 2;
  store1 = store / 2;
}
store1 = store / 2;
for (let begin = 1, n1 = 0; begin <= n; begin += 1, n1 += 1) {
  /* O breakPoint auxilia na execução do programa*/
  if (breakPoint) {
    break;
  } else {
    if (begin > 1) {
      store1 -= 1;
    }
    number += 2;
    for (let begin1 = 1, n2 = n; begin1 <= n2; begin1 += 1) {
      if ((begin1 <= store1)) {
        process.stdout.write(' ');
      }
      else {
        if (count < number) {
          process.stdout.write('*');
          count += 1;
          if (count == n2) {
            breakPoint = true;
          }
        }
        // else {
        // break;
        //}
      }
      if ((begin1 > store1 + number)) {
        process.stdout.write(' ');

        // Solved it
        if (begin1 == n2) {//
          break;
        }
      }

    }
    count = 0;
    console.log();
  }
}
/*Números pares */