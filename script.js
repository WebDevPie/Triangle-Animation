$(document).ready(function() {
    animateDashArr(0);

    function animateDashArr(iter) {
        if(iter == 1) {
            iter = 0;
        }
        // console.log(iter);
        $(".triangle-svg polygon").css("stroke-dasharray", 50);

        setTimeout(()=>{
            $(".triangle-svg polygon").css("stroke-dasharray", 25);
        }, 1500);

        setTimeout(()=>{
            $(".triangle-svg polygon").css("stroke-dasharray", 2);
            iter++;
            // console.log(iter);
            setTimeout(()=>{
                animateDashArr(1);
            }, 1500);
        }, 3000);
    }
});