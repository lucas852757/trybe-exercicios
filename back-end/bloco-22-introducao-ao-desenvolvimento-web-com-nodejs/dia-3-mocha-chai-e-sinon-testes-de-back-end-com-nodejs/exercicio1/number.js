const number = (number) => {
 try {
   if (typeof number !== 'number') {
    return 'O parâmetro deve ser um número';
   }
   if (number > 0) {
    return 'positivo';
   }
   if (number < 0) {
    return 'negativo';
   }
   return 'neutro';
 } catch (error) {
   return null;
 }
}

module.exports = number;