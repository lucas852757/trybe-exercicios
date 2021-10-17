/*3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */
let store = [2, 4, 6, 7, 10, 0, -3];


function arrayInterger(block) {
  let length = block.length;
  let storeLesser;
  let indexReturner;
  for (let index = 0, count = 0; index < length; index += 1, count += 1) {
    if (count == 0) {
      storeLesser = block[index];
    } else if (storeLesser > block[index]) {
      storeLesser = block[index];
      indexReturner = index;
    }
  }
  return indexReturner;
}

console.log(arrayInterger(store)); 