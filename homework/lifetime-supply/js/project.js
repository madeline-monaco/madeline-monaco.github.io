$("#click-me").click(function(){
    var age = $("#age").val();
    var maxAge = $("#max-age").val();
    var drink = $("#item").val();
    var numPerDay = $("#num-per-day").val();
    var total = (parseInt(maxAge) - parseInt(age)) * parseInt(numPerDay) * 365;
    var drink = $("#drink").val();

    $("#solution").html(total);
    $("#drink").html(Drink);

    console.log(total);
     })

// // Store your current age into a variable

// // Store a maximum age into a variable

// // Store a favorite drink (from a drop-down) into a variable

// // Store an amount per day into a variable

// // Calculate how much you would drink for the rest of your life!

// Output your results to the user

