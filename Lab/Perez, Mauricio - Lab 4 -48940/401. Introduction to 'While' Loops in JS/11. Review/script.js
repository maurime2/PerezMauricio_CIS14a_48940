// Write your code below!
var condition = true; 
for(var i=0;i<10;i++){
    
    while (condition){
        console.log("This will only loop..."+i);
        var condition = false;
        }
    
    do{
        var condition = false;
         console.log("in do while, condition is: " + condition);
        }while (condition);
        
        var condition = true;
    
    }