// make a question class
//
// with that class created 3 questions with that class
//
// put the questions into an array
//
// run the code and should give u an index of the arrays
//
// q=[q1,q2,q3] array of example q's to print a random question
// will return a number from 0-3
//
console.log("test");
// ### Phase 1: Ask 1 question only then exit
//
// #### Create a Class to represent an individual Question (4 points).
// Your Question class should have 3 properties:
// * Question Text - This is the actual text of the given question
// * Answers - This should be an array containing the available answers for the question.
// The number of answers available for a given question is up to the Developer.
// * Correct Answer Index - This integer should be the index of the correct answer in your answer array.

// Your Question Class should have at least 2 methods:
// * A method to output the question and the available answers.
// * A method that accepts an integer, and checks if the value matches the ```Correct Answer Index```.

// #### Each answer should have a number displayed that the User can enter to pick an answer
// (using the Question class method you implemented) (2 points).
// Refer to image. (HINT: Use 0 - however many answers and use a ```Template String``` or
// simply concatenate the corresponding answer (+) to make a numbered answer in the console).

class Question {
  constructor(text, answers, correctAI) {
    this.text = text;
    this.answers = answers;
    this.correctAI = correctAI;
  }
  askQuestion() {
   return ;
 }
}

function main() {
  let arrayOfQuestions = [];
  let arrayOfObjects = [];

  arrayOfQuestions.forEach(
    function(element){
      let aQuestion = new Question(element);
      arrayOfObjects.push(aQuestion);
    }
  );

  for(let index in arrayOfObjects) {
    console.log(arrayOfObjects[index].text);
  }
}

let q1 = new Question('How many million miles is Earth from the Sun?',['123', '93', '150'], 1);
let index_of_a_question = Math.floor(Math.random() * arrayOfQuestions.length);
let user;

main();
debug;
while(user !== "q") {
  user = parseInt(prompt("Please make a selection"));
  switch (user) {
    case "q":
      break;
    case "1":
      console.log("1000");
      break;
    case "2":
      console.log("2000");
      break;
    }
}


//
// #### Create 3 or more Question instances via the Question class constructor (1 point).
// Create question instances manually in your JavaScript code.
// An example of creating a new Question should look something like this
// (NOTE: Passing in the values for the 3 properties of the Question class to its Constructor):
