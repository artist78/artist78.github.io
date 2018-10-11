'strict mode';
var Card = document.getElementById('Card');
var flipper = document.getElementById('flipper');
var isFlipped = /flipped/gi;

function flip(el) {
  el.className = isFlipped.test(el.className) ? '' : 'flipped';
}

Card.addEventListener("click", function () {
  flip(flipper);
}, false);
