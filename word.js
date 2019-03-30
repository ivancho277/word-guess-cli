var Letter = require("./letter")


function Word(word){
    this.word = word;
    this.arr = word.split("");
    this.LetterArr = LetterArr;
    arr.forEach(element => LetterArr.push(new Letter(element)));


    this.toString = function (){
        console.log(LetterArr.forEach(element => element.toString()))
    }

    this.takeGuess = function(char){
        LetterArr.forEach(element => {element.check(char)});
    }
}

module.exports = Word;