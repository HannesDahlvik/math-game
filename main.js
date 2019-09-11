let game = document.getElementById('game');

const questionCountDisplay = document.getElementById('questionCounter');

let questionNumber = 0;
const numberOfQuestions = 10;

let question = document.getElementById('question');

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');

randomNumber1 = (Math.floor(Math.random() * 100))
randomNumber2 = (Math.floor(Math.random() * 100))

let rightCounter = 0;
let wrongCounter = 0;

questionCountDisplay.innerHTML = questionNumber + ' / ' + numberOfQuestions

let array = [number1, number2, number3, number4];

function resetNumbers() {
    number1.innerHTML = (Math.floor(Math.random() * 100))
    number2.innerHTML = (Math.floor(Math.random() * 100))
    number3.innerHTML = (Math.floor(Math.random() * 100))
    number4.innerHTML = (Math.floor(Math.random() * 100))

    randomNumber1 = (Math.floor(Math.random() * 100))
    randomNumber2 = (Math.floor(Math.random() * 100))

    question.innerHTML = randomNumber1 + ' + ' + randomNumber2

    array[Math.floor(Math.random() * 4)].innerHTML = answer(randomNumber1, randomNumber2);

    questionCountDisplay.innerHTML = questionNumber + ' / ' + numberOfQuestions

    console.log(answer(randomNumber1, randomNumber2));
}
resetNumbers();

function answer(randomNumber1, randomNumber2) {
    return randomNumber1 + randomNumber2;
}

number1.addEventListener('click', guess);
number2.addEventListener('click', guess);
number3.addEventListener('click', guess);
number4.addEventListener('click', guess);

let result = document.getElementById('result');
let resultText = document.getElementById('resultText');
let playAgain = document.getElementById('playAgain');
let helperText = document.getElementById('helperText');

result.style.display = 'none';

playAgain.addEventListener('click', playAgainFunction)

function playAgainFunction() {
    rightCounter = 0;
    wrongCounter = 0;
    questionNumber = 0;
    game.style.display = 'block';
    result.style.display = 'none';
    resetNumbers();
}

function guess() {
    if (questionNumber === numberOfQuestions) {
        game.style.display = 'none'
        result.style.display = 'block'
        resultText.innerHTML = 'You got ' + rightCounter + ' out of ' + numberOfQuestions;

        if (rightCounter >= 4) {
            helperText.innerHTML = 'Good!';
        } else {
            helperText.innerHTML = 'Mayby you need some more practice.';
        }
    }

    if (parseInt(event.target.innerHTML) === answer(randomNumber1, randomNumber2)) {
        rightCounter += 1;
        questionNumber += 1;
        resetNumbers();

    } else {
        wrongCounter += 1;
        questionNumber += 1;
        resetNumbers();
    }
}