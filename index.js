const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.nick-image').style.display = 'flex'
  document.querySelector('.cards').style.display = 'none';
  document.querySelector('.frosted-wrapper').style.opacity = '0';
  document.querySelector('.frosted-text-wrapper').style.opacity = '0';
  console.log('clicked');
});

const workButton = document.querySelector('.work-button');
workButton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.cards').style.display = 'flex';
  document.querySelector('.nick-image').style.display = 'none'
  document.querySelector('.frosted-wrapper').style.opacity = '0';
  document.querySelector('.frosted-text-wrapper').style.opacity = '0';
  console.log('clicked');
});

const aboutButton = document.querySelector('.about-button');
aboutButton.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.cards').style.display = 'none';
  document.querySelector('.nick-image').style.display = 'none'
  document.querySelector('.frosted-wrapper').style.opacity = '1';
  document.querySelector('.frosted-text-wrapper').style.opacity = '1';
});


