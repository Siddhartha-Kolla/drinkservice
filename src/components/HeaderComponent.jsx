import './HeaderComponent.css';
import React,  {useState} from 'react';
import SearchBar from './SearchBar.jsx';
import { IoPersonCircleOutline} from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";

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
        <a href='profile'><IoPersonCircleOutline className='nav-logos' /></a>
        <a href='#'><PiShoppingCart className='nav-logos'/></a>
      </div>
    </div>
  );
}

export default HeaderComponent;