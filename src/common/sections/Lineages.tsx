import { useEffect, useState } from 'react'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { doc, getDoc } from 'firebase/firestore/lite';

import LineageItem from 'common/components/lineages/LineageItem'
import { db } from 'store/firebase';

import { Image1, Image2, Image3, Image4, Image5 } from 'assets/images/lineages';
import { Bg1Image, Bg2Image, Bg3Image, Bg4Image, Bg5Image } from 'assets/images/lineages';

import 'assets/styles/sections/lineages.scss'

const Lineages = () => {
    const [data, setData] = useState<IData[] | null>(null)
    const [I1, I2, I3, I4, I5] = [ Image1, Image2, Image3, Image4, Image5 ] //eslint-disable-line 
    const [BG1, BG2, BG3, BG4, BG5] = [ Bg1Image, Bg2Image, Bg3Image, Bg4Image, Bg5Image ] //eslint-disable-line 

    interface IData {
        heading : string,
        text    : string,
        units   : number
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'lineages');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()!.content.map((item: IData) => ({
                heading: item.heading,
                text: item.text,
                units: item.units,
            }))
            setData(newData);
        }
        fetchData();
    }, [])

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
                        {data?.map((item: IData, index: number) => {
                            return (
                                <Reveal key={index} keyframes={index % 2 !== 0 ? animationLeft : animationRight} duration={1500} fraction={0.2} triggerOnce>
                                    <LineageItem
                                        heading={item.heading}
                                        description={item.text}
                                        units={item.units}
                                        imagePath={eval("I" + (index + 1))}
                                        backgroundPath={eval("BG" + (index + 1))}
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
