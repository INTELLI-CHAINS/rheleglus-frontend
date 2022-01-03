import React, { useState } from 'react'

import FAQItem from 'common/components/FAQ/FAQItem'
import { IFAQItem } from 'types/IFAQItem'
import { FAQItems } from 'store/FAQ'

import 'assets/styles/sections/FAQ.scss'

const FAQ = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const handleSetActiveItem = (index : number, activeItem : number | null) => {
        if (index === activeItem) {
            setActiveItem(null)
        } else {
            setActiveItem(index)
        }
    }

    return (
        <section className="FAQ" id="FAQ">
            <div className="FAQ__container container">
                <h2 className="FAQ__title">
                    FAQ
                </h2>
                <div className="FAQ__content">
                    {FAQItems.map(( item : IFAQItem, index : number ) => (
                        <div className="FAQ__item-wrapper" key={index}>
                            <FAQItem active={index===activeItem} setActiveItem={() => handleSetActiveItem(index, activeItem)} heading={item.heading} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
