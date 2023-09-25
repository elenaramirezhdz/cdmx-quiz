const questions = [
    {
        question: 'What are the best touristic zones in Mexico City?',
        answers: [
            { text: 'Polanco, Coyacan, Lomas de Bezares', correct: false },
            { text: 'Roma Norte, Condesa, Polanco, Coyacan', correct: true },
            { text: 'Oasis, Tacuba, Padierna, Polanco', correct: false },
            { text: 'Iztaccihuatl, Bosque de las Lomas', correct: false },
        ]
    },
    {
        question: 'What is a famous cafe and a book shop in CDMX?',
        answers: [
            { text: 'Peltre', correct: false },
            { text: 'Terra Garrat', correct: false },
            { text: 'Pendulo', correct: true },
            { text: 'Mague Cafe', correct: false },
        ]
    },
    {
        question: 'What are the names of the book shops in CDMX?',
        answers: [
            { text: 'Gandhi, Peltre', correct: false },
            { text: 'Sotano, Gandhi', correct: true },
            { text: 'Frida Kahlo, Garibaldi', correct: false },
            { text: 'Sears, Soriana', correct: false },
        ]
    },
    {
        question: 'What is one of the famous universities that has its own university city in CDMX? ',
        answers: [
            { text: 'Colmex', correct: false },
            { text: 'UNAM', correct: true },
            { text: 'ITAM', correct: false },
            { text: 'ITESM', correct: false },
        ]
    },
    {
        question: 'What is the famous Mariachi square in CDMX?',
        answers: [
            { text: 'Garibaldi', correct: true },
            { text: 'Jamaica', correct: false },
            { text: 'Condesa', correct: false },
            { text: 'Juarez', correct: false },
        ]
    },
    {
        question: 'What is the name of the park where there are many dance classes on weekends?',
        answers: [
            { text: 'Parque España', correct: false },
            { text: 'Parque México', correct: true },
            { text: 'Parque Hundido', correct: false },
            { text: 'Xochimilco', correct: false },
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const totalAnsweredElement = document.getElementById('total-answered');

let currentQuestionIndex = 0;
let score = 0;
let totalAnswered = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    totalAnswered = 0;
    setNextQuestion();
}

function setNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        resetButtonColors();
        displayAnswers(currentQuestion.answers);
    } else {
        // Quiz is over
        alert('Quiz completed! Your score: ' + score + '/' + questions.length);
        startGame();
    }
}

function resetButtonColors() {
    const buttons = Array.from(answerButtons.children);
    buttons.forEach(button => {
        button.style.backgroundColor = ''; // Reset button background color
        button.disabled = false;
    });
}

function displayAnswers(answers) {
    const buttons = Array.from(answerButtons.children);
    buttons.forEach((button, index) => {
        button.innerText = answers[index].text;
        button.onclick = () => checkAnswer(answers[index].correct, button);
    });
}

function checkAnswer(isCorrect, button) {
    totalAnswered++;
    if (isCorrect) {
        score++;
        button.style.backgroundColor = '#16a184'; // Correct answer background color green
        button.style.color = 'white'; // Change text color to white
    } else {
        button.style.backgroundColor = '#e32d3c'; // Incorrect answer background color red
        button.style.color = 'white'; // Change text color to white
    }

    button.disabled = true; // Disable the button after answering

    scoreElement.innerText = score;
    totalAnsweredElement.innerText = totalAnswered;
    currentQuestionIndex++;
    setTimeout(setNextQuestion, 1000); // Delay to show the correct/incorrect colors
}

startGame(); // Start the game when the page loads