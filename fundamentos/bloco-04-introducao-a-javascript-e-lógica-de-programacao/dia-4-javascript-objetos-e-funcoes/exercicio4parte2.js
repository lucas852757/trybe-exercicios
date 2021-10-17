/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

// Encontra o nome com a maior quantidade de caracteres.
function arrayInterger(block) {
  let length = block.length;
  let storageGrater;
  let indexReturner;
  for (let index = 0, count = 0; index < length; index += 1, count += 1) {
    if (count == 0) {
      storageGrater = block[index];
    } else if (storageGrater < block[index]) {
      storageGrater = block[index];
      indexReturner = index;
    }
  }
  return indexReturner;
}

// Recebe o  array com nomes
function theBigName(n) {
  let storage = [];
  for (let index = 0; index < n.length; index += 1) {
    storage.push(n[index].length);

  }

  return n[arrayInterger(storage)];
}

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(theBigName(test)); // Imprime nome com maior quantidade de caracteres.