import React from 'react';

import emailIconImg from '../../assets/images/email-icon.svg';

import './style.css';

import vikingFooterImg from '../../assets/images/footer-viking.svg';
import facebookLogoImg from '../../assets/images/facebook-icon.svg';
import twitterLogoImg from '../../assets/images/twitter-icon.svg';
import instagramLogoImg from '../../assets/images/instagram-icon.svg';

function Footer() {
   return (
      <div id="footer-container">
         <img src={vikingFooterImg} alt="" />
         <div id="footer-contact-informations-container">
            <div id="email-container">
               <img src={emailIconImg} alt="Email Ícone" />
               <strong>atendimento@ragnarok.com</strong>
            </div>
            <div id="social-medias-container">
               <a href="#">
                  <img src={facebookLogoImg} alt="Logo Facebook" />
               </a>
               <a href="#">
                  <img src={twitterLogoImg} alt="Logo Twitter" />
               </a>
               <a href="#">
                  <img src={instagramLogoImg} alt="Logo Instagram" />
               </a>
            </div>
         </div>
      </div>
   )
}

export default Footer;