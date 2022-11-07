var valueOne;
var valueTwo;
var result;
var playerAnswer;
let max;
let min;
let noNumbers = false;




function beginChallenge() {

    max = parseInt(document.getElementById("Max-Input").value);
    min = parseInt(document.getElementById("Min-Input").value);

    if (min >= max) {
        alert(`Your min number must be smaller than your max`);
        document.getElementById("Max-Input").value = null;
        document.getElementById("Min-Input").value = null;
        document.getElementById("valOne").innerHTML = null;
        document.getElementById("valTwo").innerHTML = null;
    }
    if ((document.getElementById("Max-Input").value === "" || (document.getElementById("Min-Input").value === ""))) {
        alert(`You must put numbers in both the Min and Max box to begin.`);
        document.getElementById("valOne").innerHTML = null;
        document.getElementById("valTwo").innerHTML = null;
    }
    else {
        valueOne = Math.floor(Math.random() * (max - min + 1)) + min;
        valueTwo = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("valOne").innerHTML = valueOne;
        document.getElementById("valTwo").innerHTML = valueTwo;
    }
   result = valueOne * valueTwo;
   
 
    

}





function answerClick() {
    if (event.key === "Enter") {
        checkAnswer();
    }
}

function resetValues() {
    var min = " 0";
    var max = " 0";
    var valueOne = "0 ";
    var valueTwo = " 0";
    var result = "0 ";
    document.getElementById("valOne").innerHTML = "0 ";
    document.getElementById("valTwo").innerHTML = "0 ";
    document.getElementById("Max-Input").value = null;
    document.getElementById("Min-Input").value = null;
}

function checkAnswer() {

    playerAnswer = document.getElementById("answerValue").value;
    console.log(playerAnswer);
    if (playerAnswer == result) {
        document.getElementById("answerValue").value = " ";
        beginChallenge();
    }
    else if (playerAnswer != result) {
        console.log("incorrect");
        alert("Try Again");
        document.getElementById("answerValue").value = " ";
    }

}
