$(document).ready(function () {

    // Selected valid borough OR input a valid zip code

    function loadResultSection(boroughSelected, cityZipCode) {
        if (boroughSelected && cityZipCode) {
            aJaxCall("facilitycity=" + boroughSelected + "&facilityzipcode=" + cityZipCode);
        }
        else if (boroughSelected) {
            aJaxCall("facilitycity=" + boroughSelected);
        }
        else if (cityZipCode) {
            aJaxCall("facilityzipcode=" + cityZipCode);
        }
        //here is where you will probably want to load up results section as well
    };

    // Get variables from API
    function aJaxCall(variable) {
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/cw3p-q2v6.json?" + variable,
            type: "GET",
            data: {
                "$limit": 5000,
                "$$app_token": "XwT0Lay3rgqSQO1Yt0PZwqopY"
            }
        });
    };

    // Valid zip code
    function validateZipCode(zipCode) {
        if (zipCode.length === 5 && !/\D/.test(zipCode)) {
            return true;
        }
        else {
            return false;
        }
    };

    // Submit 
    var submitButton = this.getElementById("submit");
    submitButton.addEventListener("click", function (event) {
        //get the zip code selected
        var cityZipCode = document.getElementById("zipCodeId").value;
        var validZip = validateZipCode(cityZipCode);
        var boroughSelected = null;

        //get the borough selected
        var boroughButtons = document.getElementsByName("boroughSelection");
        boroughButtons.forEach(function (btn) {
            //if this is the selected borough
            if (btn.checked) {
                boroughSelected = btn.id;
            }
        });
            // Checks borough and zip
            if (!boroughSelected && !validZip) {
                alert("Please Select a Borough or Enter a Valid 5 digit zip code");
            }
            else if (!boroughSelected) {
                if (cityZipCode !== "") {
                    if (validZip) {
                        loadResultSection(boroughSelected, cityZipCode);
                    }
                    else {
                        alert("Please Enter a Valid 5 digit zip code");
                    }
                }
            }
            //pass in borough (if one is selected) and zip code (if one is entered)
            else {
                loadResultSection(boroughSelected, cityZipCode);
                }
    });
});
