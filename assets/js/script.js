var startBtn = document.getElementById('welcome');
var timerEl = document.getElementById('countdown');
var quizBox = document.getElementById('quiz-box');
// var questionNumber = 0;
// var questionElement = document.getElementById('que-text');
// var answerButtonsElement = document.getElementbyId('answer-buttons');
// var score = 0;
// var userScore = [];
// var answer = "";

let shuffledQuestions, currentQuestionIndex

// var questions = [
//     {q:"Commonly used data types Do Not include:", ans: ["1. Strings", "2. booleans", "3. alerts", "4. numbers"]},
//     {q:"The condition in an if/else statement is enclosed with <span>   </span>. ", ans: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]},
//     {q:"Arrays in javascript can be used to store <span>   </span>.", ans: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]},
//     {q:"String values must be enclosed within <span>   </span> when being assigned to variables.", ans: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]},
//     {q:"A very useful tool used during development and debugging for printing content to the debugger is: ", ans: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"]}

// ];

// var correctAnswer = [
//     {q:0, a:"3. alerts"},
//     {q:1, a:"3. parenthesis"},
//     {q:2, a:"4. all of the above"},
//     {q:3, a:"3. quotes"},
//     {q:4, a:"4. console.log"}

// ];


// //Array of objects for question and answer
// var questions = [
//     {
//         question:"Commonly used datatypes do not include:",
//         answer: [
//             {"Strings", correct: false},
//             {"Booleans", correct: false}, 
//             {"Alerts", correct: true},
//             {"Numbers", correct: false}
//         ]
//     },

//     {
//         question:"The condition in an if/else statement is enclosed with... ", 
//         answer: [
//             {"Quotes", correct: false},
//             {"Curly brackets", correct: false},
//             {"Parenthesis", correct: true},
//             {"Square brackets", correct: false},
//         ]
//     },

//     {
//         question:"Arrays in javascript can be used to store...", 
//         answer: [
//             {"Numbers and strings", correct: false},
//             {"Other arrays", correct: false},
//             {"Booleans", correct: false},
//             {"All of the above", correct: true}
//         ]
//     },

//     {
//         question:"String values must be enclosed within... when being assigned to variables.", 
//         answer: [
//             {"Commas", correct: false},
//             {"Curly brackets", correct: false},
//             {"Quotes", correct: true},
//             {"Parenthesis", correct: false}
//         ]
//     },

//     {
//         question:"A very useful tool used during development and debugging for printing content to the debugger is: ", 
//         answer: [
//             {"Javascript", correct: false},
//             {"Terminal/bash", correct: false},
//             {"For loops", correct: false},
//             {"Console.log", correct: true}
//         ]
//     }

// ];

// var correctAnswer = [
//     {q:0, a:"3. alerts"},
//     {q:1, a:"3. parenthesis"},
//     {q:2, a:"4. all of the above"},
//     {q:3, a:"3. quotes"},
//     {q:4, a:"4. console.log"}

// ];

//Star Quiz

startBtn.addEventListener("click", startQuiz)

//Function to start the quiz and loop until all questions are answered
function startQuiz(){
    console.log('Started');
    startBtn.classList.add('hide');
    // shuffledQuestions = question.sort(() => Math.random() - .5)
    // currentQuestionIndex = 0
    quizBox.classList.remove('hide');
    // showQuestion()


    // Timer that counts down from 60
function countdown() {
    var timeLeft = 60;
  
// Use the `setInterval()` method to have count down decrement by 1000 milliseconds
  var timeInterval = setInterval(function() {
    
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = 'Times Up!';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

countdown();

}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    })
}

function selectAnswer(){

}



