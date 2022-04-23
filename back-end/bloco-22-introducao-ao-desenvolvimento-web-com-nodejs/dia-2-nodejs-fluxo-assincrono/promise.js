function random(){
   return Math.floor(Math.random() * 100 + 1);
}

function main(a, b, c){
   return new Promise((reject, resolve) => {
     if(typeof a !== 'number' || typeof b == !'number' || typeof c !== 'number'){
      reject('Informe apenas números');
     }
     else{
      let result = (a * b) + c;
       if(result < 50){
          reject('Valor muit baixo');
       }
       else{
         resolve(result);
       }
     }
   })
}

function callMain(){
  const randomNumber = Array.from({length: 3}).map(random);
  main(...randomNumber).then(resolve => console.log(resolve))
  .catch(error => console.error(error))
}

main(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

 main(10, 10, 'q')
.then(resolve => console.log(resolve))
.catch(error => console.log(error))

callMain();