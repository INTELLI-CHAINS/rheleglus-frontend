import React from 'react'

import 'assets/styles/components/ourTeam/ourTeamSlide.scss'

interface IOurTeamSlideProps {
    imagePath   : string
    name        : string
    description : string
}

const OurTeamSlide = ({ imagePath, name, description } : IOurTeamSlideProps) => {
    return (
        <div className="ourTeamSlide">
            <div className="ourTeamSlide__image-wraper">
                <img src={imagePath} alt="" className="ourTeamSlide__image" />
            </div>
            <div className="ourTeamSlide__content">
                <h3 className="ourTeamSlide__name">
                    {name}
                </h3>
                <h5 className="ourTeamSlide__description">
                    {description}
                </h5>
            </div>
        </div>
    )
}

export default OurTeamSlide
