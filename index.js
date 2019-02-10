const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('clicked');
});

const workButton = document.querySelector('.work-button');
workButton.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('clicked');
});

const aboutButton = document.querySelector('.about-button');
aboutButton.addEventListener('click', function(e) {
  e.preventDefault();
});

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', function(e) {
  e.preventDefault();
});

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  const header = document.querySelector('.header');
  if (currentScrollPos > 0) {
    header.style.backgroundColor = 'rgba(255,255,255,0.5)';
    header.style.boxShadow =
      '0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
  prevScrollPos = currentScrollPos;
};
