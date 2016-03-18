$(window).load(function() {
  $('.page-content').fadeTo('slow', 1);
});

$(document).ready(function(){
  $("h2").fitText(1.3, { minFontSize: '40px' });
  $(".site-logo h2").fitText(1.8, { minFontSize: '30px' });
  $(".site-logo h1").fitText(1.8, { minFontSize: '40px' });

  // Works view
  $(".filter").click(function(){
  	var filter = $(this).attr("category-filter");
  	if (filter == "all") {
  		$('.works-item').show(1000);
  	}
  	else {
  		$('works-item, .category-'+filter).show(1000);
      $(".works-item:not('.category-"+filter+"')").hide(1000);
  	}
  });
});

AA_CONFIG = {
  animationLength:  2800,
  easingFunction:   'easeInOutQuad',
  scrollOffset:     150
};
