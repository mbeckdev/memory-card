import React from 'react';

import './card.styles.css';

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

  return (
    <div
      className="card"
      onClick={handleCardClick}
      id={id}
      // onMouseOver={doThing}
    >
      <img src={path} alt="functional component code" />
      {/* <div className="card-description">here's a card</div> */}
    </div>
  );
}

export default Card;
