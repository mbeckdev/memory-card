import React from 'react';
import Card from './Card.js';

import pic01 from '../assets/612x612-01.png';
import pic02 from '../assets/612x612-02.png';
import pic03 from '../assets/612x612-03.png';
import pic04 from '../assets/612x612-04.png';
import pic05 from '../assets/612x612-05.png';
import pic06 from '../assets/612x612-06.png';
import pic07 from '../assets/612x612-07.png';
import pic08 from '../assets/612x612-08.png';
import pic09 from '../assets/612x612-09.png';
import pic10 from '../assets/612x612-10.png';
import pic11 from '../assets/612x612-11.png';
import pic0 from '../assets/612x612-12.png';

import './card-container.styles.css';

let picArray = [
  pic0,
  pic01,
  pic02,
  pic03,
  pic04,
  pic05,
  pic06,
  pic07,
  pic08,
  pic09,
  pic10,
  pic11,
];

function CardContainer(props) {
  const { handleCardClick, cardOrderArray } = props;

  let allCards = cardOrderArray.map((card) => (
    <Card
      key={card}
      id={card}
      path={picArray[card]}
      handleCardClick={handleCardClick}
    />
  ));

  return (
    <div>
      <div id="cards-container">{allCards}</div>
    </div>
  );
}

export default CardContainer;
