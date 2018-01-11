$(document).ready(function () {

    $("#myForm").submit(function (event) {
        event.preventDefault ();
        console.log("yay", $("#name-input").val);
    });
})
