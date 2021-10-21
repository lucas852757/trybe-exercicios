/*  1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for */

function verificaPalindromo(w){
  word = [];
  word1 = [];
  for (let index = 0; index < w.length; index += 1) {
    word.push(w[index]);
    word1.push(w[index]);
  }
  word1.reverse();
  for (let index1 = 0; index1 < w.length; index1 += 1) {
    if (word[index1] != word1[index1]) {
      return 'true';
    }
  }
  return  'false' ;
}

console.log(verificaPalindromo('ele'));
