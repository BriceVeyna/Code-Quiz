var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("scores");
var mainEl = document.getElementsByName("main");

function displayIntroduction() {
    var messageIntroHeader = "Coding Quiz";
    var messageIntroBody = "Test your knowledge with these coding questions! Once you click start, the timer will begin counting down. Each correct answer will add 10 seconds and each incorrect answer will subtract 10 seconds. High scores are recorded, see if you can beat your record!";

}

function displayQuestion() {
    var messageQuestionHeader = "";
    var messageQuestionList = ["", "", "", ""];

}

function displayScore() {
    var messageFinalHeader = "Complete!";

}

function displayHighScores() {

}

function countdown() {
    var timeLeft = 60;

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