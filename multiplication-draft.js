var x = 0;
var y = 0;
var userInput = 0;
var solution = 0;
var questions = 0;
var wrongAnswers = 0;
for(questions=1; questions<=10; questions++){
  wrongAnswers+=multiPractice();
}
alert("You got "+wrongAnswers+" wrongAnswers");
if(wrongAnswers==0){
  alert("Charlie, you've won!");
}else{
  alert("You got "+wrongAnswers+" wrong answers out of "+questions+" questions.");
}

function multiPractice(){
  x = Math.floor(Math.random()*7)+3;
  y = Math.floor(Math.random()*7)+3;
  solution=x*y;
  while(userInput!=solution){
    userInput = prompt(x+" * "+y+" = ?");
    if(userInput==solution){
      alert("Correct!");
    }else if(userInput=="stop"){
      userInput=solution;
    }else{
      alert("Incorrect!");
      wrongAnswers++;
    }
  }
  return wrongAnswers;
}
