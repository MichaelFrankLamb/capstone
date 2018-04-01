function Wheel() {
        // Setting variables to avoid scope problems and affect elements when game is loaded and played
        var game = this;
        game.letterSpaces = document.getElementById('letter-spaces');
        game.hintSection = document.getElementById('hint-section');
        game.enterGuess = document.getElementById('enter-guess');
        game.submitGuess = document.getElementById('submit-guess');
        var guessesLeft = document.getElementById('guesses-left');
        game.guesses = 3;
        var checkAnswer = game.checkAnswer;
        var getAnswerLetters = game.getAnswerLetters; 
        var answerSplit = game.answerSplit;
        var displayAnswerSplit = game.displayAnswerSplit;
        var rightAnswers = [];
        // Arrays of answers and hints
        game.answers = ["brotato chip",
                        "mother spelunker",
                        "gin and juice"]
        game.hints = ["A corny moniker for a guy's buddy",
                      "A cave enthusiast who breastfeeds",
                      "Snoop Dogg's beverage of choice"]
                // Load the game
                game.loadGame = loadGame;
                function loadGame(){
                const arraysIndex = Math.floor(Math.random() * 3);
                game.hintSection.innerHTML = "<b>HINT: </b>" + game.hints[arraysIndex];
                checkAnswer = game.answers[arraysIndex].split(""); ///////
                        
                // change nonwhitespace string characters to "_", split into an array of individual characters, join to add spaces and feed into innerHTML 
                getAnswerLetters = (game.answers[arraysIndex]).replace(/[\A-Za-z/]/g,"_"); 
                answerSplit = getAnswerLetters.split("");
                displayAnswerSplit = answerSplit.join(" ");
                game.letterSpaces.textContent = displayAnswerSplit;  

        }


        game.submitGuess.addEventListener("click",function(e) {
            for(var i = 0; i < checkAnswer.length; i++) {
                if (game.enterGuess.value === checkAnswer[i])
                    rightAnswers.push(game.enterGuess.value);
                    var correct = rightAnswers; //// you might have to use a string instead of the array for Regexp
                    // var regex = new RegExp("/(?!correct)/[\A-Za-z/]/g","_");
                    // getAnswerLetters = (game.answers[arraysIndex]).replace(regex,) //pass regex in here
                    var re = "/(?!correct)/[\A-Za-z/]/g/";
                    getAnswerLetters = (game.answers[arraysIndex]).replace(re, "_");
            }
        })
    
};

    

    var myWheel = new Wheel();

    window.onload = myWheel.loadGame;
