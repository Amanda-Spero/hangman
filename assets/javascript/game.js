const wordGuessGame = {

    wordsToPick: {
        tanzania: {
            picture: "tanzania.png",
        },

        argentina: {
            picture: "argentina.png",
        },

        luxembourg: {
            picture: "luxembourg.png",
        },

        madagascar: {
            picture: "madagascar.jpg",
        },

        pakistan: {
            picture: "pakistan.jpg",
        },

        netherlands: {
            picture: "netherlands.jpg",
        },

        malta: {
            picture: "malta.jpg",
            song: ""
        },

        venezuela: {
            picture: "venezuela.jpg",
        },

        guyana: {
            picture: "guyana.png",
        },

        suriname: {
            picture: "suriname.png",
        },

        barbados: {
            picture: "barbados.png",
        },

        montserrat: {
            picture: "montserrat.png",
        },

        belize: {
            picture: "belize.png",
        }
    },

    //  Set the initial state of the variables
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,
  
    //function for start of every game
    setupGame: function() {
        //pick a random word
        var objKeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        //split the word into its separate letters
        this.lettersOfTheWord = this.wordInPlay.split("");
        //create an underscore for each letter of the word
        this.rebuildWordView();
        //set number of guesses user gets
        this.processUpdateTotalGuesses();
    },

    //function for every time a letter is guessed
    updatePage: function(letter) {
        //if guesses left = 0 restart game
        if (this.guessesLeft === 0) {
            this.restartGame();
        }
        //otherwise
        else {
            //check for wrong guesses
            this.updateGuesses(letter);

            //check for correct guesses
            this.updateMatchedLetters(letter);

            //rebuild word view, show correctly guessed letters, underscore for not guessed
            this.rebuildWordView();

            //if the user wins, restart the game
            if (this.updateWins() === true) {
                this.restartGame();
            }
        }
    },

    //function for an incorrect guess
    updateGuesses: function(letter) {
        //if the guessed letter is not in the guessedLetters array or the lettersOfTheWord array
        if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {

            //add the letter to the guessedLetters array
            this.guessedLetters.push(letter);

            //decrease guesses by one
            this.guessesLeft--;

            //update the guesses remaining and guessed letters shown on the page
            document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
            document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
        }
    },

    //function to determine how many guesses a user gets
    processUpdateTotalGuesses: function() {
        //user gets the number of letters in the word + 5 guesses
        this.totalGuesses = this.lettersOfTheWord.length + 5;
        this.guessesLeft = this.totalGuesses;

        //render guesses left to the page
        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },

    //function for a correct guess
    updateMatchedLetters: function(letter) {
        //loop through all letters of the word
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            //if the letter is in the word and not guessed already
            if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                //push the letter into the matchedLetters array
                this.matchedLetters.push(letter);
            }
        }
    },

    //function to build the display of the word
    rebuildWordView: function() {
        var wordView = "";
        //loop through the letters
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {   
                     //if the letter has been guessed, show the letter
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
            wordView += this.lettersOfTheWord[i];
            }
                
            //if the letter has not been guessed, show an underscore 
            else {
                wordView += "&nbsp;_&nbsp;";
            }
        }
        //render the word view on the page
        document.querySelector("#current-word").innerHTML = wordView;

    },

    //function to restart the game and reset all of the variables
    restartGame: function() {
        document.querySelector("#guessed-letters").innerHTML = "";
        this.wordInPlay = null;
        this.lettersOfTheWord = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();
        this.rebuildWordView;
    },

    updateWins: function() {
        var win;

        //if no letters have been guessed then win = false
        if (this.matchedLetters.length === 0) {
            win = false;
        }
        //otherwise set win to true
        else {
            win = true;
        }
        //if a letter is in the word, but not in the matchedLetters array, win is set to false
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
                win = false;
            }
        }
        if (win) {
            //add one win 
            this.wins = this.wins + 1;
            //render number of wins on the page
            document.querySelector("#wins").innerHTML = this.wins;

            //update the image of the flag on the page
            document.querySelector("#flag-div").innerHTML = "<img class='flag-image' src='../images/" + this.wordsToPick[this.wordInPlay].picture + "'alt='" + [this.wordsToPick + "'>'"];

            
            //set win to true to restart the game in the updatePage function
            return true;
        }
        restartGame();

        //if win is false, return false to the updatePage function to continue the game
        return false;
    }
};

//initialize the game when the page loads
wordGuessGame.setupGame();

//function to set a pressed letter to lower case 
document.onkeyup = function(event) {
    wordGuessGame.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    //pass the letter into the updatePage function
    wordGuessGame.updatePage(wordGuessGame.letterGuessed);
};

