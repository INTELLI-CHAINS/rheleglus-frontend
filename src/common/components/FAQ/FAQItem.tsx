import React from 'react'

import 'assets/styles/components/FAQ/FAQItem.scss'

interface IFAQItemProps {
    heading       : string,
    text          : string,
    active        : boolean,
    setActiveItem : Function
}

const FAQItem = ({heading, text, active, setActiveItem} : IFAQItemProps) => {
    return (
        <div className={`FAQ__item ${active?'active':''}`} >
            <div className="FAQ__item-header" onClick={() => setActiveItem()}>
                <h3 className="FAQ__item-heading">
                    {heading}
                </h3>
                <div className="FAQ__item-icon" />
            </div>
            <div className="FAQ__item-content">
                <p className="FAQ__item-text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default FAQItem
