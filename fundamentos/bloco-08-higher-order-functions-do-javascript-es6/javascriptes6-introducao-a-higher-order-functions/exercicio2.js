/* - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").  */

/* function number(callBack) {
  let number = Math.floor(Math.random() * 6);
  if (callBack === number) {
    return 'Parabéns você ganhou';
  }
  else {
    return 'Tente novamente';
  }
} */


function hof(p,  callBack = (number) => {
  let randomNumber = Math.floor(Math.random() * (5 - 1 +1)) + 1;
   if (number === randomNumber) {
     return "Parabéns você ganhou";
   } else {
     return "Tente novamente";
   }
 }) {
  let a;
  a = callBack(p);
  return a;
}

console.log(hof(2));
