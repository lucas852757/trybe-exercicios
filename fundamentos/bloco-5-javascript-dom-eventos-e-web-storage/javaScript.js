// Exercício 1
function changeText(element, phrase){
  document.getElementsByTagName(element)[0].innerText= phrase;
}

changeText('p','A programmer');

/* Muda a dexcrção da p */

//Exercício 2
function changeBox(element, color){
  document.getElementsByClassName(element)[0].style.backgroundColor= color;
}
changeBox('main-content','green');

/* Muda a cor do quadrado para verde.*/