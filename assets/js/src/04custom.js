$(window).load(function() {
  $('.page-content').fadeTo('slow', 1);
});

$(document).ready(function(){
  // Headers
  $("h2").fitText(1.3, { minFontSize: '40px' });
  $(".site-logo h2").fitText(1.8, { minFontSize: '30px' });
  $(".site-logo h1").fitText(1.8, { minFontSize: '40px' });

  // Works view
  $(".work-categories .filter").click(function(){
  	var filter = $(this).attr("category-filter");
    console.log(filter);
  	if (filter == "all") {
  		$('.works-item').fadeTo('slow', 1);
  	}
  	else {
  		$('works-item, .category-'+filter).fadeTo('slow', 1);
      $(".works-item:not('.category-"+filter+"')").fadeTo('slow', 0);
  	}
  });
});

// Navigation configuration
AA_CONFIG = {
  animationLength:  2800,
  easingFunction:   'easeInOutQuad',
  scrollOffset:     150
};
