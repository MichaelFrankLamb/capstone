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
    var checkGuess = game.checkGuess;
    var rightAnswers = [];
    const arraysIndex = Math.floor(Math.random() * 3);
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
            // const arraysIndex = Math.floor(Math.random() * 3);
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
                var rightString = rightAnswers.toString();
                
                checkGuess = (game.answers[arraysIndex]).replace("/(?![^+rightString+])/[\A-Za-z/])/g", "_"); 
                game.letterSpaces.textContent = checkGuess;
        }
    })

};



var myWheel = new Wheel();

window.onload = myWheel.loadGame;




// var regex = new RegExp("/(?![^"+rightString+"])/[\A-Za-z/])/","g");

//pass regex in here
                // var re = "/(?!rightAnswers)/[\A-Za-z/]/g/";
                // checkGuess = (game.answers[arraysIndex]).replace(re, "_");


                // function formatTextArea() {
                //     var textString = document.getElementById('userinput').value;
                
                //     var formatText = textString.replace(/\n|\s/g, function ($0) {
                //         if ($0 === "\n")
                //             return ",";
                //         else if ($0 === " ")
                //             return "_";
                //     }
                //     alert(formatText);
                // }