function questionAnswer (question, a1, a2, a3, a4, correctAnswer) {
    var question = this.question;
    var a1 = this.a1;
    var a2 = this.a2;
    var a3 = this.a3;
    var a4 = this.a4;
    var correctAnswer = this.correctAnswer;
    // $("#question").html(question);
    // $("#answer1").html(a1);
    // $("#answer2").html(a2);
    // $("#answer3").html(a3);
    // $("#answer4").html(a4);
}

var q1 = questionAnswer("This is the first question", "This is a1", "This is a2", "This is a3", "This is a4", "This is a1");
var q2 = questionAnswer("This is the second question", "This is a1", "This is a2", "This is a3", "This is a4", "This is a2");
var q3 = questionAnswer("This is the third question", "This is a1", "This is a2", "This is a3", "This is a4", "This is a3");
var q4 = questionAnswer("This is the fourth question", "This is a1", "This is a2", "This is a3", "This is a4", "This is a4");
var q5 = questionAnswer("This is the fifth question", "This is a1", "This is a2", "This is a3", "This is a4", "This is a1");

console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);