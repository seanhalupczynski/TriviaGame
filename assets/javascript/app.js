$(document).ready(function () {
// Main screen
$("#text").append("<h3>The game will start when you click the Start button</h3>");
$("#text").append("<button class='btn btn-default' id='start'>Start</button>");

var questions = {firstQuestion: {
                        question: "From Nelly's 2001 release '#1', you are?",
                        answers: ["I am #1", "I am #2, who is not a winner", "I am #3, who nobody remembers", "None of the above"],
                        correctAnswer: "I am #1"
                    },
                    secondQuestion: {
                        question: "To quote Muhammad Ali, you are?",
                        answers: ["Average", "The worst", "THE GREATEST", "Just okay"],
                        correctAnswer: "THE GREATEST"
                    },                    
                    thirdQuestion: {
                        question: "Under Armor wants you to protect what?",
                        answers: ["This sofa", "This house", "This bed", "This cell phone"],
                        correctAnswer: "This house"
                    },
                    fourthQuestion: {
                        question: "According to the band Survivor, you have the eye of the what?",
                        answers: ["The potato", "", "The goldfish", "The mole", "The tiger"],
                        correctAnswer: "The tiger"
                    },
                    fifthQuestion: {
                        question: "What time is it?",
                        answers: ["Tooth hurty", "Nap time", "Game time! Wooo!", "Lunch time"],
                        correctAnswer: "Game time! Woo!"
                    }
                };
                console.log(questions.firstQuestion.correctAnswer)
var seconds;
var questionTimer = 10;
// var timer2 = 5;
var answerCounter = 0;
function stopTimer() {
    clearInterval(seconds);
}
// Start game
$("#start").click(function() {

    // Function that sets the timer to decrement by 1 second
    function countdown(){
        clearInterval(seconds);
        seconds = setInterval(decrement, 1000);
    };

    // Display the timer
    $("#header").html("<h1>Faking Confidence Trivia Challenge</h1><h2>Time Left: " + questionTimer + "</h2>");

    // Starts decrementing the timer
    function decrement(){
        questionTimer--;
        // Displays the time left to answer
        $("#header").html("<h1>Faking Confidence Trivia Challenge</h1><h2>Time Left: " + questionTimer + "</h2>");

        // What happens when time expires
        if(questionTimer === 0) {
            stopTimer();
            alert("Time is up!");
            $("#text").html("<h3>Oh no! You are out of time.</h3>")
            $("#text").append("<h3>The correct answer : " + questions.firstQuestion.correctAnswer + "</h3>");
            $("#text").append("<img src='assets/images/surprised.jpg'>");
            $("#answers").hide();
        };
    };

    // Display first question
    $("#text").html("<h3>" + questions.firstQuestion.question + "</h3>");

    // Function to display the answers in their own buttons
    $("#answers").html(function (){
        for(i=0; i<questions.firstQuestion.answers.length; i++){
            $("#answers").append("<button class='btn btn-default' id='answerButton'>"+questions.firstQuestion.answers[i]+"</button>");
            // console.log(questions.firstQuestion.answers[i]);
            // console.log(questions.firstQuestion.correctAnswer);
        };
    });

    // On click function to check if answer is right or wrong
    $("#answers").click(function(event){
        console.log(document.activeElement.textContent);
        // If the user chooses the correct answer
        if(document.activeElement.textContent === questions.firstQuestion.correctAnswer) {
            // Add 1 to counter for correct answer
            answerCounter++;
            console.log(answerCounter);
            // Stop the timer
            stopTimer();
            // Tell user they answered correctly
            $("#text").html("<h3>You are correct!!!</h3>");
            // Display the user's answer
            $("#text").append("<h3>Your answer: " + document.activeElement.textContent + "</h3>");
            // Display the correct answer
            $("#text").append("<h3>The correct answer : " + questions.firstQuestion.correctAnswer + "</h3>");
            // Display thumbs up image
            $("#text").append("<img src='assets/images/thumbsup.jpg'>");
            // Hide the answer buttons to prevent multiple answers
            $("#answers").hide();
        }
        // If the user chooses a wrong answer
        else {
            console.log(answerCounter);
            // Stop the timer
            stopTimer();
            // The the user they answered incorrectly
            $("#text").html("<h3>You are wrong.</h3>");
            // Display the user's answer
            $("#text").append("<h3>Your answer: " + document.activeElement.textContent + "</h3>");
            // Display the correct answer
            $("#text").append("<h3>The correct answer : " + questions.firstQuestion.correctAnswer + "</h3>");
            // Display sad image
            $("#text").append("<img src='assets/images/sad.jpg'>");
            // Hide the answer buttons to prevent multiple answers
            $("#answers").hide();
        } 
        
        
    });

    countdown()

});                
                
});