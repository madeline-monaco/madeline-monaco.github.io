// Store your current age into a variable

var age = $("#age").html();

// Store a maximum age into a variable

var max-age = $("#max-age").html();

// Store a favorite drink (from a drop-down) into a variable

var drink = $("#item").val();

// Store an amount per day into a variable

var amount = $("#num-per-day").html();

// Calculate how much you would drink for the rest of your life!

$("#click-me").html(function(){
    var solution = $("#solution").html(); 
    $("#solution").html(parseInt(("max-age") - ("age"))*amount);
 })

// Output your results to the user


