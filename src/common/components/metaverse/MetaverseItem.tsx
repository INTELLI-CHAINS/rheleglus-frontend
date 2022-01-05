import React from 'react'

import 'assets/styles/components/metaverse/metaverseItem.scss'

interface IMetaverseItemProps {
    imagePath   : string,
    description : string,
    styled      : boolean,
    mdStyled?  : boolean
}

const MetaverseItem = ({ imagePath, description, styled, mdStyled }: IMetaverseItemProps) => {
    return (
        <div className={`metaverseItem ${styled?'styled':''} ${mdStyled?'md-styled':''}`}>
            <div className="metaverseItem__header">
                <img src={imagePath} alt="" className="metaverseItem__image" />
            </div>
            <h5 className="metaverseItem__description">
                {description}
            </h5>
        </div>
    )
}

export default MetaverseItem
