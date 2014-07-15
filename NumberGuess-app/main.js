function yourGuess() {
    guess = document.getElementById("guess").value;
    yourGuesses = document.getElementById("results");

    if (guess == numToGuess) {
        yourGuesses.value = yourGuesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        yourGuesses.value = yourGuesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        yourGuesses.value = yourGuesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}
    
function giveUpShowAnswer() {
    document.getElementById('numberToGuess').value = numToGuess;
    document.getElementById('showAnswer').style.visibility = 'visible';

}

var numToGuess = Math.floor(Math.random()*100);
