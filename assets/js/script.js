const questionContainerElement = document.getElementById('game-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Scores variable
const numberAnswered = document.getElementById('total-answered');
const scoreBoard = document.getElementById('score');
let totalAnswered = 0;
let score = 0;
scoreBoard.innerHTML = score;
numberAnswered.innerHTML = totalAnswered;

//variable to check the questions 
let questionAnswered = false;

let shuffledQuestions, currentQuestionIndex;

/*Bringing a question from the array and setting its text and creating the option buttons
with the right text-content and the "correct" dataset to let you know if the answer is correct*/
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });


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
                { text: 'Frida Cahlo, Garibaldi', correct: false },
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
        },;