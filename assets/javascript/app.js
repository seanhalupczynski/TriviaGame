$(document).ready(function () {
// Main screen
$("#text").append("<h3>The game will start when you click the Start button</h3>");
$("#text").append("<button class='btn btn-default' id='start'>Start</button>");

var questions = {firstQuestion: {
                        question: "What is the first question?",
                        answers: ["This is the first answer.", "This is the second answer.", "This is the third answer.", "This is the fourth answer."],
                        correctAnswer: function() {return this.answers[0];}
                    },
                    secondQuestion: {
                        question: "What is the second question?",
                        answers: ["This is the first answer.", "This is the second answer.", "This is the third answer.", "This is the fourth answer."],
                        correctAnswer: function() {return this.answers[0];}
                    },                    
                    thirdQuestion: {
                        question: "What is the third question?",
                        answers: ["This is the first answer.", "This is the second answer.", "This is the third answer.", "This is the fourth answer."],
                        correctAnswer: function() {return this.answers[0];}
                    },
                    fourthQuestion: {
                        question: "What is the fourth question?",
                        answers: ["This is the first answer.", "This is the second answer.", "This is the third answer.", "This is the fourth answer."],
                        correctAnswer: function() {return this.answers[0];}
                    },
                    fifthQuestion: {
                        question: "What is the fifth question?",
                        answers: ["This is the first answer.", "This is the second answer.", "This is the third answer.", "This is the fourth answer."],
                        correctAnswer: function() {return this.answers[0];}
                    }
                };
var seconds;
var timer = 10;
function timeUp() {
    clearInterval(seconds);
}
// Start game
$("#start").click(function() {

    // Setting the timer to decrement by 1 second
    function countdown(){
        clearInterval(seconds);
        seconds = setInterval(decrement, 1000);
    };

    // Displaying the timer
    // Starting at 20 seconds
    $("#header").html("<h1>Trivia Challenge</h1><h2>Time Left: " + timer + "</h2>");

    // Starts decrementing the timer
    function decrement(){
        timer--;
        // Displays the time left to answer
        $("#header").html("<h1>Trivia Challenge</h1><h2>Time Left: " + timer + "</h2>");

        // Time up at 0 seconds
        if(timer === 0) {
            timeUp();
            alert("Time is up!");
            $("#text").html("<h3>Oh no! You are out of time.</h3>")
        };
    };

    // Display first question
    $("#text").html("<h3>" + questions.firstQuestion.question + "</h3>");

    // Display the answers in their own buttons
    $("#answers").html(function (){
        for(i=0; i<questions.firstQuestion.answers.length; i++){
            $("#answers").append("<button class='btn btn-default' id='answerButton'>"+questions.firstQuestion.answers[i]+"</button>");
        };
    });

    // var userAnswer = $("#answers").click(function() {return questions.firstQuestion.answers.indexOf(click);});
    // var userAnswer = function (event) {
    //     for(b=0; b<questions.firstQuestion.answers.length; b++) {
    //         button.addEventListener("click", function(){
    //             return questions.firstQuestion.answers[b];
    //         })
    //     };
    // };
    // console.log(userAnswer);
    countdown()

    // Answering/Time is up
    // if ($("#answers").click(function(){return questions.firstQuestion.answers.indexOf(answers)} === questions.firstQuestion.correctAnswer)) {
    //     $("#text").html("<h3>That IS the correct answer!!!</h3>")
    // }
    // else if ($("#answers").click(function(){return questions.firstQuestion.answers.indexOf(answers)} !== questions.firstQuestion.correctAnswer)) {
    //     $("#text").html("<h3>That is NOT the correct answer.</h3>")

    // }
    // if (timer === 0) {
    //     $("#text").html("<h3>Oh no! You ran out of time.</h3>");
 
    // };
});                
                
});