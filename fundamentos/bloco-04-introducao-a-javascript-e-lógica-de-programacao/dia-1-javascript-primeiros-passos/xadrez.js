let peca="Rei";
peca = peca.toLowerCase();

switch (peca) {
  case "rei": console.log("Movimenta em todas as direções");
    break;
  case "dama": console.log("Movimenta na diagonal, vertical ou horizontal");
    break;
  case "torre": console.log("Movimenta nas direções ortogonais") ;
    break;
  case "bispo": console.log("Movomenta nas direções diagonais");
  case "cavalo":
    break;
  case "peao": console.log("Movimenta na direção vertical");
    break;
    //default: console.log("");
}
/* O código a cima relaciona  os nomes das peças do tabuleiro de xadrez 
com os respectivos movimentos de cada uma.*/
/* Source link: https://pt.wikipedia.org/wiki/Leis_do_xadrez*/
