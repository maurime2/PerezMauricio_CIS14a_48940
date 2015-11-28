var user = prompt("RUN, HIDE, of FIGHT!!!").toUpperCase();

switch(troll) {
    //Case 1
        case 'FIGHT':
        if("Mauricio".length>2){
                console.log("Yea Man, You tough!!!");
            }
        
        else{
            console.log("Naw Man, You Weeksauce!!!");
            }
        break;
    //Case 2    
        case 'HIDE':
        if((Math.floor(Math.random() * 5)) >0 === (0 || 1)){
                console.log("Your an expert hider!!");
                }
        else{
            console.log("You got caught!!");
            }
        break;    
    //Case 2    
        case 'RUN':
        if(Math.floor(Math.random() * 2)>0 === (1 && 1)){
                console.log("Runnnnnnn!!!!");
            }
        else{
            console.log("You triped!!!!");
            }
        break;            
    //Default case    
    default:    
    console.log("You did NOTHING!!! You were smashed on!");
    break;
    }