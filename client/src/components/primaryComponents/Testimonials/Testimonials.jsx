import Carousel, { CarouselItem } from '../Carousel/Carousel';
import './Testimonials.scss';

const Testimonials = () => {

    return (
        <div className="Testimonials">
            <div className="Testimonials__content">
                <h4 className="Testimonials__content__title blue--text font-weight-normal">Testimonials</h4>
                <h2 className="Testimonials__content__subtitle">What Business Leaders Say About Us</h2>
                <h4 className="Testimonials__content__text font-weight-normal">We collect feedback to improve our quality services </h4>
            </div>
            <div className="Testimonials__carousel">
                <Carousel>
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 2</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                    <CarouselItem>Item 4</CarouselItem>
                    <CarouselItem>Item 5</CarouselItem>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials