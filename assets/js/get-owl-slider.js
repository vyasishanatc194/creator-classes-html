$(document).ready(function () {
  $("#our-classes-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      600: {
        items: 2.3,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 3.15,
      }
    }
  });

  $("#meet-the-creators-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    autoWidth:true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      600: {
        items: 2.3,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 3.15,
      }
    }
  });

  $("#testimonials-owl").owlCarousel({
    loop:false,
    nav:true,
    navText: ['<span class="span-roundcircle left-roundcircle"><i class="fe fe-chevron-left left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="fe fe-chevron-right right-arrow"></span>'],
    dots: false,
    stagePadding: 0,
    margin: 15,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1 
        },
        600:{
            items:1
        },
        1180:{
          items:1
        } 

    }
  });

  $("#upcoming-live-streams-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 20,
    autoWidth:true,
    autoplay: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoWidth:false,
        autoplay: true,
      },
      600: {
        items: 1.9,
        autoWidth:false,
        autoplay: true,
      },
      1200: {
        items: 1.2,
      },
      1600: {
        items: 1.25,
      }
    }
  });

  $("#similar-creators-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    autoWidth:true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoWidth:false,
        autoplay: true,
      },
      600: {
        items: 2.3,
        autoWidth:false,
        autoplay: true,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 3.15,
      }
    }
  });
});