$('.slider-one')
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:1000,
    infinite:true,
    dots: true,
    fade: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
  });

  $('.slider-two')
  .not(".slick-intialized")
  .slick({
      prevArrow:".site-slider-two .prev",
      nextArrow:".site-slider-two .next",
      slidesToShow:4,
      slidesToScroll:1,
      autoplaySpeed:900

    });
