let salarioBruto = 3000;
let inss = 0;
let ir = 0;
let salarioBase = 0;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 8 /100;
}
else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92)) {
  inss = salarioBruto * 9 /100;
}
else if ((salarioBruto >= 2594.93) && (salarioBruto <= 5189.82)) {
  inss = salarioBruto * 11 /100;
}
else {
  inss = salarioBruto - 570.88;
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  console.log("Iesnto de imposto de renda.")
}else if ((salarioBase >= 1903.99) && (salarioBase <= 2826.65 )) {
  ir = salarioBase * 7.5 / 100 - 142.8;
}
else if ((salario >= 2826.66) && (salarioBase <= 3751.5)){
  ir = salarioBase * 15 / 100 - 354.80;
}else if((salarioBase >= 375.06)  && (salarioBase <= 4664.68) ){
  ir= salarioBase * 22.5 / 100 - 636.13;
}
else {
  ir = salarioBase * 27.5 - 869.36;
}

salarioLiquido = salarioBase - ir;
console.log("Salário líquido R$%d", salarioLiquido);

/* O código calcula o salário líquido
com base nas aliquotas do INSS e com base nas aliquotas e parcelas a deduzir, de origem do IR */