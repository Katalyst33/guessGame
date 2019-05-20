let randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById('answer').innerHTML = randomNumber;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = document.getElementById('.guessCount');



let correctGuess = 0;
// correctGuess = document.getElementById('correctGuess');


 guessCount = 1;

let resetButton;
guessField.focus();

// run function with enter key
guessField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});



function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {

        guesses.textContent = 'previous guesses: ';
    }

    guesses.textContent += userGuess + '  ';

    if (userGuess === randomNumber) {


        // correctGuess.textContent = '60';
        lastResult.textContent = 'congratulations! you got it!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = ' ';
        correctGuess +=1 ;

        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER !!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';

        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'last guess was too high';
        }

    }
    guessCount.textContent = guessCount;

    guessCount++;
    guessField.value = ' ';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.add('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++){
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;

}

