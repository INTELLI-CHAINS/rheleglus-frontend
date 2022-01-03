import React from 'react'

import CharImage from 'assets/images/specification/1.gif'
import ObliqueLink from 'common/components/common/ObliqueLink'

import 'assets/styles/sections/specification.scss'

const Specification = () => {
    return (
        <section className="specification" id="specification">
            <div className="specification__container container">
                <div className="specification__content-wrapper row">
                    <div className="specification__content col-lg-6">
                        <h2 className="specification__title">
                            SPECIFICATION
                        </h2>
                        <h3 className="specification__subtitle">
                            ALL OXYZERS ARE WARRIORS BUT SOME HAVE INCREDIBLY MORE SUPERPOWERS THAN THE OTHERS.
                        </h3>
                        <div className="specification__lead">
                            Each Oxyzer is unique and programmatically generated from over 200+ possible traits, including body type, armor, halo, earring, facial features, weapons, wings, accessories, horns and more.
                        </div>
                        <p className="specification__text">
                            The Oxyzers are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.)
                        </p>
                        <div className="specification__button-wrapper">
                            <ObliqueLink text={'explore more'} linkTo={'#'} />
                        </div>
                    </div>
                    <div className="specification__image-block col-lg-6">
                        <div className="specification__image-wrapper">
                            <img src={CharImage} alt="" className="specification__image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification
