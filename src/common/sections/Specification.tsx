import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore/lite"

import { db } from 'store/firebase'
import CharImage from 'assets/images/specification/1.gif'
import ObliqueLink from 'common/components/common/ObliqueLink'

import 'assets/styles/sections/specification.scss'

const Specification = () => {
    const [data, setData] = useState<IData | null>(null)

    interface IData {
        subtitle: string,
        lead: string,
        text: string
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'specification');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()
            setData({
                subtitle: newData!.subtitle,
                lead: newData!.lead,
                text: newData!.text
            });
        }
        fetchData();
    }, [])

    return (
        <section className="specification" id="specification">
            <div className="specification__container container">
                <div className="specification__content-wrapper row">
                    <div className="specification__content col-lg-6">
                        <h2 className="specification__title">
                            SPECIFICATION
                        </h2>
                        <h3 className="specification__subtitle">
                            {data && data.subtitle}
                        </h3>
                        <div className="specification__lead">
                            {data && data.lead}
                        </div>
                        <p className="specification__text">
                            {data && data.text}
                        </p>
                        <div className="specification__button-wrapper">
                            <ObliqueLink text='EXPLORE LINEAGES' linkTo={'#lineages'} />
                        </div>
                    </div>
                    <div className="specification__image-block col-lg-6">
                        <div className="specification__image-wrapper">
                            <img src={CharImage} alt="" className="specification__image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification
