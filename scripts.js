function Wheel() {
  // Wait for DOM to load and grab the elements needed to initialize the game
  var game = this;
  document.addEventListener("DOMContentLoaded", () => {
    game.letterSpaces = document.getElementById("letter-spaces");
    game.hintSection = document.getElementById("hint-section");
    game.enterGuess = document.getElementById("enter-guess");
    game.submitGuess = document.getElementById("submit-guess");
    game.guessesLeft = document.getElementById("guesses-left");
    game.newRound = document.getElementById("new-round");

    game.submitGuess.addEventListener("click", function(e) {
      answerEval();
    });

    game.newRound.addEventListener("click", function(e) {
      window.location.reload(true);
    });
  });

  var modal = document.getElementById("myModal");
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  game.guesses = 3;
  var checkAnswer = game.checkAnswer;
  var getAnswerLetters = game.getAnswerLetters;
  var answerSplit = game.answerSplit;
  var displayAnswerSplit = game.displayAnswerSplit;
  var rightGuesses = [];
  const arraysIndex = Math.floor(Math.random() * 5);

  // Arrays of answers and hints
  game.answers = [
    "brotato chip",
    "mother spelunker",
    "gin and juice",
    "big money monkey",
    "phishing"
  ];
  game.hints = [
    "A corny moniker for your guy friend",
    "A cave explorer who's pregnant",
    "Snoop Dogg's beverage of choice",
    "A zoo resident who lives large",
    "A pothead's email scam"
  ];

  // Load the game
  // Make 2 copies of the correct answer and split into arrays, one for display in the UI and one for answer evaluation
  game.loadGame = loadGame;
  function loadGame() {
    game.hintSection.innerHTML = "<b>HINT: </b>" + game.hints[arraysIndex];
    checkAnswer = game.answers[arraysIndex].split("");
    getAnswerLetters = game.answers[arraysIndex].replace(/[\A-Za-z/]/g, "_");
    answerSplit = getAnswerLetters.split("");
    displayAnswerSplit = answerSplit.join(" ");
    game.letterSpaces.textContent = displayAnswerSplit;
  }

  // If guess is correct, push a copy of each match into an array that we'll use to change the display in displayNewText()
  function answerEval() {
    x = false;
    for (var i = 0; i < checkAnswer.length; i++) {
      if (game.enterGuess.value === checkAnswer[i]) {
        rightGuesses.push(game.enterGuess.value);
        x = true;
      }
    }
    if (x === true) {
      displayNewText();
    } else {
      decrementGuesses();
    }
  }

  function decrementGuesses() {
    game.guesses--;
    game.guessesLeft.textContent = "Guesses left: " + game.guesses;
    if (game.guesses === 0) {
      loseGame();
    }
  }

  function loseGame() {
    alert(":( Sorry, you lost!  Here, try again! :D");
    window.location.reload(true);
  }

  // Show the modal, grab the <span> that closes the modal, set click event handler to close modal and reload game
  function winGame() {
    modal.style.display = "block";
    captionText.innerHTML = "You're a real winner! Try another round!";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
      window.location.reload(true);
    };
  }

  // Copy checkAnswer, change any char that isn't in rightGuesses into underscores (except spaces)
  // Join the result for appropriate spacing and display in the UI
  function displayNewText() {
    var changeDash = checkAnswer.slice();
    for (var i = 0; i < changeDash.length; i++) {
      if (!rightGuesses.includes(changeDash[i])) {
        if (changeDash[i] !== " ") {
          changeDash[i] = "_";
        }
      }
    }
    displayAnswerSplit = changeDash.join(" ");
    game.letterSpaces.textContent = displayAnswerSplit;
    if (displayAnswerSplit == game.answers[arraysIndex].split("").join(" ")) {
      winGame();
    }
  }
}

var myWheel = new Wheel();

window.onload = myWheel.loadGame;
