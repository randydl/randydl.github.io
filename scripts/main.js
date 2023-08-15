// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  // initialize animate on scroll library
  AOS.init({
    disable: true // once: true
  });

  // use PDF.js viewer open pdf files
  $('a[href$=".pdf"]:not(.no-pdfjs)').each(function () {
    var pdfUrl = $(this).attr('href');
    if (pdfUrl[0] !== '/' && !pdfUrl.startsWith('http')) {
      // var basePath = window.location.href;
      // basePath = basePath.substring(0, basePath.lastIndexOf('/') + 1);
      // pdfUrl = basePath + pdfUrl;
      pdfUrl = '/' + pdfUrl;
    }
    $(this).attr('href', 'pdfjs/web/viewer.html?file=' + encodeURIComponent(pdfUrl));
  });
});

// Smooth scroll for links with hashes
$('a.smooth-scroll').click(function (event) {
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
