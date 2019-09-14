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

randomNumber1 = (Math.floor(Math.random() * 100));
randomNumber2 = (Math.floor(Math.random() * 100));

let rightCounter = 0;
let wrongCounter = 0;

questionCounter.innerHTML = questionNumber + ' / ' + numberOfQuestions;

let array = [number1, number2, number3, number4];

function resetNumbers() {
    randomNumber1 = (Math.floor(Math.random() * 100));
    randomNumber2 = (Math.floor(Math.random() * 100));

    number1.innerHTML = (Math.floor(Math.random() * 200));
    number2.innerHTML = (Math.floor(Math.random() * 200));
    number3.innerHTML = (Math.floor(Math.random() * 200));
    number4.innerHTML = (Math.floor(Math.random() * 200));

    question.innerHTML = randomNumber1 + ' + ' + randomNumber2;

    array[Math.floor(Math.random() * 4)].innerHTML = answer(randomNumber1, randomNumber2);

    questionCounter.innerHTML = questionNumber + ' / ' + numberOfQuestions;

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

let playAgain = document.getElementById('playAgain');
let helperText = document.getElementById('helperText');
let column = document.getElementById('col');

let canvas = document.getElementById('myChart')

playAgain.style.display = 'none';
helperText.style.display = 'none';
column.style.display = 'none';

canvas.style.display = 'none';

let led = document.getElementById('led');

function guess(event) {
    if (parseInt(event.target.innerHTML) === answer(randomNumber1, randomNumber2)) {
        rightCounter += 1;
        resetNumbers();
        led.classList.add('animationPulseGreen');

        setTimeout(function () {
            led.classList.remove('animationPulseGreen')
        }, 500);
    } else {
        wrongCounter += 1;
        resetNumbers();
        led.classList.add('animationPulseRed')

        setTimeout(function () {
            led.classList.remove('animationPulseRed');
        }, 500)
    }

    if (questionNumber === numberOfQuestions) {
        setTimeout(function () {
            // resultText.innerHTML = 'You got ' + rightCounter + ' out of ' + numberOfQuestions;
            question.style.display = 'none';
            numbers.style.display = 'none';
            helperText.style.display = 'block';
            // resultText.style.display = 'block';
            column.style.display = 'block';
            playAgain.style.display = 'inline-block';
            led.style.display = 'none';
            canvas.style.display = 'block';

            if (rightCounter >= 4) {
                helperText.innerHTML = 'Good!';
            } else {
                helperText.innerHTML = 'Mayby you need some more practice.';
            }
        }, 500)

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Wrong', 'Right'],
                datasets: [{
                    label: 'Right / Wrong',
                    data: [wrongCounter, rightCounter],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });

        playAgain.addEventListener('click', destroyChart)

        function destroyChart() {
            myChart.destroy();
        }
    }

    questionNumber += 1;
}

playAgain.addEventListener('click', playAgainFunction)

function playAgainFunction() {
    rightCounter = 0;
    wrongCounter = 0;
    questionNumber = 1;
    resetNumbers();
    question.style.display = 'block';
    led.style.display = 'block';
    numbers.style.display = 'flex';
    helperText.style.display = 'none';
    // resultText.style.display = 'none';
    column.style.display = 'none';
    playAgain.style.display = 'none';
    canvas.style.display = 'none';
    // myChart.destroy();
}