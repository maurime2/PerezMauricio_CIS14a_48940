var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
var x = "fullName";

    for(var x in nyc){
        console.log(nyc[x]);
    }