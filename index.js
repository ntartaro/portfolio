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
const header = document.querySelector('.header');
const resume = document.querySelector('.header-resume');
const text = document.querySelector('.resume-text');

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 0) {
    header.style.backgroundColor = 'rgba(255,255,255,0.5)';
    header.style.boxShadow =
      '0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.23)';
    resume.style.color = '#171717';
    text.style.color = '#171717';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
    resume.style.color = '#ffffff';
    text.style.color = '#ffffff';
  }
  prevScrollPos = currentScrollPos;
};

//Resume Functions
resume.addEventListener('mouseover', function() {
  text.style.display = 'flex';
  text.classList.add('animated', 'fadeInRight', 'slow');

});

//MusicTown Functions
var musictown = document.querySelector('.musictown');
var musicText = document.querySelector('.music-text');
var musicCard = document.querySelector('.music-card');

musictown.addEventListener('click', function() {
  if (musicText.style.display == 'none' || musicText.style.display == '') {
    musictown.style.justifyContent = 'space-between';
    musictown.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';
    musictown.style.width = '1000px';

    function Timer() {
      musicText.classList.remove('animated', 'fadeOutRight');
      musicText.style.display = 'flex';
      musicText.classList.add('animated', 'fadeInRight');
      function TimerTwo() {
        musicCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 1000);
    }
    setTimeout(Timer, 500);
  } else {
    musicText.classList.remove('animated', 'fadeInRight');
    musicText.classList.add('animated', 'fadeOutRight');
    function Timer() {
      musicText.style.display = 'none';
      musictown.style.boxShadow = 'none';
      musictown.style.width = '500px';
      musicCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        musictown.style.justifyContent = 'center';
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});

// Hangman Functions
var hangman = document.querySelector('.hangman');
var hangText = document.querySelector('.hang-text');
var hangCard = document.querySelector('.hang-card');

hangman.addEventListener('click', function() {
  if (hangText.style.display == 'none' || hangText.style.display == '') {
    hangman.style.justifyContent = 'space-between';
    hangman.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';
    hangman.style.width = '1000px';

    function Timer() {
      hangText.classList.remove('animated', 'fadeOutRight');
      hangText.style.display = 'flex';
      hangText.classList.add('animated', 'fadeInRight');
      function TimerTwo() {
        hangCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 1000);
    }
    setTimeout(Timer, 500);
  } else {
    hangText.classList.remove('animated', 'fadeInRight');
    hangText.classList.add('animated', 'fadeOutRight');
    function Timer() {
      hangText.style.display = 'none';
      hangman.style.boxShadow = 'none';
      hangman.style.width = '500px';
      hangCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        hangman.style.justifyContent = 'center';
        console.log('hang');
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});

//ISS Functions
var iss = document.querySelector('.iss');
var issText = document.querySelector('.iss-text');
var issCard = document.querySelector('.iss-card');

iss.addEventListener('click', function() {
  if (issText.style.display == 'none' || issText.style.display == '') {
    iss.style.justifyContent = 'space-between';
    iss.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';
    iss.style.width = '1000px';

    function Timer() {
      issText.classList.remove('animated', 'fadeOutRight');
      issText.style.display = 'flex';
      issText.classList.add('animated', 'fadeInRight');
      function TimerTwo() {
        issCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 1000);
    }
    setTimeout(Timer, 500);
  } else {
    issText.classList.remove('animated', 'fadeInRight');
    issText.classList.add('animated', 'fadeOutRight');
    function Timer() {
      issText.style.display = 'none';
      iss.style.boxShadow = 'none';
      iss.style.width = '500px';
      issCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        iss.style.justifyContent = 'center';
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});
