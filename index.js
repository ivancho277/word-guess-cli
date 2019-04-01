var Word = require("./word.js")
var inquirer = require('inquirer')

function createRandomWords(){
    var wordArr = ["Spongebob Squarepants"]
    return wordArr;
}

function askForLetter(wordObj, count){
    
    inquirer.prompt([
        {
        type: 'input',
        name: "guess",
        message: "Please guess a single Letter: "
        }
    ]).then(res => {
        //console.log(res.guess)
        //var word = new Word("spongebob")
        count--;
        wordObj.takeGuess(res.guess)
        console.log(count)
        askForLetter(wordObj, count);
      //  word.toString()
    })
}



function play(){
    var guesses = 10;
    var word = new Word("spongebob")
    askForLetter(word, guesses)
    
    
   // var word = new Word("Spongebob")
    
   // word.toString();

}
play()
