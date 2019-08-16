// make a question class
//
// with that class created 3 questions with that class
//
// put the questions into an array
//
// rim the code and should give u an index of the arrays
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

class Question {
  constructor(text, answers, correctAI) {
    this.text = text;
    this.answers = answers;
    this.correctAI = correctAI;
  }

}

function main() {
  let arrayOfQuestions = ["q1", "q2", "q3"];
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

main();
