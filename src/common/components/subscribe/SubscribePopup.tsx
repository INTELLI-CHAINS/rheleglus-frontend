import React, { useState } from 'react'

import 'assets/styles/components/subscribe/subscribePopup.scss'

interface ISubscribePopupProps {
    isOpen: boolean,
    setIsOpen: Function
}

const SubscribePopup = ({ isOpen, setIsOpen }: ISubscribePopupProps) => {
    const [inputValue, setInputValue] = useState('')
    const [hiddenValue, setHiddenValue] = useState('')

    return (
        <div className={`subscribePopup ${isOpen ? 'active' : ''}`} id="mc_embed_signup">
            <div className="subscribePopup__close">
                <button className="subscribePopup__close-button" onClick={() => setIsOpen(false)} />
            </div>
            <form
                action="https://riseofrhelegus.us20.list-manage.com/subscribe/post?u=052a6fe84a823e51ae1e077e3&amp;id=bef4135d24"
                method="post" id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form" className="validate" target="_blank"
                noValidate>
                <div id="mc_embed_signup_scroll">
                    <input type="email" value={inputValue} name="EMAIL" className="subscribe-popup__input email" id="mce-EMAIL"
                        placeholder="E-mail address" onChange={e => setInputValue(e.target.value)} required />
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input type="text" name="b_052a6fe84a823e51ae1e077e3_bef4135d24"
                            tabIndex={-1} value={hiddenValue} onChange={e => setHiddenValue(e.target.value)} />
                    </div>
                    <div className="subscribePopup__footer clear foot">
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                            Subscribe
                        </button>
                    </div>
                    <p>
                        <a href="http://eepurl.com/hPm0ez">
                            <img className="referralBadge" alt="" src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SubscribePopup
