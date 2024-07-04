import './App.css';
import React,  {useState} from 'react';
import HeaderComponent from './components/HeaderComponent.jsx';
import Homepage from './components/Homepage.jsx';
import CardComponent from './components/CardComponent.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import LoginComponent from './components/LoginComponent.jsx'

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
      <HeaderComponent/>
      <div id='body' className='body'>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
