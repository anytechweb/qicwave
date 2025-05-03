$(function(){"use strict";setTimeout(function(){$(".loader_bg").fadeToggle()},1500);
$(document).ready(function(){
    // $('[data-toggle="tooltip"]').tooltip();
    $("#dismiss").click(function() {
        $("#sidebar").removeClass('active');
    });
});
$(document).ready(function(){$(".main-menu ul li.megamenu").mouseover(function(){if(!$(this).parent().hasClass("#wrapper")){$("#wrapper").addClass("overlay")}});$(".main-menu ul li.megamenu").mouseleave(function(){$("#wrapper").removeClass("overlay")})});$(document).ready(function(){var owl=$("#product-in-slider");owl.on("mousewheel",".owl-stage",function(e){if(e.deltaY>0){owl.trigger("next.owl")}else{owl.trigger("prev.owl")}e.preventDefault()})});$(window).on("scroll",function(){scroll=$(window).scrollTop();if(scroll>=100){$("#back-to-top").addClass("b-show_scrollBut")}else{$("#back-to-top").removeClass("b-show_scrollBut")}});$("#back-to-top").on("click",function(){$("body,html").animate({scrollTop:0},1e3)});$("[data-countdown]").each(function(){var $this=$(this),finalDate=$(this).data("countdown");$this.countdown(finalDate,function(event){var $this=$(this).html(event.strftime(""+'<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '+'<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '+'<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '+'<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '+'<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'))})});$(document).ready(function(){$("#sidebarCollapse").on("click",function(){$("#sidebar").toggleClass("active");$(this).toggleClass("active")})});
// $("#blogCarousel").carousel({interval:5e3})
});
