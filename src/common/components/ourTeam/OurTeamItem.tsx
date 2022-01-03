import React from 'react'
import 'assets/styles/components/ourTeam/ourTeamItem.scss'

interface IOurTeamItemProps {
    imagePath   : string,
    name        : string,
    description : string
}

const OurTeamItem = ({ imagePath, name, description } : IOurTeamItemProps) => {
    return (
        <div className="ourTeamItem">
            <div className="ourTeamItem__image-wrapper">
                <img src={imagePath} alt="" className="ourTeamItem__image" />
            </div>
            <div className="ourTeamItem__info">
                <h3 className="ourTeamItem__info-name">
                    {name}
                </h3>
                <h4 className="ourTeamItem__info-description">
                    {description}
                </h4>
            </div>
        </div>
    )
}

export default OurTeamItem
