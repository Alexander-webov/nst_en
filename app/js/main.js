$(function () {
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-btn__prev"><img class="slick-btn__prev-img" src="img/arrow-left-red.svg" alt="" ></button>',
    nextArrow: '<button class="slick-btn slick-btn__next"><img class="slick-btn__next-img" src="img/arrow-right-red.svg" alt="" > </button>',
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,

      }
    }]
  });


  $('.portfolio-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-btn__prev"><img class="slick-btn__prev-img" src="img/arrow-left-white.svg" alt="" ></button>',
    nextArrow: '<button class="slick-btn slick-btn__next"><img class="slick-btn__next-img" src="img/arrow-right-white.svg" alt="" > </button>',
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $('.skils-slider_descr').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    prevArrow: '<button class="slick-btn slick-btn__prev"><img class="slick-btn__prev-img" src="img/arrow-left-white.svg" alt="" ></button>',
    nextArrow: '<button class="slick-btn slick-btn__next"><img class="slick-btn__next-img" src="img/arrow-right-white.svg" alt="" > </button>',
    asNavFor: '.skils-slider_logo',
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,

      }
    }]
  });


  $('.skils-slider_logo').slick({
    infinite: true,
    fade: true,
    //slidesToShow: 1,
    //slidesToScroll: 1,
    arrows: false,
    asNavFor: '.skils-slider_descr',
    //focusOnSelect: true,
  });


  $('.clients-slider').slick({
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-btn__prev"><img class="slick-btn__prev-img" src="img/arrow-left-red.svg" alt="" ></button>',
    nextArrow: '<button class="slick-btn slick-btn__next"><img class="slick-btn__next-img" src="img/arrow-right-red.svg" alt="" > </button>',
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,

      }
    }]
  });

  $('.scheme-item:eq(0)').hover(function () {
      $('.scheme-item:eq(0)').css({
        'color': '#cd1719',
      });
      $('.scheme-descr__item:eq(0)').css({
        'color': '#cd1719',
      });
      $('.scheme-line__top-stage:eq(0)').css({
        'backgroundColor': '#cd1719',
        'color': '#cd1719',
      });
    },

    function () {
      $('.scheme-item:eq(0)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-descr__item:eq(0)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-line__top-stage:eq(0)').css({
        'backgroundColor': '#b0b0b0',
      });
    }
  );
  $('.scheme-item:eq(1)').hover(function () {
      $('.scheme-item:eq(1)').css({
        'color': '#cd1719',
      });
      $('.scheme-descr__item:eq(1)').css({
        'color': '#cd1719',
      });
      $('.scheme-line__top-stage:eq(1)').css({
        'backgroundColor': '#cd1719',
        'color': '#cd1719',
      });
    },

    function () {
      $('.scheme-item:eq(1)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-descr__item:eq(1)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-line__top-stage:eq(1)').css({
        'backgroundColor': '#b0b0b0',
      });
    }
  );
  $('.scheme-item:eq(2)').hover(function () {
      $('.scheme-item:eq(2)').css({
        'color': '#cd1719',
      });
      $('.scheme-descr__item:eq(2)').css({
        'color': '#cd1719',
      });
      $('.scheme-line__top-stage:eq(2)').css({
        'backgroundColor': '#cd1719',
        'color': '#cd1719',
      });
    },

    function () {
      $('.scheme-item:eq(2)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-descr__item:eq(2)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-line__top-stage:eq(2)').css({
        'backgroundColor': '#b0b0b0',
      });
    }
  );
  $('.scheme-item:eq(3)').hover(function () {
      $('.scheme-item:eq(3)').css({
        'color': '#cd1719',
      });
      $('.scheme-descr__item:eq(3)').css({
        'color': '#cd1719',
      });
      $('.scheme-line__top-stage:eq(3)').css({
        'backgroundColor': '#cd1719',
        'color': '#cd1719',
      });
    },

    function () {
      $('.scheme-item:eq(3)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-descr__item:eq(3)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-line__top-stage:eq(3)').css({
        'backgroundColor': '#b0b0b0',
      });
    }
  );
  $('.scheme-item:eq(4)').hover(function () {
      $('.scheme-item:eq(4)').css({
        'color': '#cd1719',
      });
      $('.scheme-descr__item:eq(4)').css({
        'color': '#cd1719',
      });
      $('.scheme-line__top-stage:eq(4)').css({
        'backgroundColor': '#cd1719',
        'color': '#cd1719',
      });
    },

    function () {
      $('.scheme-item:eq(4)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-descr__item:eq(4)').css({
        'color': ' #3b3b3b',
      });
      $('.scheme-line__top-stage:eq(4)').css({
        'backgroundColor': '#b0b0b0',
      });
    }
  );
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    mobile: false,
  });
  wow.init();


  if ($(window).width() < 600) {
    $('.wow').removeClass('animate__animated');

  };

  $(document).ready(function () {
    $('.btn-modal').magnificPopup();
  });

  $(document).ready(function () {
    var groups = {};
    $('.galleryItem').each(function () {
      var id = parseInt($(this).attr('data-group'), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });


    $.each(groups, function () {

      $(this).magnificPopup({
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      })

    });

  });

});