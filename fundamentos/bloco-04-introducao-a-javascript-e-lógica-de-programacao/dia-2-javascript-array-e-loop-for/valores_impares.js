let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 == 1) {
    contador += 1;
  }
}

if (contador > 0) {
  console.log("Quantidade de valores primos: ", contador);
} else {
  console.log("Quantidade de valores primos: ", contador);
}

/* O código imprime a quantidade de valores primos. Caso não haja,
impirme a mesnasagem: Nenhum valor primo . */