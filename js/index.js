'strict mode';
var bbCard = document.getElementById('Card');
var flipper = document.getElementById('flipper');
var isFlipped = /flipped/gi;

function flip(el) {
  el.className = isFlipped.test(el.className) ? '' : 'flipped';
}

bbCard.addEventListener("click", function () {
  flip(flipper);
}, false);