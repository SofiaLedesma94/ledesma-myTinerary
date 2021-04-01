import 'bootstrap/dist/css/bootstrap.min.css'
import Fotos from './Fotos'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
                [{url:'./assets/Tokyo.jpg',nombre:'Tokyo'},
                 {url:'./assets/singapur.jpg', nombre:'Singapore'},
                  {url:'./assets/roma.jpg', nombre:'Rome'},
                  {url:'./assets/nuevaYork.jpg', nombre:'NY'}
                 ],
                [{url:'./assets/Madrid.jpg',nombre:'Madrid'},
                 {url:'./assets/toronto.jpg', nombre:'Toronto'},
                 {url:'./assets/vancouver.jpg',nombre:'Vancouver'},
                 {url:'./assets/sf.jpg',nombre:'San Francisco'}
        
                ],
                [
                  {url:'./assets/rio.jpg',nombre:'Rio de Janeiro'}, 
                  {url:'./assets/Playa-Bonita.png', nombre:'Playa Bonita'},
                 {url:'./assets/santaMarta.jpg', nombre:'Santa Marta'},
                 {url:'./assets/machu2.jpg', nombre:'Machu Picchu'}
                ]
                
              ];
              
const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      
      >
        <div className='contenedorFotos'>
        {item.map(foto=>{

          return <Fotos img={foto.url} title={foto.nombre}/>
          })}
        </div>
        <CarouselCaption  />
      </CarouselItem>
      
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      key='carousel'
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}  />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;