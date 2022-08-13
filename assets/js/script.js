var timerEl = document.getElementById("timer");
var viewScoresEl = document.getElementById("viewScores");
var introEl = document.getElementById("intro");
var questionsEl = document.getElementById("questions");
var scoreEl = document.getElementById("score");
var highScoresEl = document.getElementById("highScores");
var startEl = document.getElementById("start");

var timeLeft = 60;

// Suppress all content other than intro page
function displayIntroduction() {
    introEl.style.display = "";
    questionsEl.style.display = "none";
    scoreEl.style.display = "none";
    highScoresEl.style.display = "none";
}

// Initalize quiz and countdown based on click event
startEl.addEventListener("click", displayQuestion);
startEl.addEventListener("click", countdown);

// Suppress all content other than question page, run through questions adding or subtracting time based on correct or incorrect answers
function displayQuestion() {

    introEl.style.display = "none";
    questionsEl.style.display = "";

    const questions = [
        {
            questionHeader: "Commonly used data types do NOT include:",
            questionList: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts",
        },
        {
            questionHeader: "The condition in an if / else statement is enclosed with ______.",
            questionList: ["quotes", "curly brackets", "parenthesis", "square brackets"],
            answer: "parenthesis",
        },
        {
            questionHeader: "Arrays in JavaScript can be used to store ______.",
            questionList: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: "all of the above",
        },
        {
            questionHeader: "String values must be enclosed within ______ when being assigned to variables.",
            questionList: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: "quotes",
        },
        {
            questionHeader: "A very useful tool used during development and debugging for printing content to the debugger is:",
            questionList: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            answer: "console.log",
        },
    ]

    for (let i = 0; i < questions.length; i++) {
        questionsEl.children[0].textContent = questions[i].questionHeader;
        for (let j = 0; j < questions[i].questionList.length; j++) {
            questionsEl.children[1].children[j].textContent = questions[i].questionList[j];
        }
        if ( choice === questions[i].answer) {
            timeLeft + 10;
        } else {
            timeLeft - 10;
        }
    }
}

// Move to next question, display correct or incorrect message based on click event

// Suppress all content other than display score page
function displayScore() {
    questionsEl.style.display = "none";
    scoreEl.style.display = "";
}

// Suppress all content other than high score page
function displayHighScores() {
    introEl.style.display = "none";
    questionsEl.style.display = "none";
    scoreEl.style.display = "none";
    highScoresEl.style.display = "";
}

// Creates timer countdown
function countdown() {

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
    
        if(timeLeft === 0) {
    
          clearInterval(timeInterval);
    
          // call function displayScore
          displayScore();
        }
    
    },1000);
}

displayIntroduction();