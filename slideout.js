var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('weatherbox-slideout'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function () {
  slideout.toggle();
});
