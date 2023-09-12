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

// HTML structure for a question container
var questionContainer = document.createElement("quizDiv");
questionContainer.classList.add("question-container");

// Sample questions and answers (you can replace this with your actual data)
var question = [{
    Q: "Which of the following is not a JavaScript Data type?";
    A: [{Text: "Number", isCorrect: false};
    {Text: "String", isCorrect: false};
    {Text: "Bootleg", isCorrect: true};
    {Text: "Object", isCorrect: false};
    {Text: "Undefined", isCorrect: false};
    ]};
    {
    Q: "Arrays in JavaScript can be used to store...?";
    A: [{Text: "Seeds", isCorrect: false};
    {Text: "Noise", isCorrect: false};
    {Text: "Numbers", isCorrect: true};
    {Text: "Links", isCorrect: false};
    ]};
    {
    Q: "Inside what HTML tag would you put JavaScript code?";
    A: [{Text: "js", isCorrect: false};
    {Text: "scripting", isCorrect: false};
    {Text: "script", isCorrect: true};
    {Text: "javascript", isCorrect: false};
    ]};
    {
    Q: "When you dont assign a value to a variable it will be?";
    A: [{Text: "null", isCorrect: false};
    {Text: "undefined", isCorrect: true};
    {Text: "'()'", isCorrect: false};
    {Text: "NaN", isCorrect: false};
    ]};
];

// Function to display a question
function displayQuestion(question) {
  // Create question element
  var questionElement = document.createElement("p");
  questionElement.textContent = question.question;

  // Create answer options
  var answerList = document.createElement("ul");
  question.answers.forEach(function (answer) {
    var answerItem = document.createElement("li");
    answerItem.textContent = answer;
    answerList.appendChild(answerItem);
  });

  // Add question and answers to the container
  questionContainer.innerHTML = "";
  questionContainer.appendChild(questionElement);
  questionContainer.appendChild(answerList);

  // Append the question container to your HTML where you want to display it
  var questionsDiv = document.querySelector(".questionsDiv");
  questionsDiv.appendChild(questionContainer);
}

// Function to start the quiz
function startQuiz() {
  var startDiv = document.querySelector(".startDiv");
  startDiv.classList.add("hide");

  // Display the first question (you can use a counter to keep track of the current question)
  displayQuestion(questions[0]);
}

// Attach a click event listener to the start button
startButton.addEventListener("click", startQuiz);































/*timer
var timeLeft = 60;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  }
}
*/

/*Quiz function
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
*/

// Questions
var Questions = [{
    Q: "Which of the following is not a JavaScript Data type?";
    A: [{Text: "Number", isCorrect: false}
    {Text: "String", isCorrect: false}
    {Text: "Bootleg", isCorrect: true}
    {Text: "Object", isCorrect: false}
    {Text: "Undefined", isCorrect: false}
    ]}
    {
    Q: "Arrays in JavaScript can be used to store...?";
    A: [{Text: "Seeds", isCorrect: false}
    {Text: "Noise", isCorrect: false}
    {Text: "Numbers", isCorrect: true}
    {Text: "Links", isCorrect: false}
    ]}
    {
    Q: "Inside what HTML tag would you put JavaScript code?";
    A: [{Text: "js", isCorrect: false}
    {Text: "scripting", isCorrect: false}
    {Text: "script", isCorrect: true}
    {Text: "javascript", isCorrect: false}
    ]}
    {
    Q: "When you dont assign a value to a variable it will be?";
    A: [{Text: "null", isCorrect: false}
    {Text: "undefined", isCorrect: true}
    {Text: "'()'", isCorrect: false}
    {Text: "NaN", isCorrect: false}
    ]}
]