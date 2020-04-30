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
  //scroll Menu
  $(window).scroll(function() {
    if ($(document).scrollTop() > 70) {
      if ($("header").hasClass('scrollHeader') == false) {
        $("header").css("display", "none");
        $("header").addClass("scrollHeader");
        $("header").fadeIn(800);
        $(".headerButton").addClass('scrollButton');
        $(".googleLogo").css('display', 'block');
        $(".headerButton img").css('display', 'none');
      }
    } else {
      if ($("header").hasClass('scrollHeader')) {
        $("header").removeClass("scrollHeader");
        $(".headerButton").removeClass('scrollButton');
        $(".googleLogo").css('display', 'none');
        $(".headerButton img").css('display', 'block');
      }
    }
  });

});
