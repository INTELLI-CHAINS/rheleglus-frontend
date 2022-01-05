import { getDoc, doc, setDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { db } from 'store/firebase';

interface IData {
    heading: string,
    items: string[],
}

enum StateSave {
    success = "success",
    failed = "failed",
    loading = "loading",
    null = ""
}

const PanelRoadmap = () => {
    const [data, setData] = useState<IData[] | null>(null)
    const [stateSave, setStateSave] = useState<StateSave>(StateSave.null)

    const handleChangeHeading = (e: React.ChangeEvent<HTMLInputElement>, index : number) => {
        if (data) {
            let newData : IData[] = [...data]
            newData[index].heading = e.target.value
            setData(newData)
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeItem = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, indexItem : number) => {
        if (data) {
            let newData : IData[] = [...data]
            newData[index].items[indexItem] = e.target.value
            setData(newData)
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const saveData = async () => {
        setStateSave(StateSave.loading)
        await setDoc(doc(db, "sections-0", "roadmap"), {content : data})
            .then(res => {
                console.log("Ok");
                setStateSave(StateSave.success)
            })
            .catch(err => {
                console.log("Not OK");
                setStateSave(StateSave.failed)
            });
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = doc(db, 'sections-0', 'roadmap');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()!.content.map(((item : IData) => ({
                heading: item!.heading,
                items: item!.items,
            })))
            setData(newData);

        }
        fetchData();
    }, [])

    return (
        <section className="panelSec">
            <div className="panelSec__container container">
                <h2 className="panelSec__title">
                    Roadmap
                </h2>
                <div className="panelSec__content-wrapper">
                    {data?.map((card : IData, index : number) => (
                        <div className="panelSec__item-wrapper" key={index}>
                            <label className="panelSec__item">
                                <h5 className="panelSec__item-heading">
                                    Subtitle
                                </h5>
                                <input type="text" className="panelSec__item-input" value={card?.heading} onChange={e => handleChangeHeading(e, index)} />
                            </label>
                            {card?.items?.map((item: string, indexItem: number) => (
                                <label className="panelSec__item" key={indexItem} style={{ paddingLeft: 20 }}>
                                    <div className="panelSec__item-index">
                                        {indexItem}
                                    </div>
                                    <h5 className="panelSec__item-heading">
                                        Text
                                    </h5>
                                    <textarea className="panelSec__item-textarea" value={item} onChange={e => handleChangeItem(e, index, indexItem)} />
                                </label>
                            ))}
                        </div>
                    ))}
                    <div className="panelSec__footer">
                        <div className={`panelSec__result-text ${stateSave}`}>
                            {
                                {
                                    "failed": "Failed!",
                                    "success": "Success!",
                                    "loading": "Loading...",
                                    "": "",
                                }[stateSave]
                            }
                        </div>
                        <button className="panelSec__save" onClick={() => saveData()}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PanelRoadmap
