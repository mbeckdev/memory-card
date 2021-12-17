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

function CardContainer(props) {
  const { handleCardClick } = props;
  return (
    <div>
      {/* Note: change order of each card after you click any of them. */}
      <div id="cards-container">
        {/* <Card path={pic01} id={1} onClick={handleOnClick} /> */}
        <Card path={pic0} id={0} handleCardClick={handleCardClick} />
        <Card path={pic01} id={1} handleCardClick={handleCardClick} />
        <Card path={pic02} id={2} handleCardClick={handleCardClick} />
        <Card path={pic03} id={3} handleCardClick={handleCardClick} />
        <Card path={pic04} id={4} handleCardClick={handleCardClick} />
        <Card path={pic05} id={5} handleCardClick={handleCardClick} />
        <Card path={pic06} id={6} handleCardClick={handleCardClick} />
        <Card path={pic07} id={7} handleCardClick={handleCardClick} />
        <Card path={pic08} id={8} handleCardClick={handleCardClick} />
        <Card path={pic09} id={9} handleCardClick={handleCardClick} />
        <Card path={pic10} id={10} handleCardClick={handleCardClick} />
        <Card path={pic11} id={11} handleCardClick={handleCardClick} />
      </div>
    </div>
  );
}

export default CardContainer;
