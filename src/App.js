import './App.css';
import React, { useState, useEffect } from 'react';

import CardsContainer from './components/CardsContainer';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [alreadyClicked, setAlreadyClicked] = useState(
    new Array(12).fill(false)
  );

  // gameState can be "over" or "playing" or "won"
  const [gameState, setGameState] = useState('starting');

  const handleCardClick = (e) => {
    e.preventDefault();

    let theCard = '';
    if (e.target.classList.contains('card')) {
      // you clicked card
      theCard = e.target;
    } else {
      // you clicked img
      theCard = e.target.parentElement;
    }

    // thisID = 1 or 2 or 3 ...  or 12
    let thisID = theCard.id;

    let isClickGood = checkClickIsGood(thisID);

    //if click is good = keep playing
    if (isClickGood) {
      //add to score
      setScore(score + 1);

      //set Already Clicked state.
      let newArray = [...alreadyClicked];
      newArray[thisID] = true;

      setAlreadyClicked(newArray);

      if (gameState !== 'playing') {
        setGameState('playing');
      }
      let itsAWin = isItAWin(thisID);

      // this depends on alreadyClicked but that doesn't get set before this
      if (itsAWin) {
        setGameState('won');
      } else {
        rearrangeCards();
      }
      // It has already been clicked = end game
    } else {
      setGameState('over');
    }
  };

  const [endMessage, setEndMessage] = useState('');

  useEffect(() => {
    // console.log('gameState = ', gameState);
    if (gameState === 'over') {
      if (score > highScore) {
        setHighScore(score);
      }
      setEndMessage('YOU LOST WITH ' + score + ' POINTS');
      setScore(0);
      setAlreadyClicked(new Array(12).fill(false));
    } else if (gameState === 'won') {
      // console.log('********************\nyouwin\n***************');
      if (score > highScore) {
        setHighScore(score);
      }
      setEndMessage('YOU WON!');
    } else if (gameState === 'playing') {
      setEndMessage('');
    } else {
      setScore(0);
      setAlreadyClicked(new Array(12).fill(false));
    }
  }, [gameState]);

  const isItAWin = (thisID) => {
    // need to check for this id
    let counter = 0;
    if (!alreadyClicked[thisID]) {
      counter++;
    }

    // check all alreadyClicked indexes
    for (let index = 0; index < alreadyClicked.length; index++) {
      if (alreadyClicked[index]) counter++;
    }

    if (counter === 12) {
      return true;
    } else {
      return false;
    }
  };

  const checkClickIsGood = (thisId) => {
    // has this id already been set?
    if (!alreadyClicked[thisId]) {
      return true;

      // It has already been clicked = end game
    } else {
      return false;
    }
  };

  const [orderOfCards, setOrderOfCards] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  const rearrangeCards = () => {
    let min = 0;
    let max = 12;

    // gives 0 to 11
    let randomNumber = 0;

    let randomNumbersChosen = [];
    for (let i = min; i < max; i++) {
      randomNumber = Math.floor(Math.random() * (max - min));

      // find a new number that's not in the array already
      while (!(randomNumbersChosen.indexOf(randomNumber) === -1)) {
        randomNumber = Math.floor(Math.random() * (max - min));
      }

      randomNumbersChosen.push(randomNumber);
    }

    setOrderOfCards([...randomNumbersChosen]);
  };

  return (
    <div className="App">
      <main>
        <h1>A Cool Memory Game</h1>
        <div>How to win: Click all the cards only once</div>
        <br />
        <div>
          Score: <span>{score}</span>
        </div>
        <div>
          Best Score: <span>{highScore}</span>
        </div>
        <div id="end-message">{endMessage}</div>
        <CardsContainer
          score={score}
          handleCardClick={handleCardClick}
          cardOrderArray={orderOfCards}
        />
      </main>
    </div>
  );
}

export default App;
