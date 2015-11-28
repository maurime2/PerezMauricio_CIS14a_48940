// Declare your variables here!
var hungry = true;
var foodHere = true;

var eat = function() {
  // Add your if/else statement here!
  if(hungry && foodHere){
        console.log("Tonight we dine like KINGS!!!");
        return true;
      }
      else{
          console.log("False Sucka!!! you starve!");
          return false;
          }
};



eat();