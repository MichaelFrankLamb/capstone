function Wheel() {
    // Setting variables to avoid scope problems and affect elements when game is loaded and played
    var game = this;
    document.addEventListener("DOMContentLoaded", ()=> {
    game.letterSpaces = document.getElementById('letter-spaces');
    game.hintSection = document.getElementById('hint-section');
    game.enterGuess = document.getElementById('enter-guess');
    game.submitGuess = document.getElementById('submit-guess');
    game.guessesLeft = document.getElementById('guesses-left');
    game.newRound = document.getElementById('new-round');



    game.submitGuess.addEventListener("click",function(e) { 
        answerEval();
        })

    game.newRound.addEventListener("click", function(e) {
        window.location.reload(true);
    })
    })

    game.guesses = 3;
    var checkAnswer = game.checkAnswer;
    var getAnswerLetters = game.getAnswerLetters; 
    var answerSplit = game.answerSplit;
    var displayAnswerSplit = game.displayAnswerSplit;
    var rightGuesses = [];
    const arraysIndex = Math.floor(Math.random() * 5);

    // Arrays of answers and hints
    game.answers = ["brotato chip",
                    "mother spelunker",
                    "gin and juice",
                    "big money monkey",
                    "phishing"]
    game.hints = ["A corny moniker for your male buddy",
                  "A cave explorer who breastfeeds",
                  "Snoop Dogg's beverage of choice",
                  "A zoo resident who lives large",
                  "A pothead's email scam"]

    // Load the game

    game.loadGame = loadGame;
    function loadGame(){
    game.hintSection.innerHTML = "<b>HINT: </b>" + game.hints[arraysIndex];
    checkAnswer = game.answers[arraysIndex].split(""); 
                    
    // change string's non-whitespace characters to "_", split into an array of individual characters, join to add spaces and feed into innerHTML

    getAnswerLetters = (game.answers[arraysIndex]).replace(/[\A-Za-z/]/g,"_"); 
    answerSplit = getAnswerLetters.split("");
    displayAnswerSplit = answerSplit.join(" ");
    game.letterSpaces.textContent = displayAnswerSplit;  
    }


function answerEval() {
    x = false;
    for (var i = 0; i < checkAnswer.length; i++) {
        if (game.enterGuess.value === checkAnswer[i]) {
            rightGuesses.push(game.enterGuess.value);
            x = true;
        }
    }   if (x === true) {
        displayNewText()
    } else {
        decrementGuesses()
    }
}

function decrementGuesses() {
    game.guesses--;
    game.guessesLeft.textContent = "Guesses left: " + (game.guesses);
    if (game.guesses === 0) {
        loseGame()
    }
}

function loseGame() {
    alert(":( Sorry, you lost!  Here, try again! :)");
    window.location.reload(true)
}


function displayNewText() {
    var changeDash = checkAnswer.slice();
    
    for(var i = 0; i < changeDash.length; i++) {
        if (!rightGuesses.includes(changeDash[i])) {
            if (changeDash[i] !== " ") {
                changeDash[i] = "_";
            }
        }

    } displayAnswerSplit = changeDash.join(" ");  /// if you have problems with display after loading a new game this could be why - don't re-use displayAnswerSplit variable
    game.letterSpaces.textContent = displayAnswerSplit;

}

};

var myWheel = new Wheel();

window.onload = myWheel.loadGame;

