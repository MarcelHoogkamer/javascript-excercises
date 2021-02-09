// TO DO: ON PAGELOAD, PICK A NUMBER (X) BETWEEN 1 AND 100 AND ASK THE USER TO GUESS
// ON EACH GUESS THE SCRIPT GIVES A HINT: LOWER OR HIGHER THAN THE GUESS (RELATED TO X)
// WHEN GUESSED RIGHT, IT ALERTS THAT'S IT! YOU NEEDED Y GUESSES)

(function() {

    // SET THE RANGE FOR THE RANDOM NUMBER, AND VARIABLES FOR THE GUESS AND GUESS COUNT (Y)
    let randomNumber = getRandomNumber(100);
    let guess;
    let y = 0;
    let correctGuess = false;

    // CREATE THE RANDOM NUMBER
    function getRandomNumber(upper) {
        let num = Math.floor(Math.random() * upper) + 1;
        return num;
    }

    // IN THE DO...WHILE LOOP, SET THE CONDITIONS TO PERFORM WITH A NESTED ELSE IF
    // THIS IS BECAUSE YOU NEED SEVERAL OPTIONS
    do {
        guess = prompt('Guess the number! Hint: it\'s between 1 and 100')
        y += 1;
        if (guess === null) {
            return;
        }
        else if (parseInt(guess) === randomNumber) {
            correctGuess = true;
        }
        else if(guess > randomNumber){
            y++;
            alert("try a smaller number")
        }
        else {
            y++;
            alert("try a bigger number")
        }

    // WHEN GUESSED RIGHT, ALERT A TEXT MESSAGE TO THE USER
    } while( !correctGuess )
    alert('That\'s it!' + 'You needed ' + y + ' guesses to find the number: ' + randomNumber)

})();
