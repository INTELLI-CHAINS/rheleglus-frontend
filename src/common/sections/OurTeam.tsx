import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite';

import OurTeamItem from 'common/components/ourTeam/OurTeamItem';
import { db } from 'store/firebase';

import { Image1, Image2, Image3, Image4, Image5, Image6 } from 'assets/images/team/index'
import 'assets/styles/sections/ourTeam.scss'

const OurTeam = () => {
    const [data, setData] = useState<IData | null>(null)
    const [I1, I2, I3, I4, I5, I6] = [Image1, Image2, Image3, Image4, Image5, Image6] //eslint-disable-line 

    interface IData {
        lead: string,
        items: ITeammate[],
    }

    interface ITeammate {
        name : string,
        text : string
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'team');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data();
            setData({
                lead: newData!.lead,
                items: newData!.items
            });
        }
        fetchData();
    }, [])

    return (
        <section className="ourTeam" id="ourTeam">
            <div className="ourTeam__container container">
                <h2 className="ourTeam__title">
                    OUR TEAM
                </h2>
                <p className="ourTeam__lead">
                    {data?.lead}
                </p>
                <div className="ourTeam__content">
                    {data?.items?.map((item : ITeammate, index : number) => (
                        <div key={index} className="ourTeam__item-wrapper">
                            <OurTeamItem imagePath={eval("I" + (index + 1))} name={item.name} description={item.text}  />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
