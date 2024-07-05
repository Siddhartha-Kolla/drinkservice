import './Homepage.css';
import React,  {useState} from 'react';
import CardComponent from './CardComponent.jsx';
import CategoryComponent from './CategoryComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselComponent = ({id , data}) => {
  return (
    <div className="relative products">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[90%] select-none"
        id={"carousel-"+id}
      >
        <h1 className='carousel-headings'>{id}</h1>
        <CarouselContent className="flex justify-evenly">
          {data.map((data_list, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4" style= {{padding:'0px'}}>
              <CardComponent name={data_list[0]} volume={data_list[1]} ppl={data_list[2]} img_path={data_list[3]} className="test"/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="disabled:hidden"/>
        <CarouselNext className="disabled:hidden"/>
      </Carousel>
    </div>
  )
}


function Homepage() {
  const test = [["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"],["HohesC Multivitaminsaft C&D",6,3.42,"coca.png"]]
  return (
    <div>
      <HeaderComponent/>
      <CategoryComponent/>
      <div className='homepage-body'>
        <div className='content'>
          <div>
            <CarouselComponent id={"Wasser"} data={test}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;