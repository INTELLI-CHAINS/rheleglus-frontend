import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite'

import FAQItem from 'common/components/FAQ/FAQItem'

import 'assets/styles/sections/FAQ.scss'
import { db } from 'store/firebase'

const FAQ = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const [data, setData] = useState<IData[] | null>(null)

    interface IData {
        heading : string,
        text    : string,
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'FAQ');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()!.content.map((item: IData) => ({
                heading: item.heading,
                text: item.text,
            }))
            setData(newData);
        }
        fetchData();
    }, [])

    const handleSetActiveItem = (index : number, activeItem : number | null) => {
        if (index === activeItem) {
            setActiveItem(null)
        } else {
            setActiveItem(index)
        }
    }

    return (
        <section className="FAQ" id="FAQ">
            <div className="FAQ__container container">
                <h2 className="FAQ__title">
                    FAQ
                </h2>
                <div className="FAQ__content">
                    {data?.map(( item : IData, index : number ) => (
                        <div className="FAQ__item-wrapper" key={index}>
                            <FAQItem active={index===activeItem} setActiveItem={() => handleSetActiveItem(index, activeItem)} heading={item.heading} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
