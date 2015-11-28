// Check if the user is ready to play!
confirm("Are you ready to play?");

//Prompt Age
var age = prompt("What's your age");


if(age < 13) 
{
    // do this code
    console.log("You Cant Play...");
}
else   // "otherwise"
{
    // do this code
        console.log("You'r Allowed to Play!");
}


//Prompt Sceen
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//Answer Variable
var userAnswer = "Do you want to race Bieber on stage?";

//Ask User if they want to race


//Outcome of choice
if(confirm(userAnswer) == true)
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
    }
    
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
    }