// Exercício 1
function changeText(element, phrase) {
  document.getElementsByTagName(element)[0].innerText = phrase;
}

changeText('p', 'A programmer');

/* Muda a dexcrição da p . */

//Exercício 2
function changeBox(element, color) {
  document.getElementsByClassName(element)[0].style.backgroundColor = color;
}
changeBox('main-content', 'green');

/* Muda a cor do quadrado para verde. */

//Exercício 3
function changeBackGroundColor(element, color) {
  document.getElementsByClassName(element)[0].style.backgroundColor = color;
}
changeBackGroundColor('center-content', 'white');

/*Muda a cor do quadrado vermelho para branco. */

//Exercício 4
function changeTitle(element, title) {
  document.getElementsByTagName('h1')[0].innerText = title;
}

changeTitle('h1', 'Exercicio5.1 - JavaScript');
/* Corrige o texto da tag h1 . */

//Exercício 5
function upperText(element, index) {
  let a = document.getElementsByTagName(element)[index].innerText.toUpperCase();
  document.getElementsByTagName(element)[index].innerText = a;
}

upperText('p', '0');
upperText('p', '2');
/* Textos em maiúsculo*/

// Exercício 6
function showContentOfTagP(element) {
  let something = document.getElementsByTagName(element);
  for (let index = 0; index < something.length; index += 1) {
    console.log(something[index].innerText);
  }
}

showContentOfTagP('p');
/*Exibe conteúdo da tag p . */

