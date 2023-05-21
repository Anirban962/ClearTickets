// slider-sec

$('.slider').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true
});








// accordion

$(document).ready(function() {
  
  let panels = $("#accordion-1 > .content").hide();

  images = $("#accordion__img > .acco-side-wrap").hide();

  panels.first().show();
  images.first().show();

  $("#main_accordion  .head").click(function() {

    let panel = $(this).parent(),
      tabName = panel.attr("tab-name"),
      image = $("#" + tabName + "-img");
     
    panels.slideUp();
    images.slideUp();

    panel.find(".content").slideUp();

    $(".active").not(this).removeClass("active").next().slideUp(300);
    $(this).toggleClass("active").next().slideToggle(300);


    $(this).toggleClass('.active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    
    image.slideDown();


    return false;
  });
});