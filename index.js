var Word = require("./word.js")
var inquirer = require('inquirer')

function createRandomWords(){
    var wordArr = ["Spongebob Squarepants"]
    return wordArr;
}

function askForLetter(){
    inquirer.prompt([

    ]).then(res => {
        
    })
}



function play(){
    var guessed = process.argv[2];
    var word = new Word("Spongebob")
    word.takeGuess(guessed);
    word.toString();

}
play()
