$(function() {
  $(window).load(function() {
    $('.page-content').fadeTo('slow', 1);
  });


  $(document).ready(function() {
    // Headers
    $("h2.section-heading").fitText(1.3, {
      minFontSize: '40px'
    });
    $(".site-logo h2").fitText(1.8, {
      minFontSize: '30px'
    });
    $(".site-logo h1").fitText(1.8, {
      minFontSize: '40px'
    });

    // Works view
    $(".work-categories .filter").click(function() {
      var filter = $(this).attr("category-filter");
      if (filter == "all") {
        $('.works-item').fadeTo('slow', 1);
      } else {
        $('works-item, .category-' + filter).fadeTo('slow', 1);
        $(".works-item:not('.category-" + filter + "')").fadeTo('slow', 0);
      }
      return false;
    });

    /*
    Mobile & tablet browser damage control.
    Note: should probably find a better way
    to do this. But as it is, this is as
    clean as it gets, sadly.
    */

    var md = new MobileDetect(window.navigator.userAgent);

    if (md.is('iOS')) {
      $(".hero").css('background', '#000 url("/assets/img/noise-flat.gif")');
      $(".section-container").css('margin-top', $(window).height());
      $(".site-logo").css('margin-bottom', $(window).height());
    }

    if (md.is('iPhone')) {
      $('.site-nav label').css('font-size', '1em');
      $('.site-nav label').css('padding', '0.5em');
    }

    $.featherlight.defaults.beforeOpen = function(event) {
      $('.featherlight iframe').prop("src", function(){
        // Set their src attribute to the value of data-src
        return $(this).attr("data-src");
      });
    }

  });

  // Navigation
  var currentHash = "##intro";
  $(document).scroll(_.throttle(function() {
    $('.section-anchor').each(function() {
      var top = window.pageYOffset + ($(window).height()*0.5);
      var distance = top - $(this).offset().top;
      var hash = $(this).attr('id');
      var padding = $(window).height()*0.5;
      if (distance < (padding)
          && distance > -(padding)
          && currentHash != hash) {

        var navhash = "##" + hash;
        $('.site-nav label').removeClass("active");
        $('.site-nav a[href="'+navhash+'"]').parent().addClass("active");
        if (history.pushState) {
          if (hash){
            history.pushState(null, null, navhash);
          } else {
            // history.pushState(null, null, "");
            window.location.hash = "";
          }
        }
      }
    });
  }, 80));
});

AA_CONFIG = {
  animationLength: 2800,
  easingFunction: 'easeInOutQuad',
  scrollOffset: 150
};
