$(document).ready(function() {

// GLOBAL VARIABLES


var wins = 0;
var losses = 0;
var usersScore;
var theNumber = 0;
var greenNumber = 0;
var redNumber = 0;
var blueNumber = 0;
var clearNumber = 0;
init();

function init(){
    usersScore = 0;
    $(".userScore").text(usersScore);
    theNumber = initializeNumber();
    console.log(theNumber);
    greenNumber = randomCrystalNumber();
    redNumber = randomCrystalNumber();
    blueNumber = randomCrystalNumber();
    clearNumber = randomCrystalNumber();
    displayTheNumber();
    console.log(greenNumber + '|' + redNumber + '|' + blueNumber + '|' + clearNumber);
}


// FUNCTIONS

function initializeNumber() {
    let min = Math.floor(19);
    let max = Math.ceil(120);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function displayTheNumber() {
    $(".theNumber").text(theNumber);
}

function randomCrystalNumber() {
    return Math.floor(Math.random() * 12) + 1;
}

function crystalsSum(valOfCrystal){
    usersScore = usersScore + valOfCrystal;
    if(usersScore === theNumber){
        youWin();
    }else if(usersScore > theNumber){
        youLose();
    }else if(usersScore < theNumber){
        $(".userScore").text(usersScore);
    }
}

$("#green").click(function(){
    crystalsSum(greenNumber);
});

$("#red").click(function(){
    crystalsSum(redNumber);
});

$("#blue").click(function(){
    crystalsSum(blueNumber);
});

$("#clear").click(function(){
    crystalsSum(clearNumber);
});

function youWin(){
    wins++;
    console.log(wins);
    $(".wins").text(wins);
    init();
}


function youLose(){
    losses++;
    console.log(losses);
    $(".losses").text(losses);
    init();
}



});

