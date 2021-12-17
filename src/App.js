import './App.css';
import React, { useState, useEffect } from 'react';

import CardsContainer from './components/CardsContainer';

function App() {
  const [score, setScore] = useState(0);
  const [alreadyClicked, setAlreadyClicked] = useState(
    new Array(12).fill(false)
  );

  // gameState can be "over" or "playing" or "won"
  const [gameState, setGameState] = useState('over');

  console.log(alreadyClicked);

  const handleCardClick = (e) => {
    e.preventDefault();

    let theCard = '';
    if (e.target.classList.contains('card')) {
      // console.log('you clicked card');
      theCard = e.target;
    } else {
      // console.log('you clicked img');
      theCard = e.target.parentElement;
    }
    // console.log('theCard', theCard);
    console.log('theCard.id', theCard.id);

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
      console.log('newArray', newArray);
      setAlreadyClicked(newArray);

      if (gameState !== 'playing') {
        setGameState('playing');
      }
      let itsAWin = isItAWin(thisID);

      // this depends on alreadyClicked but that doesn't get set before this
      if (itsAWin) {
        setGameState('won');
      }
      // It has already been clicked = end game
    } else {
      setGameState('over');
    }
  };

  useEffect(() => {
    console.log('gameState = ', gameState);
    if (gameState === 'over') {
      setScore(0);
      setAlreadyClicked(new Array(12).fill(false));
    } else if (gameState === 'won') {
      console.log('********************\nyouwin\n***************');
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

  const rearrangeCards = () => {};

  return (
    <div className="App">
      <main>
        <div>A Cool Memory Game</div>
        <div>How to play. Click all the cards only once</div>
        <div>
          Score: <span>{score}</span>
        </div>
        <div>
          Best Score: <span>0</span>
        </div>
        <CardsContainer score={score} handleCardClick={handleCardClick} />
      </main>
    </div>
  );
}

export default App;
