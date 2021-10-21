// Exercício 1
function changeText(element, phrase){
  document.getElementsByTagName(element)[0].innerText= phrase;
}

changeText('p','A programmer');

/* Muda a dexcrição da p . */

//Exercício 2
function changeBox(element, color){
  document.getElementsByClassName(element)[0].style.backgroundColor= color;
}
changeBox('main-content','green');

/* Muda a cor do quadrado para verde. */

//Exercício 3
function changeBackGroundColor(element,color) {
  document.getElementsByClassName(element)[0].style.backgroundColor= color;
}
changeBackGroundColor('center-content', 'white');

/*Muda a cor do quadrado vermelho para branco. */

