const readline = require('readline-sync');

const peso = readline.questionFloat('Peso: ');
const altura = readline.questionFloat('Altura: ');
const  r = peso / altura ** 2;
console.log(`R ${r} `);

const imc = {
'IMC':'Situação',
'Abaixo de 18,5':'Abaixo do peso (magreza)',
'Entre 18,5 e 24,9':'Peso normal',
'Entre 25,0 e 29,9':'Acima do peso (sobrepeso)',
'Entre 30,0 e 34,9':'Obesidade grau I',
'Entre 35,0 e 39,9':'Obesidade grau II',
'40,0 e acima':'Obesidade graus III e IV'
}
console.table(imc);