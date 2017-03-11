/**
 * Created by Nathan Lam on 3/9/2017.
 */
var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});