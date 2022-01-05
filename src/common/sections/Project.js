import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'

import ProjectParameter from 'common/components/project/ProjectParameter'

import CharImage from 'assets/images/project/1.png'
import 'assets/styles/sections/project.scss'
import MintPopup from 'common/components/project/MintPopup'
import ObliqueButton from 'common/components/common/ObliqueButton'
import { getNftAddress } from 'utils/addressHelpers';

const Project = () => {
    const [mintAmount, setmintAmount] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const nftAddress = getNftAddress();
    const [offerLastDate, setofferLastDate] = useState("February 1, 2022 23:00 UTC")

    const calculateTimeLeft = () => {
        var deadline = +new Date(offerLastDate).getTime();
        var now = +new Date().getTime();
        const difference = deadline - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <section className="project" id="project">
            <div className="project__container container">
                <div className="project__countdown">
                    <div className="project__countdown-text">
                        Sale: {offerLastDate}
                    </div>
                    <div className="project__countdown-number">
                        <div className="pc__item">
                            <div className="number">{timeLeft ? (timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days) : '00'}</div>
                            <div className="text">Day</div>
                        </div>
                        <div className="pc__item">
                            <div className="number">{timeLeft ? (timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours) : '00'}</div>
                            <div className="text">Hour</div>
                        </div>
                        <div className="pc__item">
                            <div className="number">{timeLeft ? (timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes) : '00'}</div>
                            <div className="text">Min</div>
                        </div>
                        <div className="pc__item">
                            <div className="number">{timeLeft ? (timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds) : '00'}</div>
                            <div className="text">Sec</div>
                        </div>
                    </div>
                </div>
                <div className="project__content row">

                    <div className="project__text-block col-md-5 col-lg-6">
                        <div className="project__text-content">
                            <h2 className="project__title">
                                Project Rhelegus
                            </h2>
                            <div className="project__text">
                                “If war is madness then Rhelegus is living in the apocalypse” — The True God of Xorbin. 7777 Programmatically generated unique NFTs waiting to be awaken on the ETH Blokchain.
                            </div>

                            <div className="project__lead">
                                <div>
                                    <div className="project__lead-text">
                                        All priced at
                                    </div>
                                    <div className="project__lead-prices">
                                        ETH 0.077
                                    </div>
                                </div>
                                <ObliqueButton text={'Mint Now'} onClick={() => setIsPopupOpen(true)} />
                            </div>
                        </div>
                    </div>

                    <div className="project__image-block d-none d-md-block col-md-7 col-lg-6">
                        <div className="project__image-wrapper">
                            <img src={CharImage} alt="" className="project__image" />
                        </div>
                    </div>

                </div>
                <div className="project__parameters-wrapper">
                    <div className="project__parameters parametersProject">
                        <ProjectParameter value='7777' heading='Total Supply' />
                        <ProjectParameter value='200+' heading='Handdrawn Attributes' />
                        <ProjectParameter value='30' heading='Body Types' />
                        <ProjectParameter value='0.077 ETH' heading='Initial Price' />
                    </div>
                </div>
                <MintPopup isOpen={isPopupOpen} setIsOpen={() => setIsPopupOpen(false)} />
            </div>
        </section>
    )
}

export default Project