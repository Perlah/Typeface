var hover = false;

$("#color").hide();

$("#image").mouseenter(function(){
        $("#image").hide();
        $("#color").show();
         console.log("hi");

});

$("#color").mouseleave(function(){
        $("#image").show();
        $("#color").hide();
         console.log("bye");
});

