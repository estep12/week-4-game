$(document).ready(function(){


var totalScore = 0;
var wins = 0;
var loses= 0;

var unknownNumber = Math.floor(Math.random() * 120) + 19;

var numberValues = {};

numberValues[1] = 1 + Math.floor(Math.random() * 12);
numberValues[2] = 1 + Math.floor(Math.random() * 12);
numberValues[3] = 1 + Math.floor(Math.random() * 12);
numberValues[4] = 1 + Math.floor(Math.random() * 12);


$("#numWins").text("Wins: " + wins)
$("#numLoses").text("Loses: " + loses)

$("#randomNumber").text("Number to match: " + unknownNumber)
console.log(unknownNumber)


$("#crystal1").on("click", numberHandler(1));
$("#crystal2").on("click", numberHandler(2));
$("#crystal3").on("click", numberHandler(3));
$("#crystal4").on("click", numberHandler(4));

function resetGame() {
    unknownNumber = Math.floor(Math.random() * 101) + 19;
    console.log(unknownNumber)
    $("#randomNumber").text("Number to match: " + unknownNumber);
    numberValues[1] = 1 + Math.floor(Math.random() * 12);
    numberValues[2] = 1 + Math.floor(Math.random() * 12);
    numberValues[3]  = 1 + Math.floor(Math.random() * 12);
    numberValues[4]  = 1 + Math.floor(Math.random() * 12);
    totalScore = 0;
    $("#playerScore").text("Your Score: " + totalScore);

}

function winner(){
    alert("You Won!");
    wins++;
    $("#numWins").text("Wins: " + wins)
    resetGame();
}

function loser(){
    alert("You Lost...");
    loses++;
    $("#numLoses").text("Loses: " + loses)
    resetGame();
}

function numberHandler(numberKey) {
    return function() {
     totalScore = totalScore + numberValues[numberKey];
     $("#playerScore").text("Your Score: " + totalScore);
 
     if (totalScore === unknownNumber) {
         winner()
     }
 
     else if (totalScore > unknownNumber) {
         loser()
     } 
 }
 }






// $("#crystal1").on("click", function() {
//     number1; 
//     totalScore = totalScore + number1;
//     $("#playerScore").text("Your Score: " + totalScore)
//     console.log(number1);

//     if(totalScore === unknownNumber){
//         winner();
        
//     } else if ( totalScore > unknownNumber) {
//         loser();
       
//     }
// });

// $("#crystal2").on("click", function() {
//     number2;
//     console.log(number2);

    
// });

// $("#crystal3").on("click", function() {
//     number3;
//     console.log(number3);
// });

// $("#crystal4").on("click", function() {
//     number4;
//     console.log(number4);
// });






























});