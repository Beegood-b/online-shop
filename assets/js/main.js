// adding class

window.addEventListener("scroll", function () {
  document
    .getElementById("header-nav")
    .classList.toggle("headernav-scroll", window.scrollY > 135);
});

// owl carousel

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });

  $(".owl-carousel-full").owlCarousel({
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },

      350: {
        items: 2,
      },

      700: {
        items: 3,
      },

      1000: {
        items: 4,
      },
    },
  });
});
