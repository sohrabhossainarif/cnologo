$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > 30) {
    $(".backtotop i").fadeIn(500)
  } else {
        $('.backtotop i').fadeOut(500);
  }
  if (scrolling > 50) {
    $('.menu-main').addClass("bg_main banner_nav");
  } else {
    $('.menu-main').removeClass('bg_main banner_nav');
  }
})
$(".backtotop i ").click(function () {
  $("html, body").animate({
    scrollTop:0
  }, 1000)
})

// index part js
$('.services-slides').slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});
// =====
$('.projects-slides-two').slick({
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: '.array_right',
  nextArrow: '.array_left',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});
// ===
$('.article_main').slick({
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});
// index end
$('#jq').LineProgressbar({
  percentage: 90,
  radius: '3px',
  height: '7px',
  padding: '10px',
  border: '1px soli #DA4453',
});
$('#html').LineProgressbar({
  percentage: 80,
  radius: '3px',
  height: '7px',
  fillBackgroundColor: '#DA4453',
});
$('#css').LineProgressbar({
  percentage: 70,
  radius: '3px',
  height: '7px',
  fillBackgroundColor: '#E0C341',
});
$('#cyber').LineProgressbar({
  percentage: 45,
  radius: '3px',
  height: '7px',
  fillBackgroundColor: '#E0C341',
});
