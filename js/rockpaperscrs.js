/* Numbers are chosen between 1 and 3
where 1 = Rock
2 = Paper
3 = Scissors */


var numberofWins,numberofAttempts;
numberofWins = 0;
numberofAttempts = 0;
var userSelects = function(choice){
  if(choice == "rock"){
    this.userChoice = 1;
  }
  else if(choice == "paper"){
    this.userChoice = 2;
  }
  else if(choice == "scissors"){
    this.userChoice = 3;
  };
  return this;
};

var beginGame = function(){
    compareChoices(userSelects().userChoice,cpuSelects().computerChoice);
    updateWinRate(compareChoices().userWin);
};

var cpuSelects = function(){
  this.computerChoice = Math.floor((Math.random()*3)+1);
  return this;
}

var compareChoices = function(userChoice,computerChoice){
  if(userChoice == 1){
    if(computerChoice == 1){
      //output the results are even
      //put computer choice is "Rock"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Even</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Rock</span>"
      this.userWin = false;
    }
    else if(computerChoice == 2){
      //output that the user lost
      //put computer choice is "paper"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Lose</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Paper</span>"
      this.userWin = false;
    }
    else if(computerChoice == 3){
      //output that the user won
      //put computer choice is "scissors"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Win</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Scissors</span>"
      this.userWin = true;
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
      this.userWin = true;
    }
    else if(computerChoice == 2){
      //output the results are even
      //put computer choice is "Paper"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Even</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Paper</span>"
      this.userWin = false;
    }
    else if (computerChoice == 3){
      //output user lost
      //put computer choice is "scissors"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Lose</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Scissors</span>"
      this.userWin = false;
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
      this.userWin = false;
    }
    else if(computerChoice == 2){
      //output user wins
      //put computer choice is "paper"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Win</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Paper</span>"
      this.userWin = true;
    }
    else if(computerChoice == 3){
      //output results are even
      //computer choice is "scissors"
      var gameResult = document.getElementById("gameResult");
      gameResult.innerHTML="<span>Even</span>"
      var compChoice = document.getElementById("compChoice");
      compChoice.innerHTML="<span>Scissors</span>"
      this.userWin = false;
    }
  }
  return this;
};
var updateWinRate = function(resultOfGame){
  if(resultOfGame==true){
    numberofWins++;
    numberofAttempts++;
  }
  else{
    numberofAttempts++;
  }
  var winRate = parseInt((numberofWins/numberofAttempts)*100);
  var displayWinRate = document.getElementById("winRate");
      displayWinRate.innerHTML= "<span>"+winRate+"%</span>";

};


