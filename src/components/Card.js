import React from 'react';

import thing01 from '../assets/612x612-01.png';
import './card.styles.css';

function Card(props) {
  const { path } = props;
  console.log('props', props);
  return (
    <div className="card">
      <img src={path} alt="functional component code" />
      {/* <div className="card-description">here's a card</div> */}
    </div>
  );
}

export default Card;
