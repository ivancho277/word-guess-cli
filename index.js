var Word = require("./word.js")
var inquirer = require('inquirer')

function createRandomWords(){
    var wordArr = ["Spongebob Squarepants"]
    return wordArr;
}
var word = new Word("spongebob")
function askForLetter(){
    
    inquirer.prompt([
        {
        type: 'input',
        name: "guess",
        message: "Please guess a single Letter: "
        }
    ]).then(res => {
        console.log(res.guess)
        //var word = new Word("spongebob")
        word.takeGuess(res.guess)
        askForLetter();
      //  word.toString()
    })
}



function play(){
    var guesses = 10;
    
    askForLetter()
    
    
   // var word = new Word("Spongebob")
    
   // word.toString();

}
play()
