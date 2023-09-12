
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

Questions
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