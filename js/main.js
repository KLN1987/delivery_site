var shoppingCart = document.querySelector("#shopping-cart");
var close = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  modal.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  modal.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscPress);
};

shoppingCart.addEventListener('click', openPopup);
shoppingCart.addEventListener('keydown', function(evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
})

close.addEventListener('click', closePopup);
close.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

new WOW().init();