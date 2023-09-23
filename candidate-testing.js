const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = "";
let correctAnswers = "";
let candidateAnswers ="";

function askForName() {
  candidateName = input.question("what is your name? ");
  console.log("Hello are you ready for a space quiz:  " + candidateName);

}
// TODO 1.1b: Ask for candidate's name //

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //}
  candidateAnswer = input.question(question);
}
function gradeQuiz(candidateAnswers) {
  if (candidateAnswer === correctAnswer ) {
    console.log("Heck yeah! you got it correct");
  } else {
    console.log("Sorry that answer is incorrect");
  }
}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

function runProgram() {
    askForName();

  // TODO 1.1c: Greet candidate using their name //
console.log("Hello: " + candidateName); 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};