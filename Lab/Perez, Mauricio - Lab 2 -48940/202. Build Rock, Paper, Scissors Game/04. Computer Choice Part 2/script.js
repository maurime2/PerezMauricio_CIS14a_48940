//User Choice
var userChoice = prompt("Do you choose rock, paper or scissors");
//COmputer Choice
var computerChoice = Math.random();
//output
console.log(computerChoice );
if(computerChoice<=.33){
    computerChoice = "rock";
    }
else if((computerChoice>.33)||(computerChoice<=.66)){
    computerChoice = "paper";
    }
else{
    computerChoice = "scissors";
    }    