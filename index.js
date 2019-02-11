// const homeButton = document.querySelector('.home-button');
// homeButton.addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('clicked');
// });

// const projectsButton = document.querySelector('.projects-button');
// projectsButton.addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('clicked');
// });

// const contactButton = document.querySelector('.contact-button');
// contactButton.addEventListener('click', function(e) {
//   e.preventDefault();
// });

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

var element = document.querySelector('.project-content');
var change = document.querySelector('.project-text');

function Timer() {
  change.style.display = 'none';
  console.log('Hey');
}

element.addEventListener('mouseenter', function() {
  change.classList.remove('animated', 'fadeOutRight');
  change.classList.add('animated', 'fadeInRight');
  change.style.display = 'flex';
  console.log('Event triggered');
});

element.addEventListener('mouseleave', function() {
  change.classList.remove('animated', 'fadeInRight');
  change.classList.add('animated', 'fadeOutRight');
  setTimeout(Timer, 700);
  console.log('Event triggered');
});
