
function flatten() {
  // escreva seu código aqui
  const arrays = [['1', '2', '3'],[true],[1, 2, 3]];
  
  const numbers = arrays.reduce((acc,curr) => {
   //acc.push(Object.values(curr));
   curr.forEach((element) => acc.push(element));
   return acc;
  },[]);
  return numbers;
}

console.log(flatten());