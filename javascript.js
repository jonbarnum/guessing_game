'use strict';

// let firstName = prompt('What is your name?');
// let responseIntro = alert('Hello ' + firstName + '. Wecome to my site and I am excited for you to get to know me!!!');
// console.log(firstName);


document.getElementById ('buttonOne').onclick = function () {questionOne ()};

function questionOne () {
    let questionOne = prompt ('Yes or No: I live in Utah?');
    document.getElementById('buttonOne').innerHTML;
    // console.log(questionOne);
    if (questionOne.toLowerCase () === 'yes') {
        alert ('That is correct!!!');
    } else {
        alert ('Sorry that is incorrect.');
    }
}

document.getElementById ('buttonTwo').onclick = function () {questionTwo ()};

function questionTwo (){
    let questionTwo = prompt ('Yes or No: I have 4 kids?');
    document.getElementById ('buttonTwo').innerHTML;
    // console.log (questionTwo);
    if (questionTwo.toLowerCase () === 'yes') {
        alert ('You guessed correctly');
    } else {
        alert ('I am so sorry, that is not correct');
    }
}

document.getElementById ('buttonThree').onclick = function () {questionThree ()};

function questionThree (){
    let questionThree = prompt ('Yes or No: I have a degree in history?');
    document.getElementById ('buttonThree').innerHTML;
    // console.log (questionThree);
    if (questionThree.toLowerCase () === 'no'){
        alert ('Correct, you have been reading my bio!');
    } else {
        alert ('I\'m sorry, that is not correct, please reread my eduction');
    }
}

document.getElementById ('buttonFour').onclick = function () {questionFour ()};

function questionFour () {
    let questionFour = prompt ('Yes or No: I loved being a police officer?');
    document.getElementById ('buttonFour').innerHTML;
    // console.log (questionFour);
    if (questionFour.toLowerCase () === 'no') {
        alert ('You are absolutely right');
    } else {
        alert ('No, no I did not love being a police officer');
    }
}

document.getElementById ('buttonFive').onclick = function () {questionFive ()};

function questionFive () {
    let questionFive = prompt ('Yes or No: My favorite aspect of being a nurse was working nights?');
    document.getElementById ('buttonFive').innerHTML;
    // console.log (questionFive);
    if (questionFive.toLowerCase () === 'no') {
        alert ('100% correct!');
    } else {
        alert ('Nope, it was the worst');
    }
}

document.getElementById ('firstGuessingGame').onclick = function () {guessingGameOne ()};

function guessingGameOne (){
    let userGuess = prompt ('Guess a number between 1 and 50');
    document.getElementById ('firstGuessingGame').innerHTML;

    let correctAnswer = 33;
    let numberOfGuesses = 6

    for (let i = 1; i < numberOfGuesses; i++) {
        if (userGuess < correctAnswer) {
            userGuess = prompt ('Too Low, guess again');
        } else if (userGuess > correctAnswer){
            userGuess = prompt ('Too High, guess again');
        } else if (userGuess == correctAnswer){
            alert ('That\'s Correct');
            break;
        }
        if (i >= 5){
            alert ('You didn\'t guess the correct answer. The correct answer is 33');
        }
    }
}

