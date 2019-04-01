var Word = require("./word.js")
var inquirer = require('inquirer')

function createRandomWords(){
    var wordArr = ["spongebob squarepants","angry beavers", "catdog", "dexter's laboritory"]
    var rand = Math.floor(Math.random() * wordArr.length)
    return wordArr[rand];
}

function askForLetter(wordObj, count){
    if(count === 0){
        console.log("GAME OVER")
    }
    else{
    inquirer.prompt([
        {
        type: 'input',
        name: "guess",
        message: "Please guess a single Letter: "
        }
    ]).then(res => {
        //console.log(res.guess)
        //var word = new Word("spongebob")
        wordObj.takeGuess(res.guess);
        count--;
        console.log(count);
        askForLetter(wordObj, count);
      //  word.toString()
    })
}
}

function play(){
    var guesses = 10;
    var word = new Word(createRandomWords())
    askForLetter(word, guesses)
}
play()
