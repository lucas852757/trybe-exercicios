// Exercício 1
function changeText(element, phrase){
  document.getElementsByTagName(element)[0].innerText= phrase;
}

changeText('p','A programmer');
/* Muda a dexcrção da p */
