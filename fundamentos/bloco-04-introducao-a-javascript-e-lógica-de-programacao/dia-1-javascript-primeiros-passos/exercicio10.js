const custoDoProduto = 1000 + 20/100 * 1000;
const valorDeVenda = 3000;

let lucro = valorDeVenda - custoDoProduto;

let unidades = 1000;

if (unidades < 0 ) { 
  console.log("Número inválido!");
}
else if (unidades == 1000) {
  console.log("Lucro R$%d", unidades * lucro);
}
/* O código calcula o lucro obtido pela venda de 
1000 produtos. Se a variável unidades 
for negativa o programa 
exibe uma mensagem de erro e é encerrado .*/