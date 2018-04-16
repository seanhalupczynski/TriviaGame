$(document).ready(function () {
// Main screen
$("#text").append("<h3>The game will start when you click the Start button</h3>");
$("#text").append("<button class='btn btn-default' id='start'>Start</button>");

var questions = [firstQuestion = {
                        question: "From Nelly's 2001 release '#1', you are?",
                        answers: ["I am #1", "I am #2, who is not a winner", "I am #3, who nobody remembers", "None of the above"],
                        correctAnswer: "I am #1"
                    },
                    secondQuestion = {
                        question: "To quote Muhammad Ali, you are?",
                        answers: ["Average", "The worst", "THE GREATEST", "Just okay"],
                        correctAnswer: "THE GREATEST"
                    },                    
                    thirdQuestion = {
                        question: "Under Armor wants you to protect what?",
                        answers: ["This sofa", "This house", "This bed", "This cell phone"],
                        correctAnswer: "This house"
                    },
                    fourthQuestion = {
                        question: "According to the band Survivor, you have the eye of the what?",
                        answers: ["The potato", "The goldfish", "The mole", "The tiger"],
                        correctAnswer: "The tiger"
                    },
                    fifthQuestion = {
                        question: "What time is it?",
                        answers: ["Tooth hurty", "Nap time", "Game time! Wooo!", "Lunch time"],
                        correctAnswer: "Game time! Woo!"
                    }];
                console.log(questions)
var seconds;
var questionTimer = 10;
var breakTimer = 5;
var answerCounter = 0;
var questionCounter = 0;

function stopTimer() {
    clearInterval(seconds);
};

// Function that sets the timer to decrement by 1 second
function countdown(){
    clearInterval(seconds);
    seconds = setInterval(decrement, 1000);
    // Display the timer
    $("#header").html("<h1>Faking Confidence Trivia Challenge</h1><h2>Time Left: " + questionTimer + "</h2>");
    // Starts decrementing the timer
    function decrement(){
        questionTimer--;

        // Displays the time left to answer
        $("#header").html("<h1>Faking Confidence Trivia Challenge</h1><h2>Time Left: " + questionTimer + "</h2>");

        // function timeUp() {
            // What happens when time expires
            if(questionTimer === 0) {
                alert("Time is up!");
                $("#text").html("<h3>Oh no! You are out of time.</h3>")
                $("#text").append("<h3>The correct answer : " + questions[0].correctAnswer + "</h3>");
                $("#text").append("<img src='assets/images/surprised.jpg'>");
                $("#answers").hide();
                stopTimer();
                layover();

                // Increase the question counter
                questionCounter++;
            // };
        };
    };
};


function layover (){
    clearInterval(seconds);
    seconds = setInterval(decrement2, 1000);
    // Display time between questions
    $("#header").html("<h1>Faking Confidence Trivia Challenge</h1><h2>Time Till Next Question: " + breakTimer + "</h2>");
    // Starts decrementing timer
    function decrement2 () {
        breakTimer--;
        $("#header").html("<h1>Faking Confidence Trivia Challenge</h1><h2>Time Till Next Question: " + breakTimer + "</h2>");
        if(breakTimer === 0) {
            stopTimer();
        };
    };
};

// Start game
$("#start").click(function displayQuestion() {

    // Begin question timer
    countdown();
    // Display first question
    $("#text").html("<h3>" + questions[questionCounter].question + "</h3>");
    console.log(questions[questionCounter].question);

    // Function to display the answers in their own buttons
    $("#answers").html(function (){
        console.log(questions[questionCounter].answers);

        // Loop to create the answer buttons
        for(i=0; i<questions[questionCounter].answers.length; i++){
            $("#answers").append("<button class='btn btn-default' id='answerButton'>"+questions[questionCounter].answers[i]+"</button>");
            console.log(questions[questionCounter].answers[i]);
            console.log(questions[questionCounter].correctAnswer);
        };
    });
});

// On click function to check if answer is right or wrong
$("#answers").click(function(){
    console.log(document.activeElement.textContent);

    // If the user chooses the correct answer
    if(document.activeElement.textContent === questions[questionCounter].correctAnswer) {

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
        $("#text").append("<h3>The correct answer : " + questions[questionCounter].correctAnswer + "</h3>");

        // Display thumbs up image
        $("#text").append("<img src='assets/images/thumbsup.jpg'>");

        // Hide the answer buttons to prevent multiple answers
        $("#answers").hide();

        // Start countdown till next question
        layover();

        // Increase the question counter
        questionCounter++;
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
        $("#text").append("<h3>The correct answer : " + questions[questionCounter].correctAnswer + "</h3>");

        // Display sad image
        $("#text").append("<img src='assets/images/sad.jpg'>");

        // Hide the answer buttons to prevent multiple answers
        $("#answers").hide();

        // Start countdown till next question
        layover();
        
        // Increase the question counter
        questionCounter++;
    };    
    if(breakTimer === 0) {
        displayQuestion();
    };
});
});
