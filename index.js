var Word = require("./word.js")
//import inquirer from inquirer

function createRandomWords(){

    var wordArr = ["Spongebob Squarepants"]


    return wordArr;
}



function play(){
    var guessed = process.argv[2];
    var word = new Word("Spongebob")
    word.toString();

}
play()
