// import React, { useState } from 'react';
import './Card.css';
import { FaCartPlus } from "react-icons/fa";
import * as React from "react";

const CardComponent = ({id,name,volume,ppl,img_path}) => {
  return (
    <div className="card">
      <div className='card-img'>
       <img src={'img/'+img_path} alt="Drink" />
      </div>
      <div className='info'>
        <h1 id='product-name'>{name}</h1>
        <h2 id='volume'>{volume}L</h2>
        <div className="price-div">
          <h3 id='price-pro-litre'>{ppl}€/L</h3>
          <h2 id='total-price'>{ppl*volume}€</h2>
        </div>
        <div id='cart-row'>
          <input type='number' id='info-entry'/>
          <button id='info-add-button'><FaCartPlus/></button>
        </div>
      </div>
    </div>
  );

};

export default CardComponent;
