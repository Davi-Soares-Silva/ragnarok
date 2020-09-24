import React, { useState, useEffect } from 'react';

import './style.css';

import loadingGif from '../../assets/images/loading.gif';

import api from '../../services/api';


function Details(props) {

   const [detailedGame, setDetailedGame] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      window.scrollTo(0,0)
      api.get(`games/${props.id}`).then(response => {
         let detailedGame = (response.data[0]);
         setDetailedGame(detailedGame);
         setLoading(false);
      })
   }, []);

   {
      if (loading) {
         return (
            <div id="loading-container" className="container">
               <img src={loadingGif} alt="" />
               <h1>Carregando...</h1>
            </div>
         )
      }
   }



   if (!loading) {
      return (
         <div id="game-details-container" className="container">
            <div id="buy-informations-container">
               <img src={detailedGame.image_link} alt="Capa do Jogo" />
               <div id="details">
                  <div id="game-informations">
                     <span className={detailedGame.name.length >= 25? "smallName" : ""}>{detailedGame.name}</span><br />
                     <div id="platform-container">
                        <strong className="platform">Plataformas: </strong><span className="platform"> {detailedGame.platforms}</span>
                     </div>
                     <span>R$ {(detailedGame.price.toFixed(2).replace(".", ","))}</span><br />
                  </div>
                  <div id="buy-buttons-container">
                     <button className="add-cart">Adicionar ao carrinho</button>
                     <button>Comprar</button>
                  </div>
               </div>
            </div>
            <div id="game-additional-informations-container">
               <div id="game-information-menu">
                  <button id="active">Descrição do Jogo</button>
                  <span>|</span>
                  <button>Lojas Físicas</button>
                  <span>|</span>
                  <button>Desconto no App</button>
               </div>
               <div id="description-container">
                  <p>
                     {detailedGame.description}
                  </p>
               </div>
            </div>
         </div>
      )
   }

}

export default Details;