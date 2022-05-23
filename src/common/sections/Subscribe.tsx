import React, { useState } from 'react'

import 'assets/styles/sections/subscribe.scss'
import SubscribePopup from 'common/components/subscribe/SubscribePopup'
import ObliqueButton from 'common/components/common/ObliqueButton'

const Subscribe = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <section className="subscribe">
            <div className="subscribe__container container">
                <div className="subscribe__content">
                    <h3 className="subscribe__title">
                        GET LATEST NEWS IN YOUR INBOX FROM RISE OF RHELEGUS TEAM.
                    </h3>
                    <div className="subscribe__button-wrapper">
                        <ObliqueButton text={'subscribe now'} onClick={() => setIsPopupOpen(true)} />
                    </div>
                </div>
            </div>
            <SubscribePopup isOpen={isPopupOpen} setIsOpen={() => setIsPopupOpen(false)} />
        </section>
    )
}

export default Subscribe
