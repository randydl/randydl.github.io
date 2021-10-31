// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return null;
  }

  $("[data-aos]").removeAttr("data-aos");
  $("head").append('<style type="text/css">@media (min-width:1200px) {.container { max-width: 960px; }}</style>');

  if (getQueryVariable("lang") === "zh" || window.location.hostname === "randydl.gitee.io") {
    $("[lang=en]").remove();

    // Special process for education.
    if ($("#education .container").width() > 720) {
      $("#education .row:eq(1) div:eq(0)").attr("class", "col-md-6");
    }
  } else {
    $("[lang=zh]").remove();
  }

  // Only for fixing gitee can't show mp4 video.
  if (window.location.hostname === "randydl.gitee.io") {
    $("a[href$='.mp4']").each(function (idx, elem) {
      $(elem).attr("href", "https://randydl.github.io/" + $(elem).attr("href"));
      // console.log(idx, $(elem).attr("href"));
    });
  }

  // Use PDF.js render pdf file
  $("a[href$='.pdf']").each(function (idx, elem) {
    $(elem).attr("href", "libs/pdfjs/web/viewer.html?file=/" + $(elem).attr("href"));
    // console.log(idx, $(elem).attr("href"));
  });

  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
