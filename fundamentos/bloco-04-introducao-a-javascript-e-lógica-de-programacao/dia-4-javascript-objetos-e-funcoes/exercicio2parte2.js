/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */
let store = [17, 30, 5, 25];


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

console.log(arrayInterger(store));