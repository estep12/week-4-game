$(document).ready(function(){


var totalScore = 0;
var wins = 0;
var loses= 0;
var unknownNumber = Math.floor(Math.random() * 120) + 19;
var number1 = 1 + Math.floor(Math.random() * 12);
var number2 = 1 + Math.floor(Math.random() * 12);
var number3 = 1 + Math.floor(Math.random() * 12);
var number4 = 1 + Math.floor(Math.random() * 12);

$("#numWins").text(wins)
$("#numLoses").text(wins)

function winner(){
    alert("You Won!");
    wins++;
    $("#numWins").text(wins)
}

function loser(){
    alert("You Won!");
    loses++;
    $("#numLoses").text(loses)
}



$("#randomNumber").text("Number to match: " + unknownNumber)
console.log(unknownNumber)

$("#crystal1").on("click", function() {
    number1;
    totalScore = totalScore + number1;
    console.log(totalScore);
    $("#playerScore").text("Your Score: " + totalScore)
    console.log(number1);
});

$("#crystal2").on("click", function() {
    number1;
    console.log(number2);
});

$("#crystal3").on("click", function() {
    number1;
    console.log(number3);
});

$("#crystal4").on("click", function() {
    number1;
    console.log(number4);
});




// function reset(){

//     unknownNumber;
//     number1;
//     number2;
//     number3;
//     number4;
// });

























});