
(function($){
    "use strict";
    $(document).ready(function() {
        
        // wow animation
        new WOW().init();
        if ($(window).width() <= 991){ 
            $(".wow").removeClass("wow");
        }

        // Odometer Part
        setTimeout(function(){
            odometerOne.innerHTML = 346789,
            odometerTwo.innerHTML = 199566,
            odometerThree.innerHTML = 95828,
            odometerFour.innerHTML = 13069
        });

    });
}(jQuery));








