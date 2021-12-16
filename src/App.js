import './App.css';
import React, { useState } from 'react';

import CardsContainer from './components/CardsContainer';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <main>
        <div>A Cool Memory Game</div>
        <div>How to play. Click all the cards only once</div>
        <div>
          Score: <span>0</span>
        </div>
        <div>
          Best Score: <span>0</span>
        </div>
        <CardsContainer score={score} />
      </main>
    </div>
  );
}

export default App;
