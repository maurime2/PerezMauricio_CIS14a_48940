var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var prop in languages) {
    if (typeof languages[prop] === "string") {
        console.log(languages[prop]);
    }
}