(function ($) {
  $(".slideinner").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    cssEase: "linear",
    draggable: true,
    fade: false,
    arrows: false,
    // prevArrow: '<button class="prevArrow marrow"><i class = "fas fa-angle-left"></i></button>',
    // nextArrow: '<button class="nextArrow marrow"><i class = "fas fa-angle-right"></i></button>',
  });

  //   마우스 오르내릴때 화면 온오프
  var sct = 0;
  $(".bloglist li").css({ opacity: 0 });
  $(window).scroll(function () {
    sct = $(this).scrollTop();
    var count = $(".process").length;
    if (sct >= $("#blog").offset().top) {
      for (var i = 0; i < 4; i++) {
        $(".bloglist li")
          .eq(i)
          .css({ animationDelay: i / 4 + "s" })
          .addClass("animated fadeInUp");
      }
    }
  });
})(jQuery);
