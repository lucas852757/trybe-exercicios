let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mediaAritmetica = 0;
let comprimento = numbers.length;

for (index = 0; index < comprimento; index += 1 ) {
  sum = sum + numbers[index];
}
 mediaAritmetica = sum / comprimento; 
 console.log("Media aritmetica: %d", mediaAritmetica);