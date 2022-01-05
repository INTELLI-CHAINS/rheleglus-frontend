import React, { useEffect, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore/lite'

import { db } from 'store/firebase'

interface IData {
    heading: string,
    text: string,
    units: number
}

enum StateSave {
    success = "success",
    failed = "failed",
    loading = "loading",
    null = ""
}

const PanelLineages = () => {
    const [data, setData] = useState<IData[] | null>(null)
    const [stateSave, setStateSave] = useState<StateSave>(StateSave.null)

    const handleChangeHeading = ( e: React.ChangeEvent<HTMLInputElement>, index: number ) => {
        if (data) {
            let newData = []
            for (let i = 0; i < data.length; i++) {
                newData[i] = data[i];
            }
            newData[index].heading = e.target.value;
            setData(newData)
        } else {
            console.log("The data you trying to change does not exist");
        }
    }
    
    const handleChangeText = ( e: React.ChangeEvent<HTMLTextAreaElement>, index: number ) => {
        if (data) {
            let newData = []
            for (let i = 0; i < data.length; i++) {
                newData[i] = data[i];
            }
            newData[index].text = e.target.value;
            setData(newData)
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeUnits = ( e: React.ChangeEvent<HTMLInputElement>, index: number ) => {
        if (data) {
            let newData = []
            for (let i = 0; i < data.length; i++) {
                newData[i] = data[i];
            }
            newData[index].units = parseInt(e.target.value);
            setData(newData)
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const saveData = async () => {
        setStateSave(StateSave.loading)
        await setDoc(doc(db, "sections-0", "lineages"), {content : data})
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
            const dataRef = doc(db, 'sections-0', 'lineages');
            const docSnap = await getDoc(dataRef);
            const newData = await docSnap.data()!.content.map((item: IData) => ({
                heading: item.heading,
                text: item.text,
                units: item.units
            }))
            setData(newData);
        }
        fetchData();
    }, [])

    return (
        <section className="panelSec">
            <div className="panelSec__container container">
                <h2 className="panelSec__title">
                    Lineages
                </h2>
                <div className="panelSec__content-wrapper">
                    {data?.map((item: IData, index: number) => (
                        <div className="panelSec__item-wrapper" key={index}>
                            <div className="panelSec__item-index">
                                {index}
                            </div>
                            <label className="panelSec__item">
                                <h5 className="panelSec__item-heading">
                                    Heading
                                </h5>
                                <input type="text" className="panelSec__item-input" value={item.heading} onChange={e => handleChangeHeading(e, index)} />
                            </label>
                            <label className="panelSec__item" style={{paddingLeft : 20}}>
                                <h5 className="panelSec__item-heading">
                                    Text
                                </h5>
                                <textarea className="panelSec__item-textarea" value={item.text} onChange={e => handleChangeText(e, index)} />
                            </label>
                            <label className="panelSec__item">
                                <h5 className="panelSec__item-heading">
                                    Units
                                </h5>
                                <input type="number" className="panelSec__item-input" value={item.units} onChange={e => handleChangeUnits(e, index)} />
                            </label>
                        </div>
                    ))}
                    <div className="panelSec__footer">
                    <div className={`panelSec__result-text ${ stateSave }`}>
                            {
                                {
                                    "failed" : "Failed!",
                                    "success" : "Success!",
                                    "loading" : "Loading...",
                                    "" : "",
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

export default PanelLineages
