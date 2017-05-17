$(document).ready(function(){
  $.localScroll.hash();

  $('.sub-menu').localScroll({
    offset: {
      top: -208,
      left: 0
    },
    duration: 1500,
    easing: "easeInOutCubic"
  });
});
