/* Este código constrói um triângulo. */
n = 10;
for( let b = 1; b <= n; b += 1) {
  if (b) {
    for(let b1 = 1; b1 <= b; b1 += 1) {
      process.stdout.write('* ');
    }
  }
  console.log();
}