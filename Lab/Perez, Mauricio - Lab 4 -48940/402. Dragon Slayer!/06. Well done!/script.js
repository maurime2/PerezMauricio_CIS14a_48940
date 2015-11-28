var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound  = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("You Slayed the Dragon!!!");
        totalDamage += damageThisRound;
            if (totalDamage >=4){
                slaying = false;
                }
            else{
                youHit = Math.floor(Math.random() * 2);
                }
        
        }
    else{
        console.log("You Lost!");
        
        }
        var slaying = false;
    }