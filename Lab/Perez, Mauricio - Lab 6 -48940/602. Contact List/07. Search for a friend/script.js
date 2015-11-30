//object: Friends
var friends = {};

//Adding Bill and Steve
friends.bill = {
    //Properties of Bill
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
    
    };
friends.steve = {
    //Properties of Steve
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop','Cupertino','CA','95014']
    
    };
    
    //list function
    var list = function(obj) {
        for(var prop in obj) {
            console.log(prop);
        }
    };
    
    
  var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};