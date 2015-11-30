var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
var Eggs = cashRegister.add(0.98);
var Milk = cashRegister.add(1.23);
var Magazine = cashRegister.add(4.99);
var Chocolate = cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
