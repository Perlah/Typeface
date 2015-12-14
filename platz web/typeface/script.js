var click = true;

$(".circle1").click(function() {
   if (click == true){
       $("#white").show();
       $("#num").hide();
       $("#punct").hide();
       $("#whole").hide();
       console.log("show")
       $(".circle1").css('background', '#DAE0E6');
       $(".circle2").css('background', '#414345');
       $(".circle3").css('background', '#414345');
       $(".circle4").css('background', '#414345');
   } 
});

$(".circle2").click(function() {
   if (click == true){
       $("#num").show();
       $("#white").hide();
       $("#punct").hide();
       $("#whole").hide();
       console.log("num")
       $(".circle2").css('background', '#DAE0E6');
       $(".circle1").css('background', '#414345');
       $(".circle3").css('background', '#414345');
       $(".circle4").css('background', '#414345');
   } 
});

$(".circle3").click(function() {
   if (click == true){
       $("#punct").show();
       $("#num").hide();
       $("#whole").hide();
       $("#white").hide();
       console.log("punct")
       $(".circle3").css('background', '#DAE0E6');
       $(".circle2").css('background', '#414345');
       $(".circle1").css('background', '#414345');
       $(".circle4").css('background', '#414345');
   } 
});

$(".circle4").click(function() {
   if (click == true){
       $("#whole").show();
       $("#num").hide();
       $("#white").hide();
       $("#punct").hide();
       console.log("whole")
       $(".circle4").css('background', '#DAE0E6');
       $(".circle1").css('background', '#414345');
       $(".circle3").css('background', '#414345');
       $(".circle2").css('background', '#414345');
   } 
});
