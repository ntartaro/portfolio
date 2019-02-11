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
      setTimeout(TimerTwo, 700);
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
      setTimeout(TimerTwo, 700);
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
      setTimeout(TimerTwo, 700);
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

var colors = new Array(
  [252, 191, 25],
  [255, 72, 163],
  [252, 191, 25],
  [255, 72, 163]
);
var step = 0;
var colorIndices = [0, 1, 2, 3];
//transition speed
var gradientSpeed = 0.003;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';

  $('#gradient')
    .css({
      background:
        '-webkit-gradient(linear, left top, right top, from(' +
        color1 +
        '), to(' +
        color2 +
        '))'
    })
    .css({
      background:
        '-moz-linear-gradient(left, ' + color1 + ' 0%, ' + color2 + ' 100%)'
    });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}

setInterval(updateGradient, 10);
