import './App.css';
import React,  {useState} from 'react';
import HeaderComponent from './components/HeaderComponent.jsx';
import CardComponent from './components/CardComponent.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
      <div className='Kategorien'>
      {sorts.map((sort, index) => (
        <DynamicButton key={index} id={`button-${index}`} value={sort} isActive={activeButton === index} onClick={() => handleButtonClick(index)}/>
      ))}
      </div>
      <div id='body' className='body'>
        <div className="relative products">
          <Carousel 
            opts={{
              align: "start",
            }}
            className="w-[90%] pro-carousel"
          >
            <CarouselContent className="flex justify-evenly">
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-[20%]" style= {{padding:'30px'}}>
                  <CardComponent name={"HohesC Multivitaminsaft C&D"} volume={6} ppl={3.42} img_path={"coca.png"} className="test"/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
