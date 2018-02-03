$(document).ready(function () {

// 1. Select facility city. if it's not selected, use a zip code (make sure it's 5 numbers long)

// $("#Manhattan").click(function() {
//     var manhattan = $("#Manhattan").val();

// $(".input1").click(function () {

//     var brooklyn = $("#Brooklyn").val();
//     var queens = $("#Queens").val();
//     var bronx = $("#Bronx").val();
//     var statenIsland = $("#StatenIsland").val();

//     $(".input1").click(function(){});

// 2. Select a date


// 2a. If date is not an NY zip code, alert with "Not available in this area"

// 3. Click submit. (Zip OR bourough) AND date

// 4. If zip code, show map of 10 open markets near there.

// 5. If borough, show map of all open markets there.

function getApiCallVal(){

}

var facilityCity = 

var userInput = $('.buttons').val();

$.ajax({
    url: "https://data.cityofnewyork.us/resource/cw3p-q2v6.json" + facilityCity,
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "XwT0Lay3rgqSQO1Yt0PZwqopY"      
    }
}).done(function(data) {
    var zip = data.data;
    zip.forEach(function(zip){
    var memeURL = meme.images.looping.mp4;
$('.video-wrapper').append('<video src="' + memeURL + '"autoplay></video>');
});


$("")

});