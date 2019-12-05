
//We will first implement a function that generates a choice for the computer, and will
//then compare it to that of the user. The users choice will be found through element id from the html.
//In order to compare the results, we will have to make a funciton "compare" which will establish and respond with
//the winner. This compare function will be below the play function.


//this is where we will find the computers choice and compare it to the users.

var loses = 0;
var wins = 0;

var game_result;
function play(userChoice){
    // var computerChoice = Math.random(0,2)
    var computerChoice = Math.random();
    // if(computerChoice == 0)
    if(computerChoice < 0.34){
        computerChoice = "rock";
    }else if(computerChoice < 0.67){
        computerChoice = "paper";

    }else{
        computerChoice = "scissors";
    }
    game_result = compare(userChoice,computerChoice);
    document.getElementById("compChoice").innerHTML = computerChoice;
    document.getElementById("user").innerHTML = userChoice;
    document.getElementById("gameResult").innerHTML = game_result;

    var winner = compare(userChoice, computerChoice);
    document.getElementById("gameResult").innerHTML = winner;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;


    if (wins > 20 || loses > 20){
        document.getElementById("wins").style.fontSize="44";
        document.getElementById("loses").style.fontSize="44";

    }

    if (wins > 99){
        alert("You reached the max score of 99. Congrats, I guess.");
    }
    if(loses > 99){
        alert("The Computer reached a max score of 99. Sorry, but you ain't it");
    }


};

//this is where we decalre how to compare the choices based on the basic rules of RPS.
//think about how a player wins/loses. What is the logic? View the flowchart for reference. 
var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            wins++;
            return "The user won with rock!";
        }else{
            loses++;
            return "The computer won with paper!";
        }
    }else if (choice1 === "paper"){
        if(choice2==="rock"){
            wins++;
            return "The user won with paper!";
        }else{
            loses;
            return "The computer won with scissors!";
        }
    }else {
        if(choice2==="paper"){
            wins++;
            return "The user won with scissors!";
        }else{
            loses++;
            return "The computer won with rock!"
        }
    }
};

//helps to reset the score
var reset = function(){
    loses = 0;
    wins = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
};


