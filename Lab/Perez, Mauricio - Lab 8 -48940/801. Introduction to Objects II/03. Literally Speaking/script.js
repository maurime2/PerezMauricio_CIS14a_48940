var james = {
    job: "programmer",
    married: false,
    speak: function(spk) {
        switch(spk){
            case 'great':
            console.log("Hello, I am feeling great");
            break;
            case 'just okay':
            console.log("Hello, I am feeling just okay");    
            break;
            default:    
            console.log("I dont know how I Feel...");
            break;
            }
            
    }
};

james.speak("great");
james.speak("just okay");