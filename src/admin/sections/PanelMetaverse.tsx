import { doc, getDoc, setDoc } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { db } from 'store/firebase'

enum StateSave {
    success = "success",
    failed = "failed",
    loading = "loading",
    null = ""
}

const PanelMetaverse = () => {
    const [data, setData] = useState<string[] | null>(null)
    const [stateSave, setStateSave] = useState<StateSave>(StateSave.null)

    const handleChangeInput = ( e: React.ChangeEvent<HTMLInputElement>, index: number ) => {
        if (data) {
            let newData = []
            for (let i = 0; i < data.length; i++) {
                newData[i] = data[i];
            }
            newData[index] = e.target.value;
            setData(newData)
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const saveData = async () => {
        setStateSave(StateSave.loading)
        await setDoc(doc(db, "sections-0", "metaverse"), {content : data})
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
            const dataRef = doc(db, 'sections-0', 'metaverse')
            const docSnap = await getDoc(dataRef)
            const newData = await docSnap.data()!.content
            setData(newData);
        }
        fetchData();
    }, [])

    return (
        <section className="panelSec">
            <div className="panelSec__container container">
                <h2 className="panelSec__title">
                    Metaverse
                </h2>
                <div className="panelSec__content-wrapper">
                    {data?.map((item: string, index: number) => (
                        <div className="panelSec__item-wrapper" key={index}>
                            <div className="panelSec__item-index">
                                {index}
                            </div>
                            <label className="panelSec__item">
                                <h5 className="panelSec__item-heading">
                                    Item
                                </h5>
                                <input type="text" className="panelSec__item-input" value={item} onChange={e => handleChangeInput(e, index)} />
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

export default PanelMetaverse
