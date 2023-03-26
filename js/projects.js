var mixer = mixitup('.mixitup');
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();
  if (scrolling > 30) {
    $('.backtotop i').fadeIn(500);
  } else {
    $('.backtotop i').fadeOut(500);
  }
  if (scrolling > 50) {
    $('.menu-main').addClass('bg_main banner_nav');
  } else {
    $('.menu-main').removeClass('bg_main banner_nav');
  }
});
$('.backtotop i ').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
