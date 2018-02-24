//The constructor should define:

// -A string value to store the underlying character for the letter or a blank placeholder (such as an underscore)
// -A boolean value that stores whether that letter has been guessed yet
// -A function that returns the underlying character if the letter has been guessed, 
    //or a placeholder (like an underscore) if the letter has not been guessed

//  Need help on the below
// -A function that takes a character as an argument and checks it against the underlying character, 
    //updating the stored boolean value to true if it was guessed correctly
// - Letter.js should not require any other files.

// the char variable is the correct letter used in the word that is in play
function UserGuesses (char){
    //this.setLetter stores the letter we set at the beginning to start the game
    this.setLetter = char; 
    this.guess = false;
    //below function starts by assuming initial letter will be false, otherwise the full function will not run.
    this.display = function(){
        if ( this.guess=== false){
            return "__"
        }
        else{
            return this.setLetter
        }
    }
    this.userInput = function (char){
        if (this.setLetter === char){
            this.guess = true;
            return true;        
        }
        else {
            return false;
        }
    }
}

module.exports = UserGuesses;

/*  Use below code to test the above
// use keyword "new" to create a new instance of a constructor object
var letter = new UserGuesses ("a");
console.log(letter.userInput("a"));
console.log(letter.display());
*/
