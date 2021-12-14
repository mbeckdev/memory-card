import React from 'react';

import thing01 from '../assets/612x612-01.png';
import './card.styles.css';

function Card() {
  return (
    <div className="card">
      <img src={thing01} alt="functional component code" />
      <h1>here's a card</h1>
    </div>
  );
}

export default Card;
