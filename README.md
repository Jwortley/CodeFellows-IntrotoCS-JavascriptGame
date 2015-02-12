# CodeFellows: Introduction to Computer Science and Web Development

## Assignment: Create a guessing Game

### User interface is created using [Skeleton HTML Boilerplate](http://getskeleton.com/)

### HTML and Javascript overview

```html
<input type="button" value="ROCK" onclick="userSelects('rock'); beginGame()">
```
Input button triggers two javascript functions upon mouse click event, userSelects(choice) and beginGame() functions.

```javascript
var userSelects = function(choice){
  if(choice == 'rock'){
    //assign value for rock
  }
  else if(choice == 'paper'){
    //assign value for paper
  }
  else if(choice == 'scissors'){
    //assign value for scissors
  }return this;
}
```
userSelects() takes the value of the button that is selected

```javascript
var beginGame =  function(){
  compareChoices(userSelects().userChoice, cpuSelects().cpuChoice);
  updateWinRate();
}
```
beginGame() executes the function which compares the user's and CPU's choice, then determines the winner.

updateWinRate() updates the success percentage of the user's wins. 

### Future Updates
* <s>Clean up global vars for user and CPU choices.</s>
* Clean up global vars for number of matches and win rates - IN PROGRESS
* Include a new CPU choice which utilizes random choice but integrates probability into choice
