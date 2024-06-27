import './Carousel.css'
import { useEffect, useState } from 'react';

function CarouselKarting() {
    const images = ["PhotoContainer bg1", "PhotoContainer bg2", "PhotoContainer bg3"]; 

    const [index, setIndex] = useState(0); 
    

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
            return () => clearInterval(interval); 
    },);
    return (
        <div className='Background'>
            <div className={images[index]}>
                <h1 className='Big'>Manage your race here!</h1>
            </div>
        </div>
            
        
  );
}

export default CarouselKarting;