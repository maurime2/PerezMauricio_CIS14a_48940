/*jshint multistr:true */
var text   = "Mauri Mauri Mauri Mauri";
var myName = "Mauri";
var hits = [];

//For loop to go throught the entier string
for(i=0;i<text.length;i++){
    //Check for Capital Letter
    if (text[0]==='M'){
        //for loop
        for(var j = 0;j<(myName.length+i); j++){
            
            hits.push(text[j]);
            }
        
        }
    }
    
    //Log of all the loops
    if(hits.length === 0){
        console.log("Your name wasn't found!");
    }
    else{
        console.log(hits);
    }