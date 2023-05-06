var answers = ["1","2","2","1"]
var score = 0

function enterAnswer1(){
  var response = prompt("Please enter your answer, choose 1 or 2:");
  if (response === answers[0]){
    alert("You're right!");
    score+=25
  }
  else{
    alert("It's a pity! You're wrong ~");
  }
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
}


function enterAnswer2(){
  var response = prompt("Please enter your answer, choose 1 or 2:");
  if (response === answers[1]){
    alert("You're right!");
    score+=25
  }
  else{
    alert("It's a pity! You're wrong ~");
  }
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
}

function enterAnswer3(){
  var response = prompt("Please enter your answer, choose 1 or 2:");
  if (response === answers[2]){
    alert("You're right!");
    score+=25
  }
  else{
    alert("It's a pity! You're wrong ~");
  }
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
}

function enterAnswer4(){
  var response = prompt("Please enter your answer, choose 1 or 2:");
  if (response === answers[3]){
    alert("You're right!");
    score+=25
  }
  else{
    alert("It's a pity! You're wrong ~");
  }
}


function infoCard1(){
  alert("07, first love face, sweet");
}

function infoCard2(){
  alert("sexy, abdominal muscle, bl");
}

function infoCard3(){
  alert("tall and rich, young and handsome");
}

function infoCard4(){
  alert("sexy, charming, lesser panda");
}


function correctAnswer1(){
  alert("1 say my name");
}

function correctAnswer2(){
  alert("2 hot summer");
}

function correctAnswer3(){
  alert("2 back door");
}

function correctAnswer4(){
  alert("1 over me");
}

function getScore(){
  alert("Your score is " + score +" , have a nice day ^v^")
}
