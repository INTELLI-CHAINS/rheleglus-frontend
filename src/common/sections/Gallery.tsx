import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Autoplay } from 'swiper'

import Image1 from 'assets/images/gallery/1.webp'
import Image2 from 'assets/images/gallery/2.webp'
import Image3 from 'assets/images/gallery/3.webp'
import Image4 from 'assets/images/gallery/4.webp'
import Image5 from 'assets/images/gallery/5.webp'
import Image6 from 'assets/images/gallery/6.webp'
import Image7 from 'assets/images/gallery/7.webp'

import 'assets/styles/sections/gallery.scss'

type ISlide = { id: number; imagePath: string }

// Костыль, чтобы не так было видно баг свайпера,
// когда картинки идут на следующий круг
const slides: ISlide[] = [
   { id: 0, imagePath: Image1 },
   { id: 1, imagePath: Image2 },
   { id: 2, imagePath: Image3 },
   { id: 3, imagePath: Image4 },
   { id: 4, imagePath: Image5 },
   { id: 5, imagePath: Image6 },
   { id: 6, imagePath: Image7 },
   { id: 7, imagePath: Image4 },
   { id: 8, imagePath: Image5 },
   { id: 9, imagePath: Image6 },
   { id: 10, imagePath: Image7 },
]

const Gallery = () => {
   return (
      <section className='gallery' id='gallery'>
         <div className='gallery__container container'>
            <h2 className='gallery__title'>Gallery</h2>
            <div className='gallery__content'>
               <Swiper
                  loop
                  modules={[Autoplay]}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  speed={800}
                  centerInsufficientSlides
                  breakpoints={{
                     320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                     },
                     768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                     },
                     992 : {
                        slidesPerView: 3,
                        spaceBetween: 10,
                     }
                  }}
               >
                  {slides.map((slide) => (
                     <SwiperSlide key={slide.id}>
                        <div className='sliderItem-wrapper'>
                           <div className='sliderItem'>
                              <img src={slide.imagePath} alt='' className='sliderItem__image' />
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   )
}

export default Gallery
