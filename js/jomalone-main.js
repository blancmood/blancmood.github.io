jQuery(function ($) {
  "use strict"; // Start of use strict

  // bx slider
  $(".bxslider").bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: false,
    infiniteLoop: true,
    touchEnabled: false,
  });

  // to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#topButton").fadeIn();
    } else {
      $("#topButton").fadeOut();
    }
  });

  // Smooth to Top
  $("#topButton").click(function () {
    $("html").animate({ scrollTop: 0 }, 600);
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 500) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
}); // End of use strict
