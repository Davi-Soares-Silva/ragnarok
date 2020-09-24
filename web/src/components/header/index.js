import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo-ragnarok.png';
import searchIconImg from '../../assets/images/search-icon.svg';
import cartIconImg from '../../assets/images/cart-icon.svg';


import './style.css';


function Header(props) {

   const { searchGame } = props;

   const [value, setValue] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
      searchGame(value);
   }

   const handleChange = (event)=>{
      setValue(event.target.value);
   }

   return (

      <div id="header-container" className="container">
         <div id="logo-container">
            <Link to="/">
               <img src={logoImg} alt="Logo Ragnarok" />
            </Link>
         </div>
         <div id="search-bar-container">
            <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Procurar por jogo..." onChange={handleChange}/>
            </form>
            <img src={searchIconImg} alt="" />
         </div>
         <div id="cart-container">
            <a href="#">
               <img src={cartIconImg} alt="Icone Carrinho" />
               <div id="cart-items-number">
                  <strong>0</strong>
               </div>
            </a>
         </div>
      </div>
   )
}

export default Header;