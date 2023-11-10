
let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault;
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number more than 1');
    }else if(guess > 100){
        alert('Please enter a number less than 100');
    }else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++
    remainingGuess.innerHTML = `${11-numGuess}`;

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function(e){
        randomNumber =  Math.round(Math.random() * 100 + 1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainingGuess.innerHTML = `${11- numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}