import './HeaderComponent.css';
import React,  {useState} from 'react';
import SearchBar from './SearchBar.jsx';
import { IoPersonCircleOutline} from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import LoginSection from './LoginSection.jsx';

openNewpage1(); {
  window.open(url,);
}

openNewpage2(); {
  window.open(url,)
}

function HeaderComponent() {
  return (
    <div className="App-header">
      <a href='#'>
      <div className='logo-div header-div'>
        <img src={'/img/logo.svg'
        } id="nav-logo"/>
      </div></a>
      <div className='functional-div header-div'>
        <SearchBar/>
        <button id="openNewpage1"><a href='profile'><IoPersonCircleOutline className='nav-logos'/></a></button>
        <button id="openNewpage2"><a href='shoppingcart'><PiShoppingCart className='nav-logos'/></a></button>
      </div>
    </div>
  );
}

export default HeaderComponent;