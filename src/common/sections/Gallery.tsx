import React from 'react'

import Slider from 'common/components/slider/Slider';

import Image1 from 'assets/images/gallery/1.png'
import Image2 from 'assets/images/gallery/2.png'
import Image3 from 'assets/images/gallery/3.png'
import Image4 from 'assets/images/gallery/4.png'
import Image5 from 'assets/images/gallery/5.png'
import Image6 from 'assets/images/gallery/6.png'

import 'assets/styles/sections/gallery.scss'

const Gallery = () => {
    const slides = [
        { id : 0, imagePath : Image1 },
        { id : 1, imagePath : Image2 },
        { id : 2, imagePath : Image3 },
        { id : 3, imagePath : Image4 },
        { id : 4, imagePath : Image5 },
        { id : 5, imagePath : Image6 },
    ]

    return (
        <section className="gallery" id="gallery">
            <div className="gallery__container container">
                <h2 className="gallery__title">
                    Gallery
                </h2>
                <div className="gallery__content">
                    <Slider slides={slides} />
                </div>
            </div>
        </section>
    )
}

export default Gallery
