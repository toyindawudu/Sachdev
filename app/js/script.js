const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
  
  if(header.classList.contains('open')){ // closes hamburger menu
    header.classList.remove('open'); //remove the class list open
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
  } else {                          // open hamburger menu
    header.classList.add('open'); //else add the class list open 
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }

});