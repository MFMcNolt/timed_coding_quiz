document.addEventListener("DOMContentLoaded", function () {

var questions = [
  {
    question: "Which of the following is not a JavaScript Data type?",
    answers: [
      "Number",
      "String",
      "Bootleg",
      "Object",
      "Undefined"
    ],
    correctAnswer: "Bootleg"
  },
  {
    question: "Arrays in JavaScript can be used to store...?",
    answers: [
      "Seeds",
      "Noise",
      "Numbers",
      "Links"
    ],
    correctAnswer: "Numbers"
  },
  {
    question: "Inside what HTML tag would you put JavaScript code?",
    answers: [
      "js",
      "scripting",
      "script",
      "javascript"
    ],
    correctAnswer: "script"
  },
  {
    question: "When you don't assign a value to a variable it will be?",
    answers: [
      "null",
      "undefined",
      "'()'",
      "NaN"
    ],
    correctAnswer: "undefined"
  },
  {
    question: "What does 'DOM' stand for in JavaScript?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Dynamic Object Manipulation"
    ],
    correctAnswer: "Document Object Model"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      "variable",
      "var",
      "declare",
      "let"
    ],
    correctAnswer: "var"
  },
  {
    question: "What is the result of the expression '2' + 2 in JavaScript?",
    answers: [
      "4",
      "22",
      "2 + 2",
      "TypeError"
    ],
    correctAnswer: "22"
  },
  {
    question: "Which JavaScript function is used to parse a JSON string?",
    answers: [
      "JSON.parse()",
      "parseJSON()",
      "stringifyJSON()",
      "jsonify()"
    ],
    correctAnswer: "JSON.parse()"
  },
  {
    question: "What is the purpose of the 'addEventListener' method in JavaScript?",
    answers: [
      "To add styles to an element",
      "To append a new element to the DOM",
      "To attach an event handler to an element",
      "To create a new JavaScript object"
    ],
    correctAnswer: "To attach an event handler to an element"
  }
];




// DOM Elements
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers");
const timerElement = document.getElementById("time-left");
const highscoresContainer = document.getElementById("highscores-container");
const finalScore = document.getElementById("final-score");
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");

// Other Variables
let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 60;
let score = 0;

// Function to start the quiz
function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
  setNextQuestion();
  startTimer();
}

// Function to display the next question
function setNextQuestion() {
  if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      questionText.innerText = question.question;
      answersList.innerHTML = "";

      question.answers.forEach(answer => {
          const answerItem = document.createElement("li");
          answerItem.innerText = answer;
          answerItem.addEventListener("click", () => checkAnswer(answer));
          answersList.appendChild(answerItem);
      });
  } else {
      endQuiz();
  }
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correct) {
      score++;
  } else {
      timeLeft -= 10;
  }

  currentQuestionIndex++;
  setNextQuestion();
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.innerText = timeLeft;

      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          endQuiz();
      }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  highscoresContainer.style.display = "block";
  finalScore.innerText = score;
}

// Event Listener for the "Start Quiz" button
startButton.addEventListener("click", startQuiz);

// Event Listener for the initials form submission
initialsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const initials = initialsInput.value.trim().toUpperCase(); // Retrieve initials from the input field

  if (initials !== "") {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score });
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Optionally, you can redirect to the high scores page after submitting
    window.location.href = "highscores.html";
  }

});
});