import React from 'react';

import './style.css';

function Game(props) {

   const { id, name, image_link, price} = props.game;
   const { openDetails } = props;

   return (
      <div className="card" key={id} onClick={e=>openDetails(id)}>
         <img src={image_link} />
         <h1 className={name.length >= 20 ? "small" : ""}>{name}</h1>
         <div className="price-container">
            <strong>R$ {(price.toFixed(2)).replace(".", ",")}</strong>
         </div>
      </div>
   )
}

export default Game;