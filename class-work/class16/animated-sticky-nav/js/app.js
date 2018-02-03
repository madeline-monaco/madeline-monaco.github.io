$(document).ready(function () {

$(window).scroll(function(){
    if ($(window).scrollTop() > 75){
        $("header").css("font-size", "20px");
      }  else {
          $("header").css("font-size", "75px");
      }
    // console.log($(window).scrollTop());

});

})
