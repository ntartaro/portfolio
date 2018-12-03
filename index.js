const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.cards').style.opacity = '0';
  document.querySelector('.frosted-wrapper').style.opacity = '0';
  document.querySelector('.frosted-text-wrapper').style.opacity = '0';
  console.log('clicked');
});

const workButton = document.querySelector('.work-button');
workButton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.cards').style.opacity = '1';
  document.querySelector('.frosted-wrapper').style.opacity = '0';
  document.querySelector('.frosted-text-wrapper').style.opacity = '0';
  console.log('clicked');
});

const aboutButton = document.querySelector('.about-button');
aboutButton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.frosted-wrapper').style.opacity = '1';
  document.querySelector('.frosted-text-wrapper').style.opacity = '1';
});


