import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './ImgCarousel.css';
import wmDesign from '../../../images/carousel-1.png';
import graphic from '../../../images/carousel-2.png';
import web from '../../../images/carousel-3.png';

const ImgCarousel = () => {
    return (
      <section className="carousel-container mt-20  ">
        <div className="text-center th">
                <h2 className='' style={{color: '#ffffff'}}>Hear are some of<span style={{color: '#7AB259'}}> our works</span></h2>
            </div>
        <div className="carousel">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img className="img"  src={wmDesign} alt=""/></Slide>
          <Slide index={1}><img className="img" src={graphic} alt=""/></Slide>
          <Slide index={2}><img  className="img" src={web} alt=""/></Slide>
        </Slider>
        <ButtonBack className="btn btn-primary ">Back</ButtonBack>
        <ButtonNext className="btn btn-primary ">Next</ButtonNext>
      </CarouselProvider>
        </div>
          
      </section>
        
    );
};

export default ImgCarousel;