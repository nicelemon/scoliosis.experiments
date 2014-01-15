$(function() {
    $(".rando").each(function() {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random() + 200*Math.random())) + ',' + (Math.floor((256-199)*Math.random()) + 50) + ',' + (Math.floor((256-199)*Math.random()) + 50) + ')';
         $(this).css("background-color", hue);
    });
});