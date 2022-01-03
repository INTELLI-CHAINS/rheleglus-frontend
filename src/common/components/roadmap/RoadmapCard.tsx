import React from 'react'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { IRoadmapItem } from 'types/IRoadmapItem';

import 'assets/styles/components/roadmap/roadmapCard.scss'

interface IRoadmapCardProps {
    card  : IRoadmapItem,
    index : number
}

const RoadmapCard = ({ card, index }: IRoadmapCardProps) => {
    const animationLeft = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }`;
    const animationRight = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }`;

    return (
        <Reveal key={index} keyframes={index % 2? animationRight : animationLeft} duration={1000} fraction={0} triggerOnce>
            <div className="roadmapCard">
                <h3 className="roadmapCard__heading">
                    {card.quarter}
                </h3>
                <ul className="roadmapCard__list">
                    {card.items.map((item: string, index: number) => (
                        <li className="roadmapCard__list-item" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </Reveal >
    )
}

export default RoadmapCard
