$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css({
              "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            });
        }
       
        else{
            $("nav.navbar").css("background" , "#e8e7ee");  
            $(".navbar").css( "box-shadow" , "none");	
        }
    })
  })
