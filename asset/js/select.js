/*
const buttons = document.querySelectorAll('.row');
*/

const buttons = document.querySelectorAll('.frame');
const overlay = document.querySelector('.overlay');
const buttonClose = document.querySelector('#buttonClose');
const overlayImage = document.querySelector('.overlay__inner img');

function test(){
    alert( 'Image clicked' );
}

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
buttonClose.addEventListener('click', close);


