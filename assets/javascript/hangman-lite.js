(function(){

    const word = "monday";

    let letter = "b";

    if(word.includes(letter)) {
        let count = word.split("").filter(wordLetter => wordLetter === letter).length
        document.write("Yeah, the letter "+letter+" exists "+count+" times");
    } else {
        document.write("Nope, that leter does not exist");
    }


    

    //document.write("Yeah, the letter "+letter+" exists "+count+" times");
    //document.write("Nope, that leter does not exist");

})();