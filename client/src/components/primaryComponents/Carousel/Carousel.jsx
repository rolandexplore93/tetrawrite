import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Carousel.scss';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            { children }
        </div>
    )

}

const Carousel = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [pausedCarousel, setPausedCarousel] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0){
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)){
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            !pausedCarousel && updateIndex(activeIndex + 1);
        }, 1000);

        return () => {
            interval && clearInterval(interval)
        }
    })

    return (
        <div className="carousel"
            onMouseEnter={() => setPausedCarousel(true)}
            onMouseLeave={() => setPausedCarousel(false)}
        >
            <div className="carousel__inner" style={{ transform: `translate(-${activeIndex * 50}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "49%" })
                })}
            </div>
            <div className='carousel__indicators'>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}>
                    Prev
                </button>
                {/* {
                    React.Children.map(children, (child, index) => {
                        return (
                            <button 
                                onClick={() => updateIndex(index)}
                            >{index + 1}</button>
                        )
                    })
                } */}
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Carousel