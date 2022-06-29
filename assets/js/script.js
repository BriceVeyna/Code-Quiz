var timerEl = document.getElementById("timer");
var viewScoresEl = document.getElementById("viewScores");
var introEl = document.getElementById("intro");
var questionEl = document.getElementById("question");
var scoreEl = document.getElementById("score");
var highScoresEl = document.getElementById("highScores");
var startEl = document.getElementById("start");

var timeLeft = 60;

// Suppress all content other than intro page
function displayIntroduction() {
    introEl.style.display = "";
    questionEl.style.display = "none";
    scoreEl.style.display = "none";
    highScoresEl.style.display = "none";
}

// Initalize quiz and countdown based on click event
startEl.addEventListener("click", displayQuestion);
startEl.addEventListener("click", countdown);

// Suppress all content other than question page, run through questions adding or subtracting time based on correct or incorrect answers
function displayQuestion() {

    introEl.style.display = "none";
    questionEl.style.display = "";

    var questionHeaderMain = "";
    var questionListMain = ["", "", "", ""];
    var questionHeader = {
        1: "Commonly used data types do NOT include:",
        2: "The condition in an if / else statement is enclosed with ______.",
        3: "Arrays in JavaScript can be used to store ______.",
        4: "String values must be enclosed within ______ when being assigned to variables.",
        5: "A very useful tool used during development and debugging for printing content to the debugger is:"
    };
    var questionList = {
        1: ["strings", "booleans", "alerts", "numbers"],
        2: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        3: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        4: ["commas", "curly brackets", "quotes", "parenthesis"],
        5: ["JavaScript", "terminal/bash", "for loops", "console.log"]
    };

    // Count number of questions in question header object
    var questionTotal = 0;

    function totalProperties(obj) {
        for (var property in obj) {
            if(obj.hasOwnProperty(property))
            questionTotal++;
        }
    }

    totalProperties(questionHeader);
    console.log(questionTotal);

    // Iterate over number of questions,
    for (var i = 0; i < questionTotal; i++) {
        questionHeaderMain = questionHeader[1];
        console.log(questionHeaderMain);
        questionEl.children[0].textContent = questionHeaderMain;
        questionListMain = questionList[1];
        console.log(questionListMain);
        questionEl.children[1].textContent = questionListMain;
        if (answer === true) {
            timeLeft + 10;
        } else {
            timeLeft - 10;
        }
    }

}

// Move to next question, display correct or incorrect message based on click event

// Suppress all content other than display score page
function displayScore() {
    questionEl.style.display = "none";
    scoreEl.style.display = "";
}

// Suppress all content other than high score page
function displayHighScores() {
    introEl.style.display = "none";
    questionEl.style.display = "none";
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