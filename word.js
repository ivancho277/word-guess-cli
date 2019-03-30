var Letter = require("./letter")


function Word(word){
    this.word = word;
    this.arr = word.split("");
    this.LetterArr = this.arr.map(element => (new Letter(element)));
    this.arr.forEach(element => this.LetterArr.push(new Letter(element)));


    this.toString = function (){
        console.log(this.LetterArr.forEach(element => element.toString()))
    }

    this.takeGuess = function(char){
        this.LetterArr.forEach(element => {element.check(char)});
    }
}

module.exports = Word;