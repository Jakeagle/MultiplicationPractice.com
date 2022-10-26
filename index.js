var max;
var min;
var valueOne;
var valueTwo;
var result;
var playerAnswer;


function beginChallenge() {
  var max = 10;
  var min = 1;
  valueOne = Math.floor(Math.random() * (max - min + 1)) + min;
  valueTwo = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("valOne").innerHTML = valueOne;
  document.getElementById("valTwo").innerHTML = valueTwo;
  result = valueOne * valueTwo;
  console.log(result);
 

}



function checkAnswer() {

    playerAnswer = document.getElementById("answerValue").value;
    console.log(playerAnswer);

    if (playerAnswer == result) {
        console.log("active");
        beginChallenge();
  }
  else if (playerAnswer != result) {
      console.log("incorrect");
     alert("Try Again");
   }

}
