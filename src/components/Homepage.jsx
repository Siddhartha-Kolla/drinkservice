import './Homepage.css';
import React,  {useState} from 'react';
import CardComponent from './CardComponent.jsx';
import CategoryComponent from './CategoryComponent.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function Homepage() {

  return (
    <div>
      <CategoryComponent/>
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
  );
}

export default Homepage;