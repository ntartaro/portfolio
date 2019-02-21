//Header Nav Buttons
const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', function(e) {
  e.preventDefault();
  const home = document.querySelector('.splash');
  home.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
const projectsButton = document.querySelector('.projects-button');
projectsButton.addEventListener('click', function(e) {
  e.preventDefault();
  const projects = document.querySelector('.projects-anchor');
  projects.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', function(e) {
  e.preventDefault();
  const footer = document.querySelector('.footer-wrapper');
  footer.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Header Scroll Functions
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

//Resume mouseover
resume.addEventListener('mouseover', function(e) {
  e.preventDefault();
  if (window.innerWidth <= '500') {
    return;
  }
  text.style.display = 'flex';
  text.classList.add('animated', 'fadeInRight', 'slow');
});

//MusicTown Functions
const musictown = document.querySelector('.musictown');
const musicText = document.querySelector('.music-text');
const musicCard = document.querySelector('.music-card');

musictown.addEventListener('click', function(e) {
  e.preventDefault();
  if (musicText.style.display == 'none' || musicText.style.display == '') {
    musictown.style.justifyContent = 'space-between';
    musictown.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';

    if (window.innerWidth >= '1101') {
      musictown.style.width = '1000px';
    } else if (window.innerWidth <= '1100' && window.innerWidth >= '901') {
      musictown.style.width = '800px';
    } else if (window.innerWidth <= '900' && window.innerWidth >= '701') {
      musictown.style.width = '650px';
    } else if (window.innerWidth <= '700' && window.innerWidth >= '601') {
      musictown.style.width = '550px';
    } else if (window.innerWidth <= '600' && window.innerWidth >= '501') {
      musictown.style.width = '450px';
    } else if (window.innerWidth <= '500') {
      musictown.style.width = '320px';
    }

    function Timer() {
      if (window.innerWidth >= '701') {
        musicText.classList.remove('animated', 'fadeOutRight');
        musicText.classList.add('animated', 'fadeInRight');
        musicText.style.display = 'flex';
      }
      if (window.innerWidth <= '700') {
        musicText.classList.remove('animated', 'fadeOutDown');
        musicText.classList.add('animated', 'fadeInUp');
        musicText.style.display = 'flex';
      }

      function TimerTwo() {
        musicCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 900);
    }
    setTimeout(Timer, 500);
  } else {
    if (
      e.target.className == 'link' ||
      e.target.className == 'weblink' ||
      e.target.className == 'link-img'
    ) {
      var win = window.open('https://musictownlive.surge.sh', '_blank');
      win.focus();
      return;
    }
    if (window.innerWidth >= '701') {
      musicText.classList.remove('animated', 'fadeInRight');
      musicText.classList.add('animated', 'fadeOutRight');
    }
    if (window.innerWidth <= '700') {
      musicText.classList.remove('animated', 'fadeInUp');
      musicText.classList.add('animated', 'fadeOutDown');
    }

    function Timer() {
      musicText.style.display = 'none';
      musictown.style.boxShadow = 'none';
      if (window.innerwidth >= 600) {
        musictown.style.width = '500px';
      }
      musicCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        musictown.style.justifyContent = 'center';
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});

//Turbo Functions
const turbo = document.querySelector('.turbo');
const turboText = document.querySelector('.turbo-text');
const turboCard = document.querySelector('.turbo-card');

turbo.addEventListener('click', function(e) {
  e.preventDefault();
  if (turboText.style.display == 'none' || turboText.style.display == '') {
    turbo.style.justifyContent = 'space-between';
    turbo.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';
    if (window.innerWidth >= '1101') {
      turbo.style.width = '1000px';
    } else if (window.innerWidth <= '1100' && window.innerWidth >= '901') {
      turbo.style.width = '800px';
    } else if (window.innerWidth <= '900' && window.innerWidth >= '701') {
      turbo.style.width = '650px';
    } else if (window.innerWidth <= '700' && window.innerWidth >= '601') {
      turbo.style.width = '550px';
    } else if (window.innerWidth <= '600' && window.innerWidth >= '501') {
      turbo.style.width = '450px';
    } else if (window.innerWidth <= '500') {
      turbo.style.width = '320px';
    }

    function Timer() {
      if (window.innerWidth >= '701') {
        turboText.classList.remove('animated', 'fadeOutRight');
        turboText.classList.add('animated', 'fadeInRight');
        turboText.style.display = 'flex';
      }
      if (window.innerWidth <= '700') {
        turboText.classList.remove('animated', 'fadeOutDown');
        turboText.classList.add('animated', 'fadeInUp');
        turboText.style.display = 'flex';
      }
      function TimerTwo() {
        turboCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 900);
    }
    setTimeout(Timer, 500);
  } else {
    if (
      e.target.className == 'link' ||
      e.target.className == 'weblink' ||
      e.target.className == 'link-img'
    ) {
      var win = window.open('https://www.turbo360.co/', '_blank');
      win.focus();
      return;
    }
    if (window.innerWidth >= '701') {
      turboText.classList.remove('animated', 'fadeInRight');
      turboText.classList.add('animated', 'fadeOutRight');
    }
    if (window.innerWidth <= '700') {
      turboText.classList.remove('animated', 'fadeInUp');
      turboText.classList.add('animated', 'fadeOutDown');
    }
    function Timer() {
      turboText.style.display = 'none';
      turbo.style.boxShadow = 'none';
      if (window.innerwidth >= 600) {
        turbo.style.width = '500px';
      }
      turboCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        turbo.style.justifyContent = 'center';
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});

// Hangman Functions
const hangman = document.querySelector('.hangman');
const hangText = document.querySelector('.hang-text');
const hangCard = document.querySelector('.hang-card');

hangman.addEventListener('click', function(e) {
  e.preventDefault();
  if (hangText.style.display == 'none' || hangText.style.display == '') {
    hangman.style.justifyContent = 'space-between';
    hangman.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';
    if (window.innerWidth >= '1101') {
      hangman.style.width = '1000px';
    } else if (window.innerWidth <= '1100' && window.innerWidth >= '901') {
      hangman.style.width = '800px';
    } else if (window.innerWidth <= '900' && window.innerWidth >= '701') {
      hangman.style.width = '650px';
    } else if (window.innerWidth <= '700' && window.innerWidth >= '601') {
      hangman.style.width = '550px';
    } else if (window.innerWidth <= '600' && window.innerWidth >= '501') {
      hangman.style.width = '450px';
    } else if (window.innerWidth <= '500') {
      hangman.style.width = '320px';
    }

    function Timer() {
      if (window.innerWidth >= '701') {
        hangText.classList.remove('animated', 'fadeOutRight');
        hangText.classList.add('animated', 'fadeInRight');
        hangText.style.display = 'flex';
      }
      if (window.innerWidth <= '700') {
        hangText.classList.remove('animated', 'fadeOutDown');
        hangText.classList.add('animated', 'fadeInUp');
        hangText.style.display = 'flex';
      }
      function TimerTwo() {
        hangCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 900);
    }
    setTimeout(Timer, 500);
  } else {
    if (
      e.target.className == 'link weblink' ||
      e.target.className == 'weblink' ||
      e.target.className == 'link-img weblink'
    ) {
      var win = window.open(
        'https://hangman-ntartaro.herokuapp.com/',
        '_blank'
      );
      win.focus();
      return;
    }
    if (
      e.target.className == 'link repolink' ||
      e.target.className == 'repolink' ||
      e.target.className == 'link-img repolink'
    ) {
      var win = window.open('https://github.com/ntartaro/hangman', '_blank');
      win.focus();
      return;
    }
    if (window.innerWidth >= '701') {
      hangText.classList.remove('animated', 'fadeInRight');
      hangText.classList.add('animated', 'fadeOutRight');
    }
    if (window.innerWidth <= '700') {
      hangText.classList.remove('animated', 'fadeInUp');
      hangText.classList.add('animated', 'fadeOutDown');
    }
    function Timer() {
      hangText.style.display = 'none';
      hangman.style.boxShadow = 'none';
      if (window.innerwidth >= 600) {
        hangman.style.width = '500px';
      }
      hangCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        hangman.style.justifyContent = 'center';
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});

//ISS Functions
const iss = document.querySelector('.iss');
const issText = document.querySelector('.iss-text');
const issCard = document.querySelector('.iss-card');

iss.addEventListener('click', function(e) {
  e.preventDefault();
  if (issText.style.display == 'none' || issText.style.display == '') {
    iss.style.justifyContent = 'space-between';
    iss.style.boxShadow =
      '0 6px 12px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.23)';
    if (window.innerWidth >= '1101') {
      iss.style.width = '1000px';
    } else if (window.innerWidth <= '1100' && window.innerWidth >= '901') {
      iss.style.width = '800px';
    } else if (window.innerWidth <= '900' && window.innerWidth >= '701') {
      iss.style.width = '650px';
    } else if (window.innerWidth <= '700' && window.innerWidth >= '601') {
      iss.style.width = '550px';
    } else if (window.innerWidth <= '600' && window.innerWidth >= '501') {
      iss.style.width = '450px';
    } else if (window.innerWidth <= '500') {
      iss.style.width = '320px';
    }
    function Timer() {
      if (window.innerWidth >= '701') {
        issText.classList.remove('animated', 'fadeOutRight');
        issText.classList.add('animated', 'fadeInRight');
        issText.style.display = 'flex';
      }
      if (window.innerWidth <= '700') {
        issText.classList.remove('animated', 'fadeOutDown');
        issText.classList.add('animated', 'fadeInUp');
        issText.style.display = 'flex';
      }
      function TimerTwo() {
        issCard.style.transform = 'rotateY(180deg)';
      }
      setTimeout(TimerTwo, 900);
    }
    setTimeout(Timer, 500);
  } else {
    if (
      e.target.className == 'link weblink' ||
      e.target.className == 'weblink' ||
      e.target.className == 'link-img weblink'
    ) {
      var win = window.open('https://wow-iss.surge.sh', '_blank');
      win.focus();
      return;
    }
    if (
      e.target.className == 'link repolink' ||
      e.target.className == 'repolink' ||
      e.target.className == 'link-img repolink'
    ) {
      var win = window.open(
        'https://github.com/ntartaro/iss-tracker-frontend',
        '_blank'
      );
      win.focus();
      return;
    }
    if (window.innerWidth >= '701') {
      issText.classList.remove('animated', 'fadeInRight');
      issText.classList.add('animated', 'fadeOutRight');
    }
    if (window.innerWidth <= '700') {
      issText.classList.remove('animated', 'fadeInUp');
      issText.classList.add('animated', 'fadeOutDown');
    }
    function Timer() {
      issText.style.display = 'none';
      iss.style.boxShadow = 'none';
      if (window.innerwidth >= 600) {
        iss.style.width = '500px';
      }
      issCard.style.transform = 'rotateY(360deg)';

      function TimerTwo() {
        iss.style.justifyContent = 'center';
      }
      setTimeout(TimerTwo, 1050);
    }
    setTimeout(Timer, 500);
  }
});
