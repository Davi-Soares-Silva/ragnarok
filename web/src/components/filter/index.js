import React, { useState } from 'react';

import './style.css';

function Filter(props){
   const { name, status, onImage, offImage, filterNumber, changeFilterStatus } = props;

   return(
      <button className={`filter-item ${name.toLowerCase()} ${status? "on": ""}`} onClick={(e)=>changeFilterStatus(filterNumber)}>
         <img src={status? onImage: offImage} alt={`${name} Logo`}/>
         <h1>{name}</h1>
      </button>
   )
}

export default Filter;