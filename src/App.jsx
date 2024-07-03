import './App.css';
import React,  {useState} from 'react';
import SearchBar from './components/SearchBar.jsx';
import Card from './components/Card.jsx';
import { IoPersonCircleOutline} from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";

const DynamicButton = ({ id, value, isActive, onClick }) => {

  return (
    <button
      id={id}
      value={value}
      onClick={onClick}
      className={ isActive ? ' button-solid new-background' : 'button-solid'}
    >
      {value}
    </button>
  );
};

function App() {

  const sorts = ["Wasser","Saft","Softdrinks","warme Getränke","Bier","Wein"]
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href='#'>
        <div className='logo-div header-div'>
          <img src={'/img/logo.png'
          } id="nav-logo"/>
          <span class="logoText">Getränkeservice</span>
        </div></a>
        <div className='functional-div header-div'>
          <SearchBar/>
          <a href='#'><IoPersonCircleOutline className='nav-logos' /></a>
          <a href='#'><PiShoppingCart className='nav-logos'/></a>
          
        </div>
      </header>
      <div className='Kategorien'>
      {sorts.map((sort, index) => (
        <DynamicButton key={index} id={`button-${index}`} value={sort} isActive={activeButton === index} onClick={() => handleButtonClick(index)}/>
      ))}
      </div>
      <div id='products'> 
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
        <Card name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"}/>
      </div>
    </div>
  );
}

export default App;
