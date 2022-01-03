import React from 'react'

import ConnectImage from 'assets/images/participate/1.gif'
import BlankImage from 'assets/images/participate/2.gif'
import GlobeImage from 'assets/images/participate/3.gif'

import 'assets/styles/sections/participate.scss'

const Participate = () => {
    return (
        <section className="participate" id="participate">
            <div className="participate__container container">
                <h2 className="participate__title">
                    WHY PARTICIPATE?
                </h2>
                <div className="participate__lead">
                    BECAUSE YOU ARE XORBIN'S LAST HOPE!  BUT THERE ARE SOME OTHER COOL REASONS TOO:
                </div>
                <div className="participate__content">

                    <div className="participate__item-wrapper">
                        <div className="participate__item">
                            <div className="participate__image-wrapper" id="participate__image-wrapper-1">
                                <img src={ConnectImage} alt="" className="participate__image" />
                            </div>
                            <p className="participate__description">
                                The Oxyzers can breed amongst themselves to create even more powerful Oxyzer descendants will give you amazing benefits when the Rhelegus commences.
                            </p>
                        </div>
                    </div>
                    <div className="participate__item-wrapper">
                        <div className="participate__item">
                            <div className="participate__image-wrapper" id='participate__image-wrapper-2'>
                                <img src={BlankImage} alt="" className="participate__image" />
                            </div>
                            <p className="participate__description">
                                Ownership of a Rhelegus NFT gives you the full commercial rights to that character
                            </p>
                        </div>
                    </div>
                    <div className="participate__item-wrapper">
                        <div className="participate__item">
                            <div className="participate__image-wrapper" id="participate__image-wrapper-3">
                                <img src={GlobeImage} alt="" className="participate__image" />
                            </div>
                            <p className="participate__description">
                                Participating, you have a voice in the community and can share your viewpoints regarding the later stages of the project like breeding, future of the descendants and much more!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Participate
