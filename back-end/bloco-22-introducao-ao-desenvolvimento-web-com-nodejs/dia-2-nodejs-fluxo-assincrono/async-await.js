function random(){
  return Math.floor(Math.random() * 100 + 1);
}

function main(a, b, c){
  return new Promise((reject, resolve) => {
    if(typeof a !== 'number' || !typeof b == 'number' || typeof c !== 'number'){
     console.log('Informe apenas números');
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

async function callMain(){
  try {
    const randomNumber = Array.from({length: 3}).map(random);
    result = await main(...randomNumber);
    console.log(result);
  } catch (error) {
  console.error(error);
    
  }
}

callMain();
