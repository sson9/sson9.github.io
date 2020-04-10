$(document).ready(function(){
      $(".txt1").delay(500).animate({
          opacity:0.8,
          top:370
      },800,"swing",function(){
          $(".txt2").delay(10).animate({
              opacity:0.8,top:430
      },800,"swing",function(){
          $(".txt3").delay(200).animate({
              opacity:0.8,top:840
      },800,"swing");
       });
     });
    
    var wh = $(window).height();
        var wd = $(window).width();
        $(".sc_data").each(function(index){
            $(this).attr("data-val", index*wh);
        });
        $(".sc_data").on("mousewheel DOMMouseScroll", function(e){
            var secPos = parseInt($(this).attr("data-val"));
            if(e.originalEvent.wheelDelta >= 0){
                $("html, body").stop().animate({scrollTop:secPos - wh});
                return false;
            } else if(e.originalEvent.wheelDelta < 0) {
                $("html, body").stop().animate({scrollTop:secPos + wh});
                return false;
            }
        }); 

    });

