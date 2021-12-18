import React from 'react';

import './card.styles.css';
// import pic0 from '../assets/612x612-12.png';

function Card(props) {
  const { path, id, handleCardClick } = props;
  // console.log('props', props);

  // const doThing = (e) => {
  //   console.log('aasasdfasdf', e.target);
  //   console.log(
  //     'e.target.classList.contains("card")',
  //     e.target.classList.contains('card')
  //   );
  // };
  // const pathName = 'pic' + '0';

  return (
    <div
      className="card"
      onClick={handleCardClick}
      id={id}
      key={id}
      // onMouseOver={doThing}
    >
      {/* <img src={pathName} alt="functional component code" /> */}
      <img src={path} alt="functional component code" />
      {/* <div className="card-description">here's a card</div> */}
    </div>
  );
}

export default Card;
