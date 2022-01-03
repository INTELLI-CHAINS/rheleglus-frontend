import React, { useEffect, useState } from 'react'

import 'assets/styles/components/slider/slider.scss'

import { ISliderItem } from 'types/ISliderItem'

interface ISliderProps {
    slides: Array<ISliderItem>,
    info ?: boolean
}

const Slider = ({ slides, info = false }: ISliderProps) => {
    const [prePrevSlideId, setPrePrevSlideId] = useState(0)
    const [prevSlideId, setPrevSlideId] = useState(1)
    const [currentSlideId, setCurrentSlideId] = useState(2)
    const [nextSlideId, setNextSlideId] = useState(3)
    const [proNextSlideId, setProNextSlideId] = useState(4)

    let interval: NodeJS.Timeout

    const [direction, setDirection] = useState<'left' | 'right'>('right')

    const prevSlide = () => {
        setDirection(() => 'left')
    }

    const nextSlide = () => {
        setDirection(() => 'right')

        setPrePrevSlideId(prev => {
            if (prev >= 0 && prev < slides.length - 1) {
                return prev + 1
            }
            return prev * 0
        })
        setPrevSlideId(prev => {            
            if (prev >= 0 && prev < slides.length - 1) {
                return prev + 1
            }
            return prev * 0
        })
        setCurrentSlideId(prev => {
            if (prev >= 0 && prev < slides.length - 1) {
                return prev + 1
            }
            return prev * 0
        })
        setNextSlideId(prev => {
            if (prev >= 0 && prev < slides.length - 1) {
                return prev + 1
            }
            return prev * 0
        })
        setProNextSlideId(prev => {
            if (prev >= 0 && prev < slides.length - 1) {
                return (prev + 1)
            }
            return (prev * 0)
        })
    }

    useEffect(() => {
        interval = setInterval(() => nextSlide(), 4000)
    }, [])

    useEffect(() => {
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="slider-wrapper">
            {/* <div className="slider__nav">
                <button className="slider__nav-prev" onClick={prevSlide}>
                    PREV
                </button>
                <button className="slider__nav-next" onClick={() => nextSlide()}>
                    NEXT
                </button>
            </div> */}
            <div className={`slider ${direction}`}>

                {slides.map(slide => (
                    <div key={slide.id}
                        className={
                            `sliderItem-wrapper 
                        ${currentSlideId === slide.id ? 'current' :
                                prevSlideId === slide.id ? 'prev' :
                                    nextSlideId === slide.id ? 'next' :
                                        prePrevSlideId === slide.id ? 'pre-prev' :
                                            proNextSlideId === slide.id ? 'pro-next' : 'inactive'} 
                    `}>
                        <div className="sliderItem">
                            <img src={slide.imagePath} alt="" className="sliderItem__image" />
                        </div>
                    </div>
                ))}

                {info &&
                    <div className="slider-info">
                        {slides.map(slide => (
                            <div className="slider-info__item">
                                <div className="slider-info__item-name">
                                    {slide.name}
                                </div>
                                <div className="slider-info__item-description">
                                    {slide.description}
                                </div>
                            </div>
                        ))}
                    </div>}

            </div>
        </div>
    )
}

export default Slider
