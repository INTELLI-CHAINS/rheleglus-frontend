import React from 'react'

import MetaverseItem from 'common/components/metaverse/MetaverseItem'
import { metaverse } from 'store/Metaverse'
import { IMetaverseItem } from 'types/IMetaverseItem'

import 'assets/styles/sections/metaverse.scss'

const Metaverse = () => {
    return (
        <section className="metaverse" id="metaverse">
            <div className="metaverse__container container">
                <h2 className="metaverse__title">
                    METAVERSE
                </h2>
                <h3 className="metaverse__subtitle">
                    We will create our own Metaverse – the X Verse
                </h3>
                <div className="metaverse__content row">
                    {metaverse.map((item: IMetaverseItem, index: number) => {
                        return (
                            <div className="metaverse__item-wrapper col-md-6 col-lg-4" key={index}>
                                <MetaverseItem 
                                    imagePath={item.imagePath} 
                                    description={item.description} 
                                    styled={index % 2 === 0 ? true : false}
                                    mdStyled={index % 3 === 0 ? true : false}
                                />
                            </div>
                        )
                    })}
                    <div className="metaverse__item-wrapper col-md-6 col-lg-4">
                        <div className="metaverse__item-final">
                            We will share more exciting updates as we keep going forward
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Metaverse
