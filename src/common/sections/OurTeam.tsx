import React from 'react'

import { teammates } from 'store/Team'

import 'assets/styles/sections/ourTeam.scss'
import OurTeamItem from 'common/components/ourTeam/OurTeamItem';

const OurTeam = () => {

    return (
        <section className="ourTeam" id="ourTeam">
            <div className="ourTeam__container container">
                <h2 className="ourTeam__title">
                    OUR TEAM
                </h2>
                <p className="ourTeam__lead">
                    Our Team consists of 6 people working their @$$es off from different parts of the world. We might be multinational but the love for NFTs unites all 6 of us. Also pizzas.
                </p>
                <div className="ourTeam__content">
                    {teammates.map((item, index : number) => (
                        <div key={index} className="ourTeam__item-wrapper">
                            <OurTeamItem imagePath={item.imagePath} name={item.name} description={item.description}  />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
