function Wheel() {
    // Setting variables to avoid scope problems and affect elements when game is loaded and played
    var game = this;
    document.addEventListener("DOMContentLoaded", ()=> {
    game.letterSpaces = document.getElementById('letter-spaces');
    game.hintSection = document.getElementById('hint-section');
    game.enterGuess = document.getElementById('enter-guess');
    game.submitGuess = document.getElementById('submit-guess');
    game.guessesLeft = document.getElementById('guesses-left');



    game.submitGuess.addEventListener("click",function(e) { 
        answerEval();
        })
    })

    var guesses = 3;
    var checkAnswer = game.checkAnswer;
    var getAnswerLetters = game.getAnswerLetters; 
    var answerSplit = game.answerSplit;
    var displayAnswerSplit = game.displayAnswerSplit;
    var formatText = game.formatText; 
    var rightGuesses = [];
    const arraysIndex = Math.floor(Math.random() * 3);

    // Arrays of answers and hints
    game.answers = ["brotato chip",
                    "mother spelunker",
                    "gin and juice"]
    game.hints = ["A corny moniker for a guy's buddy",
                  "A cave explorer who breastfeeds",
                  "Snoop Dogg's beverage of choice"]

    // Load the game
    game.loadGame = loadGame;
    function loadGame(){
    game.hintSection.innerHTML = "<b>HINT: </b>" + game.hints[arraysIndex];
    checkAnswer = game.answers[arraysIndex].split(""); 
                    
    // change nonwhitespace string characters to "_", split into an array of individual characters, join to add spaces and feed into innerHTML
    getAnswerLetters = (game.answers[arraysIndex]).replace(/[\A-Za-z/]/g,"_"); 
    answerSplit = getAnswerLetters.split("");
    displayAnswerSplit = answerSplit.join(" ");
    game.letterSpaces.textContent = displayAnswerSplit;  
    }


function answerEval() {

        x = false;
        for(var i = 0; i < checkAnswer.length; i++) {
            if (game.enterGuess.value === checkAnswer[i]) {
                rightGuesses.push(game.enterGuess.value);
                x = true;
        }
    }if (x = true) {
        displayNewText();
    } 
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





// if (game.enterGuess.value == checkAnswer[i]) {
//     //   document.getElementById('dash[' + i + ']').style.display = "none";
//     x = true;
//     } else if (game.enterGuess.value != checkAnswer[i]) {
//       guessesLeft.textContent = "Guesses left: " + (guesses - 1);
//     }
//   }
//   if (x = true) {
//     game.letterSpaces.textContent = displayAnswerSplit[i];
//   } else if (x = false) {
//     alert("Sorry, try again!");
//   }









// for(var i = 0; i < checkAnswer.length; i++) {


//         for(var i = 0; i < checkAnswer.length; i++) {
//             if (game.enterGuess.value === checkAnswer[i])
//                 rightAnswers.push(game.enterGuess.value);
//         }
//         for(var i = 0; i < rightAnswers.length; i++) {
//             if (rightAnswers[i] != checkAnswer[i])
//                 checkAnswers[i].replace("_");
//           }

// // let matches = checkAnswer.filter( word => rightGuesses.includes(word))


// // formatText = (game.answers[arraysIndex]).replace("/(?![^+rightString+])/[\A-Za-z/])/g", "_"); 
// // game.letterSpaces.textContent = checkGuess;



// // var regex = new RegExp("/(?![^"+rightString+"])/[\A-Za-z/])/","g");

// //pass regex in here
//                 // var re = "/(?!rightAnswers)/[\A-Za-z/]/g/";
//                 // // checkGuess = (game.answers[arraysIndex]).replace(re, "_");


//                 // function formatTextArea() {
//                 //     var textString = document.getElementById('userinput').value;
                
//                 //     var formatText = textString.replace(/\n|\s/g, function ($0) {
//                 //         if ($0 === "\n")
//                 //             return ",";
//                 //         else if ($0 === " ")
//                 //             return "_";
//                 //     }
//                 //     alert(formatText);
//                 ///



//     var iterator = checkAnswer.values();
//     for (var i = 0; i < checkAnswer.length; i++) {
//         for (let letter of iterator) {
//         if (letter != game.enterGuess.value) {
//             letter === "_";
//         } else {
//             letter === letter;
//         }
//     } game.letterspaces.checkAnswer;