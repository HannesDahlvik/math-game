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

let array = [number1, number2, number3, number4];

function questionFunction() {
    function answer(randomNumber1, randomNumber2) {
        return randomNumber1 + randomNumber2;
    }

    array[Math.floor(Math.random() * 4)].innerHTML = answer(randomNumber1, randomNumber2);

    question.innerHTML = randomNumber1 + ' + ' + randomNumber2

    console.log(answer(randomNumber1, randomNumber2));
}
questionFunction();