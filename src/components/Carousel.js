import React  from 'react';
import Slider from 'infinite-react-carousel';

// https://g787543.github.io/infinite-react-carousel/

const Carousel = () => {

    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 3000
      };

    const images = [
        'https://picsum.photos/400/300?random&w',
        'https://picsum.photos/400/300?random&e',
        'https://picsum.photos/400/300?random&r',
        'https://picsum.photos/400/300?random&q',
        'https://picsum.photos/400/300?random&y',
        'https://picsum.photos/400/300?random&t'
    ]

    return (
    <Slider { ...settings }>

        {images.map((key,index)=>(
            <div key={index}>          
                <div className='caroesel-image' style={{backgroundImage: `url(${key})`}}>
                </div>
            </div>
        ))}

        </Slider>
    )
}


export default Carousel