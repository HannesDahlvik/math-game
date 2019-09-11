let numberOfQuestions = document.getElementById('numberOfQuestions').innerHTML = '0/10';

let question = document.getElementById('question');

let randomNumber1 = (Math.floor(Math.random() * 100))
let randomNumber2 = (Math.floor(Math.random() * 100))

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');

number1.innerHTML = (Math.floor(Math.random() * 100))
number2.innerHTML = (Math.floor(Math.random() * 100))
number3.innerHTML = (Math.floor(Math.random() * 100))
number4.innerHTML = (Math.floor(Math.random() * 100))

number1.addEventListener('click', myFuncion);
number2.addEventListener('click', myFuncion);
number3.addEventListener('click', myFuncion);
number4.addEventListener('click', myFuncion);

let array = [number1, number2, number3, number4];

let rightCounter = 0;
let wrongCounter = 0;

function questionFunction() {
    array[Math.floor(Math.random() * 4)].innerHTML = answer(randomNumber1, randomNumber2);

    question.innerHTML = randomNumber1 + ' + ' + randomNumber2
}
questionFunction();

function answer(randomNumber1, randomNumber2) {
    return randomNumber1 + randomNumber2;
}

console.log(answer(randomNumber1, randomNumber2));

function myFuncion() {
    if (number1.innerHTML === answer) {
        rightCounter += 1;
    } else if (number2.innerHTML === answer) {
        rightCounter += 1;
    } else if (number3.innerHTML === answer) {
        rightCounter += 1;
    } else if (number4.innerHTML === answer) {
        rightCounter += 1;
    }
}

setInterval(function () {
    console.log(rightCounter);
}, 500);