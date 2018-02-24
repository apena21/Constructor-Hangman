// That means the constructor should define:

// -An array of new Letter objects representing the letters of the underlying word
// -A function that returns a string representing the word. This should call the function 
    //on each letter object (the first function defined in Letter.js) that displays the 
    //character or an underscore and concatenate those together.
// -A function that takes a character as an argument and calls the guess function on 
    //each letter object (the second function defined in Letter.js)
// - Word.js should only require Letter.js

const Letter = require("./Letter.js");

/*
// Variables that set the initial state of our hangman game.
word: null;
wordLetters: [];
matchedLetters: [];
guessedLetters: [];
guessesLeft: 0;
totalGuesses: 0;
letterGuessed: null;
wins: 0;
*/

const WordLetters = function(wordToGuess){
    this.letters = [];
    for (var i=0; i<wordToGuess.length; i++){
        var Char = new Letter(wordToGuess[i]);
        this.letters.push(Char);
    }


//A function that returns a string representing the word. This should call the function 
//on each letter object (the first function defined in Letter.js) that displays the 
//character or an underscore and concatenate those together.
//pseudocode:
// create function (use this.__)
//call function on each letter object by using a for loop (loop through this.letters, on each must
//call display function and concatenate them into a string. Be sure to use spaces in between to tell where each
//placeholder starts and ends.)
// then return the string 

    this.solvingWord = function (){
        var wordProgress = "";
        for (var i=0; i<this.letters.length; i++){
            wordProgress += " " + this.letters[i].display ();         
        }
        return wordProgress;
    }


// -A function that takes a character as an argument and calls the guess function on 
    //each letter object (the second function defined in Letter.js)
// loop through this.letters
// call the UserInput function, then pass in letters passed to work guessed function.
// return true if any of the letters return true.
    this.charGuessTrue = function (userGuess){
        var trueGuess = false;
        for (var i=0; i<this.letters.length; i++){
            if (this.letters[i].userInput(userGuess) === true ){
                trueGuess = true;
            }
        }
        return trueGuess;
    }
// call function from Letter.js file
    
}
module.exports = WordLetters;



// Use below code to test the above
/*
// use keyword "new" to create a new instance of a constructor object
var letter = new WordLetters ("ballet");
console.log(letter.charGuessTrue("l"));
console.log(letter.solvingWord());
//WordLetters("ballet");
//console.log(WordLetters);
*/