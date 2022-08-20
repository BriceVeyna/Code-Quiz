const timerEl = document.getElementById("timer");
const viewScoresEl = document.getElementById("viewScores");
const introEl = document.getElementById("intro");
const questionsEl = document.getElementById("questions");
const scoreEl = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const highScoresEl = document.getElementById("highScores");
const startEl = document.getElementById("start");
const homeEl = document.getElementById("home");
const initialsEl = document.getElementById("initials");
const submitEl = document.getElementById("submit");
const scoreListEl = document.getElementById("score-list");
const clearScoresEl = document.getElementById("clear-scores");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

let timeLeft = 60;
let quizComplete = false;
let storedHighScores = [];

// Initalize quiz and countdown based on click event
startEl.addEventListener("click", displayQuestion);
startEl.addEventListener("click", countdown);

// Display high score page based on click event
viewScoresEl.addEventListener("click", displayHighScores);

// Display home page on click event
homeEl.addEventListener("click", displayIntroduction);

submitEl.addEventListener('click', function(event) {
    
    // Prevents default behavior of the button
    event.preventDefault();

    // Store raw input in variable, log to verify
    if (initialsEl.value === '') {
        var name = 'Mysterious Stranger';
    } else {
        var name = initialsEl.value.trim();
    }
    
    // Add new score to existing array
    storedHighScores.push({
        initials: name,
        score: timeLeft,
    });

    // Sort scores highest to lowest
    storedHighScores.sort((b, a) => a.score - b.score);

    // Add scores to local storage
    localStorage.setItem('Scores', JSON.stringify(storedHighScores));
    
    // Clear search Field
    initialsEl.value = '';

    // Add score to list, display high scores page
    addStoredScores();
    displayHighScores();
})

clearScoresEl.addEventListener('click', function() {
    storedHighScores = [];
    localStorage.removeItem('Scores');
    displayHighScores();
})

// Suppress all content other than intro page
function displayIntroduction() {
    timeLeft = 60;
    quizComplete = false;
    introEl.style.display = "";
    questionsEl.style.display = "none";
    scoreEl.style.display = "none";
    highScoresEl.style.display = "none";
}

// Suppress all content other than question page, run through questions adding or subtracting time based on correct or incorrect answers
function displayQuestion() {

    let questionIndex = 0;

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
    ];

    // Render question and choices
    function nextQuestion() {
        questionsEl.children[0].textContent = questions[questionIndex].questionHeader;
        for (let i = 0; i < questions[questionIndex].questionList.length; i++) {
            questionsEl.children[1].children[i].textContent = questions[questionIndex].questionList[i];
        }
    }

    // Display correct or incorrect message, add or subtract time, add to question index, and then move on to next question or section
    function questionStatus(choice) {
        if (choice === questions[questionIndex].answer) {
            questionsEl.children[3].textContent = 'Correct!';
            timeLeft = timeLeft + 10;
            questionIndex++;
            if (questionIndex >= questions.length) {
                quizComplete = true;
                displayScore();
            } else {
                nextQuestion();
            }
        } else {
            questionsEl.children[3].textContent = 'Wrong!';
            timeLeft = timeLeft - 10;
            questionIndex++;
            if (questionIndex >= questions.length) {
                quizComplete = true;
                displayScore();
            } else {
                nextQuestion();
            }
        }
    }

    nextQuestion();

    // Listen for answer choice and load appropriate response
    btn1.addEventListener("click", () => {
        let choice = btn1.innerHTML;
        questionStatus(choice);
    });
    btn2.addEventListener("click", () => {
        let choice = btn2.innerHTML;
        questionStatus(choice);
    });
    btn3.addEventListener("click", () => {
        let choice = btn3.innerHTML;
        questionStatus(choice);
    });
    btn4.addEventListener("click", () => {
        let choice = btn4.innerHTML;
        questionStatus(choice);
    });
}

// Suppress all content other than display score page
function displayScore() {
    questionsEl.style.display = "none";
    scoreEl.style.display = "";
    finalScore.textContent = timeLeft;
}

// Suppress all content other than high score page
function displayHighScores() {
    introEl.style.display = "none";
    questionsEl.style.display = "none";
    scoreEl.style.display = "none";
    highScoresEl.style.display = "";
    getStoredScores();
}

// Get high scores from local storage
function getStoredScores() {
    localScores = JSON.parse(localStorage.getItem('Scores'));

    // If there is no locally stored variable, default to empty program variable
    if (localScores !== null) {
        storedHighScores = localScores;
    }

    // Initialize addStoredScores function
    addStoredScores();
}

// Add stored high scores to list
function addStoredScores() {
    scoreListEl.innerHTML = '';

    for (var i = 0; i < storedHighScores.length; i++) {
        var storedScore = storedHighScores[i].initials + " - " + storedHighScores[i].score;
    
        var li = document.createElement('li');
        li.textContent = storedScore;
        scoreListEl.appendChild(li);
    }
}

// Creates timer countdown
function countdown() {

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
    
        if (timeLeft && quizComplete > 0) {

            // Clear remaining time and display score page
            clearInterval(timeInterval);
            displayScore();
        }

        if(timeLeft === 0) {
    
            // Clear remaining time and display score page
            clearInterval(timeInterval);
            displayScore();
        }
    
    },1000);
}

displayIntroduction();