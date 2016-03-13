var s = skrollr.init();
skrollr.menu.init(s, {
    animate: true,
    easing: 'swing',
    scale: 2,
    duration: function(currentTop, targetTop) {
        return 1500;
    },
    complexLinks: false
});

$(window).load(function() {
  $('.page-content').fadeTo('slow', 1);
});
