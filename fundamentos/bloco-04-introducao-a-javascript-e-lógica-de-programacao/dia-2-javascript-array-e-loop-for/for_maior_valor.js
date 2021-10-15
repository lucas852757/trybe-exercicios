let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mediaAritmetica = 0;
let comprimento = numbers.length;
let store = 0;

/*Encontra maior valor */
for (index = 0; index < comprimento; index += 1) {
  for (index1 = 0; index1 < comprimento; index1 += 1) {
    if (numbers[index] >= numbers[index1]) {
      store = numbers[index];
    }
    else {
      break;
    }

  }
  if (index1 == comprimento) {
    break;
  }
}
  console.log(store);

