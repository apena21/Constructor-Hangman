// This file contains the logic for the course of the game, which depends on Word.js and:

// - Randomly selects a word and uses the Word constructor to store it
// - Prompts the user for each guess and keeps track of the user's remaining guesses

// to do:  enter code if user guesses the full word.

const Word = require("./Word.js");
var inquirer = require('inquirer');
var guessesLeft = 10;

//console.log ("Guess a letter to solve the word:");

const game = function(){

    // Array of words to be guessed - types of dance
    var wordsList = ["foxtrot", "breakdance", "jitterbug", "conga", "tango", "waltz", "swing", "lindy",
    "flamenco", "ballet"];
    // randomly select a word from the array of words to be guessed.
    // below passes string to Word constructor
    this.newWord = new Word (wordsList[Math.floor(Math.random() * wordsList.length)]);
    

    //review npm inquirer documentation to get code below to work
    inquirer.prompt([
        {
            name: "answerPrompt",
            message: "Guess a letter to solve the word:"
        }
        
    ])
    .then(function(answer){
        var wordToGuess = require ('./Word');
        this.Word = answer.initialPrompt // returns user's response to the question on the message line
    console.log(answer.answerPrompt);
    });
 
    
/*
    // This function is run whenever the user guesses a letter..
    var gameProgress = new Word();
    console.log(gameProgress);
};  

*/


    this.gameProgress = function(solvingWord) {
        for (var i=0; i<this.guessesLeft.length; i--){
            // If the user has no guesses left, restart the game.
            if (this.guessesLeft === 0) {
                console.log ("You lose, try again")
                this.restartGame();
            }
            
        // Otherwise...
        else {
            console.log ("Guesses left: " + guessesLeft);
        }
        
        }
    };
}
 game();


/*
this.restartGame = function() {
    guessesLeft = 10;

};
*/
