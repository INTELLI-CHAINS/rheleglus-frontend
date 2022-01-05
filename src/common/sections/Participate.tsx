import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite'

import { db } from 'store/firebase'

import Image1 from 'assets/images/participate/1.gif'
import Image2 from 'assets/images/participate/2.gif'
import Image3 from 'assets/images/participate/3.gif'

import 'assets/styles/sections/participate.scss'

const Participate = () => {
    const [data, setData] = useState<IData | null>(null)
    const [I1, I2, I3] = [Image1, Image2, Image3] //eslint-disable-line 

    interface IData {
        subtitle: string,
        content: string[],
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'participate');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data();
            setData({
                subtitle: newData!.subtitle,
                content: newData!.content
            });
        }
        fetchData();
    }, [])

    return (
        <section className="participate" id="participate">
            <div className="participate__container container">
                <h2 className="participate__title">
                    WHY PARTICIPATE?
                </h2>
                <div className="participate__lead">
                    {data?.subtitle}
                </div>
                <div className="participate__content">

                    {data?.content.map((item : string, index : number) => (
                        <div className="participate__item-wrapper" key={index}>
                            <div className="participate__item">
                                <div className="participate__image-wrapper" id="participate__image-wrapper-1">
                                    <img src={eval("I" + (index + 1))} alt="" className="participate__image" />
                                </div>
                                <p className="participate__description">
                                    {item}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Participate
