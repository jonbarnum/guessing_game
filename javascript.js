'use strict';

let firstName = prompt('What is your name?');
let responseIntro = alert('Hello ' + firstName + '. Wecome to my site and I am excited for you to get to know me!!!');
console.log(firstName);

let score = 0;


document.getElementById ('buttonOne').onclick = function () {questionOne ()};

function questionOne () {
    let questionOne = prompt ('Yes or No: I live in Utah?');
    document.getElementById('buttonOne').innerHTML;
    // console.log(questionOne);
    if (questionOne.toLowerCase () === 'yes') {
        alert ('That is correct!!!');
        score++;
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
        score++;
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
        score++;
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
        score++;
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
        score++;
    } else {
        alert ('Nope, it was the worst');
    }
}

document.getElementById ('firstGuessingGame').onclick = function () {guessingGameOne ()};

function guessingGameOne (){
    let userGuess = prompt ('Guess a number between 1 and 50');
    document.getElementById ('firstGuessingGame').innerHTML;

    let correctAnswer = 33;
    let numberOfGuesses = 6;

    for (let i = 1; i < numberOfGuesses; i++) {
        if (userGuess < correctAnswer) {
            userGuess = prompt ('Too Low, guess again');
        } else if (userGuess > correctAnswer){
            userGuess = prompt ('Too High, guess again');
        } else if (userGuess == correctAnswer){
            alert ('That\'s Correct');
            score++;
            break;
        }
        if (i >= 5){
            alert ('You didn\'t guess the correct answer. The correct answer is 33');
        }
    }
}

document.getElementById ('secondGuessingGame').onclick = function () {guessingGameTwo ()};

function guessingGameTwo () {
    let soccerTeams = ['Real Salt Lake ', ' Barcelona ', ' Liverpool ', ' Chelsea ', ' FC Bayern Munic ', ' Southampton ', ' Millwall ', ' Sunderland ', ' Manchester United ', ' Manchester City ' , ' LA Galaxy ', ' Seattle Sounders ', ' BVB ', ' Valcenia ', ' Real Madrid '];
    document.getElementById ('secondGuessingGame').innerHTML;
    
    let answerArray = ['Real Salt Lake', 'Southampton'];
    let numOfGuesses = 7;
    let correctGuess = 0;
    
    while (numOfGuesses && correctGuess < 2){
        let guess = prompt ('Choose my favorite two soccer teams: ' + soccerTeams);
        numOfGuesses--;
        for (let i =0; i < answerArray.length; i++) {
            if (guess === answerArray[i]) {
                alert('You Guessed Right');
                correctGuess++;
                score++;
                if (correctGuess == 2) {
                    alert (`Out of 8 possible right answers you got: ${score}.`)
                    score = 0;
                    break;
                }
            } else if (i >= answerArray.length - 1) {
                alert ('You guessed wrong!');
            }
        }
    }

    if (!numOfGuesses) {
        alert ('Out of Guesses. Correct teams are Southampton and Real Salt Lake');
        alert (`Out of 8 possible right answers you got: ${score}.`);
        score = 0;
    }
}

