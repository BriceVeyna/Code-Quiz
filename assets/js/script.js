var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("scores");
var mainEl = document.getElementsByName("main");
var startEl = document.getElementById("start");

var timeLeft = 60;

function displayIntroduction() {

}

function startQuiz() {
    startEl.addEventListener("click", displayQuestion);
}

function displayQuestion() {
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

    for (var i = 0; i < questionTotal; i++) {
        if (answer === true) {
            timeLeft + 10;
        } else {
            timeLeft - 10;
        }
        questionHeaderMain = questionHeader[i];
        questionListMain = questionList[i];
    }

}

function displayScore() {

}

function displayHighScores() {

}

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