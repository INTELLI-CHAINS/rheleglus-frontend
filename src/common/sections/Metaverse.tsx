import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite'

import MetaverseItem from 'common/components/metaverse/MetaverseItem'
import { db } from 'store/firebase'

import { Image1, Image2, Image3, Image4 } from 'assets/images/metaverse/index'
import 'assets/styles/sections/metaverse.scss'

const Metaverse = () => {
    const [data, setData] = useState<string[] | null>(null)
    const [I1, I2, I3, I4] = [Image1, Image2, Image3, Image4] //eslint-disable-line 

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'metaverse');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()!.content
            setData(newData);
        }
        fetchData();
    }, [])

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
                    {data?.map((item: string, index: number) => {
                        return (
                            <div className="metaverse__item-wrapper col-md-6 col-lg-4" key={index}>
                                <MetaverseItem 
                                    imagePath={eval("I" + (index + 1))} 
                                    description={item} 
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
                <div className="metaverse__button-wrapper">
                    <a href="https://game.riseofrhelegus.com/" className="metaverse__button-link">
                        Explore rise of rhelegus game
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Metaverse
