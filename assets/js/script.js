var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("scores");
var mainEl = document.getElementsByName("main");
var startEl = document.getElementById("start");

function displayIntroduction() {

}

function startQuiz() {
    startEl.addEventListener("click", displayQuestion);
}

function displayQuestion() {
    var messageQuestionHeader = "";
    var messageQuestionList = ["", "", "", ""];

}

function displayScore() {

}

function displayHighScores() {

}

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if
    
        if(timeLeft === 0) {
    
          clearInterval(timeInterval);
    
          // call function displayScore
          displayScore();
        }
    
    },1000);
}

displayIntroduction();