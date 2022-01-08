'use strict';

//* using DOM manipulation

// ? initiliazations
const correctValueStr = 'Correct Answer';
const keepGuessingStr = 'Keep Guessing';
const startGuessingStr = 'Start Guessing';
const tryAgainStr = 'Try Again';
const correctGuess = Math.floor(Math.random() * 20 + 1);
console.log(correctGuess);
let currentScore = 20;
let highestScore = 0;

// * DOM initiliazations
const classMessageDOM = document.querySelector('.message');
const classScoreDOM = document.querySelector('.score');
const classHighestScoreDOM = document.querySelector('.highscore');
const classNumberDOM = document.querySelector('.number');

// ? Btn initializations
const checkBtnDOM = document.querySelector('.check');
const againBtnDOM = document.querySelector('.again');

// ! disabling again btn
againBtnDOM.disabled = true;
// * enabling the check button
checkBtnDOM.disabled = false;

// ! reading value from input
const inputTagDOM = document.querySelector('.guess');

const inputClickHandler = () => {
    const inputValue = Number(inputTagDOM.value);
    if (correctGuess === inputValue) {
        // true
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        classMessageDOM.textContent = correctValueStr;
        classNumberDOM.textContent = correctGuess;
        if (highestScore < currentScore) {
            highestScore = currentScore;
            classHighestScoreDOM.textContent = highestScore;
        }

        // * enabling the again button
        againBtnDOM.disabled = false;
        // ! disabling the check button
        checkBtnDOM.disabled = true;
    } else {
        // false
        currentScore = currentScore - 1;
        console.log(currentScore);
        classScoreDOM.textContent = currentScore;
        classMessageDOM.textContent = keepGuessingStr;
        inputTagDOM.value = '';

        if (currentScore === 0) {
            // * enabling the again button
            classNumberDOM.textContent = correctGuess;
            classMessageDOM.textContent = tryAgainStr;
            document.querySelector('body').style.backgroundColor = '#CC0000';
            classNumberDOM.style.width = '30rem';
            againBtnDOM.disabled = false;
            // ! disabling the check button
            checkBtnDOM.disabled = true;
        }
    }
};

const restartGame = () => {
    // restart the game
    inputTagDOM.value = '';
    currentScore = 20;
    classScoreDOM.textContent = currentScore;
    classMessageDOM.textContent = startGuessingStr;
    console.log('again button clicked');
    // ! disabling the again button
    againBtnDOM.disabled = true;
    // * enabling the check button
    checkBtnDOM.disabled = false;

    // styles
    document.querySelector('body').style.backgroundColor = '#222';
    classNumberDOM.textContent = '?';
};

checkBtnDOM.addEventListener('click', inputClickHandler);
againBtnDOM.addEventListener('click', restartGame);
