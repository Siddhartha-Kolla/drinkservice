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
      <div class="flex items-center w-full mx-auto justify-center">
        <button
            class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                    stroke-linecap="round" />
                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                    stroke-linecap="round" />
            </svg>
        </button>
        <input type="text"
            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
            placeholder="1"/>
        <button
            class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                    stroke-linecap="round" />
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                    stroke-linecap="round" />
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                    stroke-linecap="round" />
            </svg>
        </button>
    </div>
    </div>
  );
}

export default App;
