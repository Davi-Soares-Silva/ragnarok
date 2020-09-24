import React from 'react';

import backButtonImg from '../../assets/images/back-button.svg';

import './style.css';
import { Link } from 'react-router-dom';

function backButton(props) {

   const { cleanSearch = null} = props

   return (
      <Link to="/">
         <div id="back-button-container" className="container">
            <button onClick={cleanSearch? cleanSearch: null}>
               <img src={backButtonImg} />
               <strong>Voltar</strong>
            </button>
         </div>
      </Link>
   )
}

export default backButton;