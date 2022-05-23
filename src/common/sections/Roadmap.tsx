import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite'

import RoadmapCard from 'common/components/roadmap/RoadmapCard'
import { db } from 'store/firebase'

import BgImage from "assets/images/roadmap/bg.gif"
import 'assets/styles/sections/roadmap.scss'

const Roadmap = () => {
    const [data, setData] = useState<IData[] | null>(null)

    interface IData {
        heading : string,
        items   : string[],
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'roadmap');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()!.content.map((item: IData) => ({
                heading: item.heading,
                items: item.items,
            }))
            setData(newData);
        }
        fetchData();
    }, [])

    return (
        <section className="roadmap" id="roadmap">
            <div className="roadmap__sticky-background-wrapper">
                <div className="roadmap__sticky-background">
                    <img src={BgImage} alt="" className="roadmap__sticky-backgroundImage" />
                </div>
            </div>
            <div className="roadmap__container-wrapper">
                <div className="roadmap__container container">
                    <h2 className="roadmap__title">
                        Roadmap
                    </h2>
                    <h3 className="roadmap__subtitle">
                        Here's how our project is planned for the next quarters:
                    </h3>
                    <div className="roadmap__content">
                        {data?.map((card: IData, index: number) => (
                            <div className={`roadmap__card-block row ${index % 2 ? 'reversed' : ''}`} key={index}>
                                <div className="roadmap__card-wrapper col-lg-6">
                                    <RoadmapCard card={card} index={index} />
                                </div>
                                <div className="roadmap__card-spacing col-lg-6" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap
