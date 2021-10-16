let n = 5;
let n2 = 0;
for( let begin = 1,  n1 = 0; begin <= n; begin += 1, n1 += 1) {
  n2 = n - n1;/* Auxilia a construir espaços vazios em conjunto
  com a estrutura if . */
  //console.log(n2);
    for(let begin1 = 1; begin1 <= n; begin1 += 1) {
      if (begin1 < n2) {
        process.stdout.write(' ');
      }else{
        process.stdout.write('*');
      }
      
     }
    console.log();
}
/* O código constrói um triângulo */