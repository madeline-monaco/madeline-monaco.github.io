$("#submit").click(function () {
    var a = $("#a").val();
    var b = $("#b").val();

    console.log(a, b);

    if (a==b){
        $("#comparison").html("=");
    } else if (a<b){
        $("#comparison").html("<");
    } else if (a>b) {
        $("#comparison").html(">");
    }
})