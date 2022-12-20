// category menu










//items slider
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      autoplay:true,
      margin:10,
      loop: true,
      nav: true,
      dots:false,
      responsive:{
        0:{
                items:2,
                margin:20,
                nav:false
                
            },
            600:{
                items:2,
                margin:20
            },
            1000:{
                items:4,
            }
      }
    });
  });
  


// function tran(n) {
//   $("div[data-page="+n+"]").removeClass("closed").addClass("open");
//   $("div.open[data-page!="+n+"]").removeClass("open").addClass("closed");
// }
