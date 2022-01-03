import React from 'react'

import 'assets/styles/components/lineages/lineageItem.scss'
import { url } from 'inspector'

interface ILineageItemProps {
    heading        : string,
    description    : string,
    units          : number,
    imagePath      : string,
    backgroundPath : string,
    reversed       : boolean,
    tth            : boolean
}

const LineageItem = ({ heading, description, units, imagePath, backgroundPath, reversed, tth }: ILineageItemProps) => {

    return (
        <div className={`lineageItem ${reversed ? 'reversed' : ''} ${tth ? 'tth' : ''} row`}>
            <div className="lineageItem__content col-lg-6 col-hg-7">
                <h3 className="lineageItem__heading">
                    {heading}
                </h3>
                <p className="lineageItem__description">
                    {description}
                </p>
                <h4 className="lineageItem__units">
                    Total units : {units}
                </h4>
            </div>
            <div className="lineageItem__image-block col-lg-6 col-hg-5" >
                <div className="lineageItem__image-wrapper" >
                    <img src={imagePath} alt="" className="lineageItem__image" />
                </div>
                <div className="lineageItem__background-image" style={{backgroundImage: `url(${backgroundPath})`}} />
            </div>
        </div>
    )
}

export default LineageItem
