'use strict';
const player = document.querySelector('.player--0');
const players = document.querySelector('.player--1');
const player0El = document.querySelector('#name--0');
const player1El = document.querySelector('#name--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');




score0El.textContent ='0';
score1El.textContent ='0';

diceEl.classList.add('hidden');

let currentScore = 0;
let scores = [0,0];
let activePlayer = 0;
let playing = true;

btnRoll.addEventListener('click',function(){
    if(playing){
    const dice = Math.trunc(Math.random()*6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1){
        currentScore += dice;
        // console.log(currentScore);
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;

    }else{

        document.getElementById(`current--${activePlayer}`).textContent= 0;
currentScore = 0;
        activePlayer = activePlayer == 0 ? 1 : 0;
       player.classList.toggle('player--active');
       players.classList.toggle('player--active');

    }
}
})

btnHold.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
 
if(scores[activePlayer] >= 100)
{
    playing = false;
    diceEl.classList.add('hidden');

    document.querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');

    document.querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
}

else{

    
    document.getElementById(`current--${activePlayer}`).textContent= 0;
    currentScore = 0;
            activePlayer = activePlayer == 0 ? 1 : 0;
           player.classList.toggle('player--active');
           players.classList.toggle('player--active');
        }
    }
})


btnNew.addEventListener('click', function(){

    scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
    score0El.textContent ='0';
    score1El.textContent ='0'; 
    current0El.textContent ='0';
    current1El.textContent ='0';

    diceEl.classList.remove('hidden');
player.classList.remove('player--winner');
players.classList.remove('player--winner');
player.classList.add('player--active')
players.classList.remove('player--active')
    

    

})





