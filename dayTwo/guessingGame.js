var answer;
function setupGame() {
    $("#tbxGuess").val("");
    $("#message").text("");
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Self destruct program if " + answer + " is entered");

    $("#intro").show();
    $("#game").hide();


}


function wrongColor() {
    $("game").css("background-color:red");
}
function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        $("#message").text("You are right!"); 
            $("#btnGuess").hide();
           $("#resetBtn").on("click", setupGame);
            
        }





    else {
        $("#message").text("You are wrong try again!");
        $("#tbxGuess").val("");
       

    }
}

function playGame() {
    $("#intro").hide();
    $("#game").show();
    $("#tbxGuess").focus();
}

$(function () {
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);
    setupGame();

});
