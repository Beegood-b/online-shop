// validation 

(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// scroll

window.addEventListener("scroll", function () {
  document
    .getElementById("header-nav")
    .classList.toggle("headernav-scroll", window.scrollY > 135);
});


// closing cart 

const offcanvasCartEl = document.getElementById("offcanvasCart");
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('opencart').addEventListener('click', (event) => {
  event.preventDefault();
  offcanvasCart.toggle();
});

document.querySelectorAll('closecart').forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    offcanvasCart.hide();
    let href = item.dataset.href;
    document.getElementById(href).scrollIntoView();
  })
})

// button on scroll down

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

// carousel

  $(".owl-carousel-full").owlCarousel({
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      500: {
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
