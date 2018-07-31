
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    

    //when the document is ready and loaded, run the function
      $(document).ready(function() {
  

///////press any key to get started

////variables

//word list to choose randomly from
var words = ["SEAHORSE", "STARFISH", "BEACHES", "BARNACLE", "OCTOPUS", "STINGRAY", "NARWHAL"];
//empty string, will be filled by the word chosen by the random word formula
var chosenWord="";
//empty array, to be filled with the letters of the chosen word by breaking it down into indiviual items (letters) of the array (word)
var lettersInChosenWord=[];
//until the number of items (letters) in the array (word) are known, the number of blanks will be 0
var numBlanks=0;
//empty array for the blanks (unguessed) and successes (letters guessed)
var blanksAndSuccesses=[];
//empty array for the incorrect letters guessed
var wrongGuesses=[];
//empty string to be filled by the letter guessed
var letterGuessed="";
//the number of wins starts at 0
var winCounter=0;
//the number of guesses allowed starts at 9
var numGuesses=9;

//function that runs the start of the game
function startGame() {

    //when the function runs, reset the number of guesses allowed to 9
    numGuesses = 9 
    //randomly choose a word from the words list
    chosenWord = words[Math.floor(Math.random() * words.length)];
    //have computer look at chosen word as a string of letters
    lettersInChosenWord = chosenWord.split("");
    //set the number of blanks equal to number of letters in word
    numBlanks === lettersInChosenWord.length;
    //console log the chosen word
    console.log(chosenWord);
    //empty array to put the unguessed and correct guesses for the word
    blanksAndSuccesses = [];
    //empty array to put the wrong guesses
    wrongGuesses = [];

    //push a _ for every letter in the word, when it gets to a number equal to the letters in the word, stop
    for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  //console log the spaces and correct letters
  console.log(blanksAndSuccesses);
  //replace the data in the "guesses -left" panel (in this case nothing) with the number of guesses left
  document.getElementById("guesses-left").innerHTML = numGuesses;
  //replace the data in the "word-blanks" html panel  with blanks and correct guesses, join all of them into one string
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  //replace data in the "wrong-guesses" html panel with the wrong letter guesses, join them all into one string
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


  //function to check if a letter is in the word
function checkLetters(letter) {
    //unless otherwise stated, the letter is wrong
    var letterInWord = false;
    //scroll though and check every letter in the word until the end
    for (var i = 0; i < numBlanks; i++) {
        //if one of the items in the array in the string of the word (one of the letters) is the same a the letter chosen, then the letter is in the word
    if (chosenWord[i] === letter) {
        letterInWord = true;
    }
  }
    //if it scrolls through all of the letters in the chosen word and one of the letters is the same as the letter chosen, then that letter goes into the blanks and successes array
     if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksAndSuccesses[j] = letter;
      }
    }
    //console log the blanks and successes
    console.log(blanksAndSuccesses);
  }


  //if the letter chosen does not match any of the letters in the word, push the letter into the wrongGuesses html panel and reduce the number of guesses by 1
  else {
    wrongGuesses.push(letter);
    numGuesses--;

}

}

//function for after a letter is chosen, to either end the game or keep repeating function until the game is over
function roundComplete() {
    //console log the number of wins and guesses
    console.log("WinCount: " + winCounter | "NumGuesses " + numGuesses);
    //replace the data inside the "guesses-left" html panel with number of guesses left
    document.getElementById("guesses-left").innerHTML = numGuesses;
    //replace the data inside the "word-blanks" html panel with the blanks and correct letters guessed and join them into a single string
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    //replace the data inside the "wrong-guesses" html panel with the incorrect letters guessed and join them into a single string
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //if the string lettersInChosenWord is the same as the string blanks AndSuccesses (in other words if all of the letters have been chosen correctly and appear in the blanksAndSuccess string it will be the same as the chosen word, and the entire word will have been correctly guessed)
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        //add 1 win to the winCounter
        winCounter++;
        //alert that they win
        alert("You win!");
        //show in the "win-counter" html panel what the number of wins is now
        document.getElementById("win-counter").innerHTML = winCounter;
        //run the start game function again
        startGame();
    }

    //otherwise, if all of the letters in the word have not been guessed correctly, and the number of guesses left is now equal to 0
    else if (numGuesses === 0) {

        //alert that they lose and run the start game function again
        alert("You lose");
        startGame();
    }

}

//function to start the game
startGame();
//when the key pressed goes up, do the following:
document.onkeyup = function(event) {
    //change the letter chosen to lower case (only really needed if they typed in a capital), so that the computer recognizes that it is one of the letter choices
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    //run the checkLetters function from before
    checkLetters(letterGuessed);
    //run the roundComplete function from before
    roundComplete();
};
}


//This was my code from before.  It was a mess.  I was trying to adapt code from previous assignments, but some of it was jQuery and I'm not sure I was even formatting it correctly
//var numWrong = 0;
//var numChar = 0;
//var wins = 0
//var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var wordSpaces = ""
//var getRandomWord = function () {
    //return words[Math.floor(Math.random() * words.length)];
    //$("#wordBox").html(this);

    //};

//document.onkeyup=function(event) {

//getRandomWord()
//}

//$(".letter").click(function() {

    //if ($(this).attr("value"))

 
//letterChoices=$(this).attr("value");


//START when press any key

//$(".number").on("click", function() {


//Randomly choose a word


//var wordFunc =function () {



//}



