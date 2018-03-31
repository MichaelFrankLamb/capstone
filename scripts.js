function Wheel() {
        // Setting variables to avoid scope problems and affect elements when game is loaded and played
        var game = this;
        var letterSpaces = document.getElementById('letter-spaces');
        var hints = document.getElementById('hints');
        game.enterGuess = document.getElementById('enter-guess');
        var submitGuess = document.getElementById('submit-guess');
        var guessesLeft = document.getElementById('guesses-left');
        game.checkAnswer = game.answers[arraysIndex].split(" "); //answer string will be split into an array with no spaces to be checked when user guesses

        // change nonwhitespace string characters to "_", split into an array, join to add spaces and feed into innerHTML 
        game.getAnswerLetters = (game.answers[arraysIndex]).replaceAll([A-Za-z],_); 
        game.letterSplit = game.getAnswerLetters.split("")
        game.displayLetterSpaces = game.letterSplit.join(" ");

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
            hints.innerHTML = "<b>HINT: </b>" + game.hints[arraysIndex];
            letterSpaces.innerHTML = game.displayLetterSpaces;
            
            
              
        }
    }
