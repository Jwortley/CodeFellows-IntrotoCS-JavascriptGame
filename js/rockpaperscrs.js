/* Numbers are chosen between 1 and 3
where 1 = Rock
2 = Paper
3 = Scissors */


var userChoice, computerChoice, numberOfWins,numberOfAttempts,userWin;
numberofWins = 0;
numberOfAttempts = 0;
var userSelects = function(choice){
  if(choice == "rock"){
    userChoice = 1;
  }
  else if(choice == "paper"){
    userChoice = 2;
  }
  else if(choice == "scissors"){
    userChoice = 3;
  }
  cpuSelects();
  CompareChoices(userChoice,computerChoice);
  updateWinRate();
}
var cpuSelects = function(){
  computerChoice = Math.floor((Math.random()*3)+1);
}

function CompareChoices(userChoice,computerChoice){
  if(userChoice == 1){
    if(computerChoice == 1){
      //output the results are even
      //put computer choice is "Rock"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Even</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Rock</span>"
      userWin = false;
    }
    else if(computerChoice == 2){
      //output that the user lost
      //put computer choice is "paper"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Lose</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Paper</span>"
      userWin= false;
    }
    else if(computerChoice == 3){
      //output that the user won
      //put computer choice is "scissors"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Win</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Scissors</span>"
      userWin = true;
    }
  }
  else if(userChoice == 2){
    if(computerChoice == 1){
      //output that user wins
      //put computer choice is "Rock"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Win</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Rock</span>"
      userWin = true;
    }
    else if(computerChoice == 2){
      //output the results are even
      //put computer choice is "Paper"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Even</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Paper</span>"
      userWin = false;
    }
    else if (computerChoice == 3){
      //output user lost
      //put computer choice is "scissors"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Lose</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Scissors</span>"
      userWin = false;
    }
  }
  else if(userChoice == 3){
    if(computerChoice == 1){
      //output user lost
      //put computer choice is "Rock"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Lose</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Rock</span>"
      userWin = false;
    }
    else if(computerChoice == 2){
      //output user wins
      //put computer choice is "paper"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Win</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Paper</span>"
      userWin = true;
    }
    else if(computerChoice == 3){
      //output results are even
      //computer choice is "scissors"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Even</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Scissors</span>"
      userWin = false;
    }
  }
}
function updateWinRate(){
  if(userWin==true){
    numberofWins++;
    numberOfAttempts++;
  }
  else{
    numberOfAttempts++;
  }
  var winRate = parseInt((numberofWins/numberOfAttempts)*100);
  var displayWinRate = document.getElementById("winRate");
      displayWinRate.innerHTML= "<span>"+winRate+"%</span>";

}


