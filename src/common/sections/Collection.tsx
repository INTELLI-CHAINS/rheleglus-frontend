import React from 'react'

import Image1 from 'assets/images/collection/1.png'
import Image2 from 'assets/images/collection/2.png'
import Image3 from 'assets/images/collection/3.png'
import Image4 from 'assets/images/collection/4.png'

import 'assets/styles/sections/collection.scss'
import ObliqueLink from 'common/components/common/ObliqueLink'

const Collection = () => {
    return (
        <section className="collection" id="collection">
            <div className="collection__container container">
                <div className="collection__header">
                    <h4 className="collection__pretitle">
                        Rhelegus
                    </h4>
                    <h2 className="collection__title">
                        Collection
                    </h2>
                    <h4 className="collection__subtitle">
                        7777 Programmatically Generated Unique NFTs waiting to be awakened on the ETH Blockchain
                    </h4>
                    <ObliqueLink text={'view on opensea'} linkTo={'#'} />
                </div>
                <div className="collection__content row">
                    <div className="collection__item-wrapper col-md-6 col-lg-4 col-hg-3">
                        <div className="collection__item">
                            <img src={Image1} alt="" className="collection__item-image" />
                        </div>
                    </div>
                    <div className="collection__item-wrapper col-md-6 d-none d-md-block col-lg-4 col-hg-3">
                        <div className="collection__item">
                            <img src={Image2} alt="" className="collection__item-image" />
                        </div>
                    </div>
                    <div className="collection__item-wrapper col-lg-4 d-none d-lg-block col-hg-3">
                        <div className="collection__item">
                            <img src={Image3} alt="" className="collection__item-image" />
                        </div>
                    </div>
                    <div className="collection__item-wrapper col-0 col-hg-3 d-none d-hg-block">
                        <div className="collection__item">
                            <img src={Image4} alt="" className="collection__item-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
