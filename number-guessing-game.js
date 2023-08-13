function runGame() {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let tryCount = 0;

    const randomNumber = Math.ceil(Math.random()*100);

    do {
        guessString = prompt('I am thinking of a number between 1 and 100.\n\nGuess the number: ');
        if (guessString === null) {
            return;
        }
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, randomNumber);
        tryCount++;
    } while(!correct);

    alert('You got it! The number was ' + randomNumber + '.\n\nIt took you ' + tryCount + ' tries to guess correctly.');

    function checkGuess(guessNumber, randomNumber) {
        if(isNaN(guessNumber)) {
            alert('You have not entered a number.\n\nPlease enter a number between 1 and 100.');
            return false;
        } else if (guessNumber < 1 || guessNumber > 100) {
            alert('Please enter an integer between 1 and 100.');
            return false;
        } else if (guessNumber < randomNumber) {
            alert('Your guess is too low...');
            return false;
        } else if (guessNumber > randomNumber) {
            alert('Your guess is too high...')
            return false;
        } else {
            return true;
        }
    }
}