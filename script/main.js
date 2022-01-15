//site loading
document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('cansel')) {
      preloader.classList.add('cansel');
    }
  }, 3000)
};

//button up
(function(){
    function trackScroll(){
      var scrolleds = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if(scrolleds > coords){
        goTopBtn.classList.add('back-to-top-show');
      }

        if (scrolleds < coords) {
          goTopBtn.classList.remove('back-to-top-show');
        }
    }

    function backToTop(){
      if (window.pageYOffset > 0){
        window.scrollBy(0, -80);
        setTimeout(backToTop, 30);
      }  
    }

    var goTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

// scrolling animation
const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
   element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)){
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

//slider browse by catefory
$('.slick-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//slider Trending NFT
$('.trending-slider').not('.slick-initialized').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//click top collection block
$(document).on('click', '.strip-box', function () {
  $(this).children('.strip-invisible__text').slideToggle();
  $(this).find('.strip-arrow').toggleClass('animate-rotate');
});

//hover browse category slider
$('.browse-area__img').hover(
  function () {
    $(this).next('.browse-area__subheading').css('color', '#A12669');
  },
  function () {
    $(this).next('.browse-area__subheading').css('color', '#fff');
  }
);

//custom video player


//play or stop video
$(document).ready(function () {

  var controls = {
    video: $('#video'),
    playpause: $('#playpause'),
  };

  var video = controls.video[0];
  controls.playpause.click(function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});


//button play or stop
$('.paused').on('click', function () {
  $('.icon-play').toggleClass('none');
  $('.icon-pause ').toggleClass('block');
});

//sound play or stop
var mutebutton = document.getElementById('mutebutton');
mutebutton.addEventListener('click', function muteOrUnmute() {
  video.muted = !video.muted;
});

$('.video-mutebutton').on('click', function(){
  $('.video-mutebutton').toggleClass('video-nosound');
});

//fullscreen 
var fullscreenButton = document.getElementById('fullscreen');
fullscreen.addEventListener('click', function(){
  if(video.requestFullscreen){
      video.requestFullscreen();
  } else if(video.webkitRequestFullscreen){ /* Safari */
      video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen(); /* IE11 */
  }
});

//volume control
$('#volumeControl').mousemove(function(){
  video.volume = parseFloat(this.value / 10);
});