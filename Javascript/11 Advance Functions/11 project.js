let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false; //to keep track whether we are playing.
let intervalId;

/*
const autoplay = () => {
  we actually prefer the regular function syntax here for two reasons number one I
  think this is easier to read than this and number two this function syntax
  enables hoisting which means we can call this function before we create it and we
  don't have to worry about which order we write the code
}
*/

function autoplay() { 
  if(!isAutoPlaying) {
    intervalId = setInterval(() => { //using arrow function
    const playerMove = pickComputerMove(); 
    playGame(playerMove);
  }, 1000);
  isAutoPlaying = true; // because we are autoplaying
  }else { // set interval actually returns a number and this number is like an ID we can use this ID to stop the interval 
    clearInterval(intervalId); //clearInterval() to stop the interval.
    isAutoPlaying = false;
  }
}

//adding event listner to autoplay button
document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoplay();
});

//adding event listner
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

  //to play the game with the help of keyboard
  
  /* know which key that we pressed earlier in this course we used
  the attribute on key down and we learned that it gets a special object called
  event and the event object contains which key was pressed add event listener
  also provides this event object but it provides it as a parameter to this
  function so inside the round brackets let's add a parameter
  event now every time we type on our keyboard add event listener will save
  the event object in here and run the function and this event object contains
  the key that we pressed so in the console.log let's display event. key this time 
  */
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}