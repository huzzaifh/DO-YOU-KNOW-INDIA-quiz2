var readlineSync = require("readline-sync");
function welcome(){
     var userName=readlineSync.question("Please Enter Your Name:  ")
     console.log("Welcome "+userName+ " to this quiz about India ")
}
var score =0;

var questions =[{
  question:"What is The Total Population of India ",
  answer:"1 billion"
},
{ question:"Which day is Independence Day celebrated  ",
  answer:"15th August" },
{question:"Which state has the highest population ",
 answer:"uttar Pradesh"},
{question:"Which is the national animal of India ",
 answer:"tiger"},
{question:"What is the national flower of India  ",
 answer:"lotus" }
];


function play(question, answer) {
  var userName=readlineSync.question(question)
  
  if (userName === answer){
    console.log("You are right")
    score=score+1
  }
  else {
    console.log("you are wrong ");
  }
  
  console.log("current score: ", score);
  console.log("-------------")
}

function game(){
  for(var i=0;i<questions.length;i++){
  var questionName=questions[i]
    play(questionName.question,questionName.answer)}
}
function showScores() {
  console.log("YAY! You SCORED: ", score);
}

welcome()
game()
showScores()