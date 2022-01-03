import React from 'react'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import LineageItem from 'common/components/lineages/LineageItem'
import { lineages } from 'store/Lineages'
import { ILineagesItem } from 'types/ILineagesItem'

import 'assets/styles/sections/lineages.scss'

const Lineages = () => {
    const animationLeft = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
  
    to {
        transform: translateX(0);
        opacity: 1;
    }`;
    const animationRight = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
  
    to {
        transform: translateX(0);
        opacity: 1;
    }`;

    return (
        <section className="lineages" id="lineages">
            <div className="lineages-inner">
                <div className="lineages__container container">
                    <h2 className="lineages__title">
                        Lineages
                    </h2>
                    <div className="lineages__items-wrapper">
                        {lineages.map((lineage: ILineagesItem, index: number) => {
                            return (
                                <Reveal key={index} keyframes={index % 2 !== 0 ? animationLeft : animationRight} duration={1500} fraction={0.2} triggerOnce>
                                    <LineageItem
                                        heading={lineage.name}
                                        description={lineage.description}
                                        units={lineage.units}
                                        imagePath={lineage.imagePath}
                                        backgroundPath={lineage.backgroundPath}
                                        reversed={index % 2 !== 0 && true}
                                        tth={index === 2 && true}
                                    />
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lineages
