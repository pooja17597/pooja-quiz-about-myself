var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("Who is this? ");
console.log("Welcome, " + username + ". Nice to meet you.");

console.log("Type only lowercase/small letters or numbers.");

function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer === answer) {
    console.log("Great! you are right.");
    score = score + 1;
  } else {
    console.log("Oops, you are wrong.")
  }
  console.log("Your current score is: " + score);
  console.log("*********")
}

var q1 = {
  question: "In which city was Pooja born? ",
  answer: "vapi"
}
var q2 = {
  question: "In which year did Pooja get married? ",
  answer: "2021"
}
var q3 = {
  question: "In which month does Pooja's birthday comes? (Enter name of month) ",
  answer: "may"
}
var q4 = {
  question: "Who is Pooja's favourite actor? (Enter 'name surname' format) ",
  answer: "akshay kumar"
}
var q5 = {
  question: "What is Pooja's favourite food? ",
  answer: "vadapav"
}
var q6 = {
  question: "Which color is Pooja's favourite color? ",
  answer: "peach"
}

var qna = [q1, q2, q3, q4, q5, q6];
for (var i = 0; i < qna.length; i++) {
  var currentquestion = qna[i];
  play(currentquestion.question, currentquestion.answer);
}

console.log("Your final score is: " + score);
console.log("Highest score is: ");

console.log("Pooja = 6");
console.log("Manthan = 6");

console.log("Have you beaten the highest score? Share me the screenshot of your final score.")