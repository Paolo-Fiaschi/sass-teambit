$(document).ready(function (){

  // HEADER------------
  var menu = $(".menuTendina");
  menu.mouseenter(
    function() {
      $(".menu").show();
      $(this).find('a').css('color', '#30488F');
  });
  menu.mouseleave(
    function() {
      $(".menu").hide();
      $(this).find('a').css('color', '#58402C');
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 70) {
      $("header").addClass("scrollHeader");
    } else {
      $("header").removeClass("scrollHeader");
    }
  });

});
