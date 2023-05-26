
  (function ($) {
  
  "use strict";

    // HERO SLIDE
    $('.hero-slide').backstretch([
      "images/slideshow/cozy-home-background-with-dried-flowers-vase-interior_169016-18914.avif", 
      "images/slideshow/still-life-living-room-with-wooden-inscription-home_169016-6012.avif",
      "images/slideshow/modern-living-fresh-interior-vintage_1203-6256.avif",
      "images/slideshow/cozy-home-interior-living-room-with-vase-flowers-candles_169016-3572.jpg",
    ],  {duration: 4000, fade: 1000});

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
    items:3,
    loop:true,
    dots: false,
    nav: true,
    autoplay: true,
    margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);


