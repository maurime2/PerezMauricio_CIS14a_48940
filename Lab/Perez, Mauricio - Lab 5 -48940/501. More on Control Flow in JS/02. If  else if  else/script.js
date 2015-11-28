var isEven = function(number) {
  // Your code goes here!
    if(number%2===0){
        return true;
        }
    else if(isNaN(number)){
        return ("Not a Number");
        }
        
    else{
        return false;
        }
};

var number = 2;
isEven(number);