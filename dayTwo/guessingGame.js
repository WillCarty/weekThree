var answer;
function setupGame() {
    $("#tbxGuess").val("");
    $("#message").text("");
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Self destruct program if " + answer + " is entered");

    $("#intro").show();
    $("#game").hide();
    

}
function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        $("#message").text("You are right!");
       



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
   function wrongColor(){
       $("game").css("color","blue");
   }
});