var suitcase = {
    shirt: "Hawaiian"
};

//console.log(suitcase.shorts);

if(suitcase.hasOwnProperty("shorts")){
    console.log(sutcase.shorts);
    }
else{
    suitcase.shorts='Baggy';
    console.log(suitcase.hasOwnProperty(suitcase.shorts));
    }