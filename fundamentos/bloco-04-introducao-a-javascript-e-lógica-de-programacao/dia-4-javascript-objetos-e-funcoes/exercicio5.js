/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:  */

let keysOfArray;
let keysOfArray1;

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';


let info1 = {
  personagem: 'Tio Patinhas',
  origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

keysOfArray = Object.entries(info);
keysOfArray1 = Object.entries(info1);



for (let key in keysOfArray1) {
  if (key < 3) {
    console.log(keysOfArray[key][1], ' e ', keysOfArray1[key][1])
  }else{
    console.log('Ambos recorrentes');
  }
}