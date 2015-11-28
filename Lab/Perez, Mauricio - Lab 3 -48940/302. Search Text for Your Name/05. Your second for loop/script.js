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