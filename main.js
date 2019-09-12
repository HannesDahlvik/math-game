let game = document.getElementById('game');

const questionCounter = document.getElementById('questionCounter');

let questionNumber = 1;
const numberOfQuestions = 10;

let question = document.getElementById('question');

let numbers = document.getElementById('numbers');

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');

randomNumber1 = (Math.floor(Math.random() * 100))
randomNumber2 = (Math.floor(Math.random() * 100))

let rightCounter = 0;
let wrongCounter = 0;

questionCounter.innerHTML = questionNumber + ' / ' + numberOfQuestions

let array = [number1, number2, number3, number4];

function resetNumbers() {
    number1.innerHTML = (Math.floor(Math.random() * 200))
    number2.innerHTML = (Math.floor(Math.random() * 200))
    number3.innerHTML = (Math.floor(Math.random() * 200))
    number4.innerHTML = (Math.floor(Math.random() * 200))

    randomNumber1 = (Math.floor(Math.random() * 100))
    randomNumber2 = (Math.floor(Math.random() * 100))

    question.innerHTML = randomNumber1 + ' + ' + randomNumber2

    array[Math.floor(Math.random() * 4)].innerHTML = answer(randomNumber1, randomNumber2);

    questionCounter.innerHTML = questionNumber + ' / ' + numberOfQuestions

    console.log(answer(randomNumber1, randomNumber2))
}
resetNumbers();

function answer(randomNumber1, randomNumber2) {
    return randomNumber1 + randomNumber2;
}

number1.addEventListener('click', guess);
number2.addEventListener('click', guess);
number3.addEventListener('click', guess);
number4.addEventListener('click', guess);

let resultText = document.getElementById('resultText');
let playAgain = document.getElementById('playAgain');
let helperText = document.getElementById('helperText');
let column = document.getElementById('col');

resultText.style.display = 'none';
playAgain.style.display = 'none';
helperText.style.display = 'none';
column.style.display = 'none';

playAgain.addEventListener('click', playAgainFunction)

function playAgainFunction() {
    rightCounter = 0;
    wrongCounter = 0;
    questionNumber = 1;
    resetNumbers();
    question.style.display = 'block';
    numbers.style.display = 'flex';
    helperText.style.display = 'none';
    resultText.style.display = 'none';
    column.style.display = 'none';
    playAgain.style.display = 'none';
}

function guess(event) {
    if (parseInt(event.target.innerHTML) === answer(randomNumber1, randomNumber2)) {
        rightCounter += 1;
        resetNumbers();
    } else {
        wrongCounter += 1;
        resetNumbers();
    }

    if (questionNumber === numberOfQuestions) {
        resultText.innerHTML = 'You got ' + rightCounter + ' out of ' + numberOfQuestions;
        question.style.display = 'none';
        numbers.style.display = 'none';
        helperText.style.display = 'block';
        resultText.style.display = 'block';
        column.style.display = 'block';
        playAgain.style.display = 'inline-block';

        if (rightCounter >= 4) {
            helperText.innerHTML = 'Good!';
        } else {
            helperText.innerHTML = 'Mayby you need some more practice.';
        }
    }

    questionNumber += 1;
}