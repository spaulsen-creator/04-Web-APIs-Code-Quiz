console.log("hello");

var timeLeft = 0;
var timer;
var quizData = [
    {
        question: "A short section of code written to perform a task is:",
        option: ["Arrays", "Boolean", "Function", "Number"],
        correct: "<Function>"
    },
    {
        question: "Standard mark-up language for creating webpages is:",
        option: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        correct: "<HTML>"
    },
    {
        question: "To style a webpage you use:",
        option: ["Padding", "Flex-box", "Templates", "CSS"],
        correct: "<CSS>"
    },
    {
        question: "Javascript can:",
        option: ["Change html content", "Change html styles>", "Change html attribute values", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "If your code does not work, what should you do:",
        option: ["Burn your computer, then burn the ashes", "Run around and scream madly", "Debug and check for any errors", "Sit and wait for it to fix itself"],
        correct: "Debug and check for any errors"
    },
]

var currentQ;
function start() {
    currentQ = 0;
    timerStart()
    document.querySelector("#start-menu").setAttribute("class", "hide")
    document.querySelector("#end-game").setAttribute("class", "hide")
    document.querySelector("#quiz-content").setAttribute("class", "")
    populateQuiz()
}

function timerStart() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft <= 0 || currentQ >= quizData.length) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function populateQuiz () {
    if(currentQ < quizData.length) {
        document.querySelector("#question").textContent = quizData[currentQ].question

        var arrayOfElements = document.querySelectorAll("#option")
        for(i=0; i<arrayOfElements.length; i++) {
            arrayOfElements[i].textContent = quizData[currentQ].option[i]
            arrayOfElements[i].addEventListener("click", checkAndIterate)
        }
    }
}
//e = event
function checkAndIterate(e) {
    e.preventDefault()
    console.log("clicked", e.target.textContent)
    var optionPicked = e.target.textContent
    if(optionPicked == quizData[currentQ].correct) {
        currentQ++
        populateQuiz()
    }else {
        timeLeft -= 10;
        currentQ++
        populateQuiz()
    }
}






