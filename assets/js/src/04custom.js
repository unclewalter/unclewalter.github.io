$(function() {
  $(window).load(function() {
    $('.page-content').fadeTo('slow', 1);
  });

  $(document).ready(function() {
    // Headers
    $("h2").fitText(1.3, {
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

    // Mobile browser damage control

    var md = new MobileDetect(window.navigator.userAgent);

    if (md.is('iOS')) {
      $(".hero").css('background', '#000 url("/assets/img/noise-flat.gif")');
      $(".section-container").css('margin-top', $(window).height());
      $(".site-logo").css('margin-bottom', $(window).height());
    }
  });

  // Navigation
  var currentHash = "##intro";
  $(document).scroll(_.throttle(function() {
    $('.section-container').each(function() {
      var top = window.pageYOffset + ($(window).height()*0.3);
      var distance = top - $(this).offset().top;
      var hash = $(this).attr('id');
      if (distance < 100 && distance > -100 && currentHash != hash) {
        if (history.pushState) {
          history.pushState(null, null, "##" + hash);
          updateNav("##" + hash);
        }
      }
    });
  }, 80));

  function updateNav(navhash) {
    $('.site-nav a').parent().children().removeClass("active");
    $('.site-nav a[href="'+navhash+'"]').addClass("active");
  }
});

// Navigation configuration
AA_CONFIG = {
  animationLength: 2800,
  easingFunction: 'easeInOutQuad',
  scrollOffset: 150
};
