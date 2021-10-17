/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */
let store = [17, 30, 5, 25];


function arrayInterger(block) {
  let length = block.length;
  let storeGrater;
  let indexReturner;
  for (let index = 0, count = 0; index < length; index += 1, count += 1) {
    if (count == 0) {
      storeGrater = block[index];
    } else if (storeGrater < block[index]) {
      storeGrater = block[index];
      indexReturner = index;
    }
  }
  return indexReturner;
}

console.log(arrayInterger(store));