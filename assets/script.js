// The start button appear, with question hidden

// click start button
//  which hide intro to quiz, 
//  show first question, 
//  start TimeR

// listen to answering the question

var startButton = document.querySelector ("#startButton")

startButton.addEventListener ("click", function(){
  var startDiv = document.querySelector (".startDiv");
  startDiv.classList.add ("hide");
})

// Questions and answers
var questions = [
  {
      Q: "Which of the following is not a JavaScript Data type?",
      A: [
          { Text: "Number", isCorrect: false },
          { Text: "String", isCorrect: false },
          { Text: "Bootleg", isCorrect: true },
          { Text: "Object", isCorrect: false },
          { Text: "Undefined", isCorrect: false }
      ]
  },
  {
      Q: "Arrays in JavaScript can be used to store...?",
      A: [
          { Text: "Seeds", isCorrect: false },
          { Text: "Noise", isCorrect: false },
          { Text: "Numbers", isCorrect: true },
          { Text: "Links", isCorrect: false }
      ]
  },
  {
      Q: "Inside what HTML tag would you put JavaScript code?",
      A: [
          { Text: "js", isCorrect: false },
          { Text: "scripting", isCorrect: false },
          { Text: "script", isCorrect: true },
          { Text: "javascript", isCorrect: false }
      ]
  },
  {
      Q: "When you don't assign a value to a variable it will be?",
      A: [
          { Text: "null", isCorrect: false },
          { Text: "undefined", isCorrect: true },
          { Text: "'()'", isCorrect: false },
          { Text: "NaN", isCorrect: false }
      ]
  },
  {
      Q: "What does 'DOM' stand for in JavaScript?",
      A: [
          { Text: "Document Object Model", isCorrect: true },
          { Text: "Data Object Model", isCorrect: false },
          { Text: "Document Oriented Model", isCorrect: false },
          { Text: "Dynamic Object Manipulation", isCorrect: false }
      ]
  },
  {
      Q: "Which keyword is used to declare a variable in JavaScript?",
      A: [
          { Text: "variable", isCorrect: false },
          { Text: "var", isCorrect: true },
          { Text: "declare", isCorrect: false },
          { Text: "let", isCorrect: false }
      ]
  },
  {
      Q: "What is the result of the expression '2' + 2 in JavaScript?",
      A: [
          { Text: "4", isCorrect: false },
          { Text: "22", isCorrect: true },
          { Text: "2 + 2", isCorrect: false },
          { Text: "TypeError", isCorrect: false }
      ]
  },
  {
      Q: "Which JavaScript function is used to parse a JSON string?",
      A: [
          { Text: "JSON.parse()", isCorrect: true },
          { Text: "parseJSON()", isCorrect: false },
          { Text: "stringifyJSON()", isCorrect: false },
          { Text: "jsonify()", isCorrect: false }
      ]
  },
  {
      Q: "What is the purpose of the 'addEventListener' method in JavaScript?",
      A: [
          { Text: "To add styles to an element", isCorrect: false },
          { Text: "To append a new element to the DOM", isCorrect: false },
          { Text: "To attach an event handler to an element", isCorrect: true },
          { Text: "To create a new JavaScript object", isCorrect: false }
      ]
  }
];

// Global variables
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers");
const timerElement = document.getElementById("time-left");
const initialsForm = document.getElementById("initials-form");
const finalScoreElement = document.getElementById("final-score");

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;
let timerInterval;