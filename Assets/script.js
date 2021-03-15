console.log("hello");

var timeLeft = 0;
var timer;
var quizdata = [
    {
        question: "A short section of code written to perform a task is:",
        option: ["<Arrays>", "<Boolean>", "<Function>", "<Number>"],
        correct: "<Function>"
    },
    {
        question: "Standard mark-up language for creating webpages is:",
        option: ["<HTML>", "<CSS>", "<JavaScript>", "<Bootstrap>"],
        correct: "<HTML>"
    },
    {
        question: "To style a webpage you use:",
        option: ["<Padding>", "<Flex-box>", "<Templates>", "<CSS>"],
        correct: "<CSS>"
    },
    {
        question: "Javascript can:",
        option: ["<Change html content>", "<Change html styles>", "<Change html attribute values>", "<All of the above>"],
        correct: "<All of the above>"
    },
    {
        question: "If your code does not work, what should you do:",
        option: ["<Burn your computer, then burn the ashes>", "<Run around and scream madly>", "<Debug and check for any errors>", "<Sit and wait for it to fix itself>"],
        correct: "<Debug and check for any errors>"
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
        if (timeLeft <= 0 || currentQ >= quizdata.length) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function populateQuiz () {
    if(currentQ < quizdata.length) {
        document.querySelector("#question").textContent = quizData[currentQ].question

        var arrayOfElements = document.querySelectorAll("#option")
        for(i=0; i<arrayOfElements.length; i++) {
            arrayOfElements[i].textContent = quizData[currentQ].option[i]
            arrayOfElements[i].addEventListener("click", checkAndIterate)
        }
    }
}


//localStorage.setItem('name', 'Shawn');  //look for the two values
//let myName = localStorage.getItem('name');
//myName


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

//var message =
 // 'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
//var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();


