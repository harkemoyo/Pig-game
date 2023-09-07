const player0 = document.querySelector( ".player--0")
const player1 = document.querySelector( ".player--1")
const imgDice = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');
console.log(current1El)


// default score
let score = [0 ,0]
score0El.textContent = 0
score1El.textContent = 0
let  currentscore = 0;
let activePlayer = 0
playing = true;

// function for switching between players
function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0

    // score0El.textContent = 0
    currentscore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    // remove hidden
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}


// Default for dice img
imgDice.classList.add('hidden');

// Rolling dice

// eventlistener for rolling
rollBtn.addEventListener('click', rollingDice);
// function for the event to happen
function rollingDice() {
    if(playing){
    // Random dice generation
    const shuffle = Math.floor(Math.random() * 6) + 1;

    // Display the dice 
    imgDice.src = `./img/dice-${shuffle}.png`
    // dice.src.img = `dice-${shuffle}`;
   imgDice.classList.remove('hidden');

    if (shuffle !== 1) {
        currentscore += shuffle;
        document.getElementById(`current--${activePlayer}`).textContent = currentscore
       
 
}else{

    // switch activePlayer
   switchPlayer()
}
}
}

// Hold button part

holdBtn.addEventListener('click', addPointsToPlayer)

// function for hold button
function addPointsToPlayer(e){
    if(playing){
  
// add points to activeplayer
    score[activePlayer] += currentscore

    // setting active player
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

    // score if is >= 100 someone wins

    if(score[activePlayer] >= 10){
        playing = false

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        imgDice.classList.add('hidden');



    }else{
         // switchPlayer 
    switchPlayer()
    }

   
}
}

// New button i.e clear
// newbtn event listener
newBtn.addEventListener('click', clearButton)

//  function for new button
 function clearButton() {

    // Defaulting the score and current player 
 currentScore0.textContent = 0
 current1El.textContent = 0
score0El.textContent = 0
score1El.textContent = 0

   
    
    // defaulting the classes to normal
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    playing = true;
    currentscore = 0;
    activePlayer = 0
    score = [0, 0]
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    imgDice.classList.add('hidden')
 }



