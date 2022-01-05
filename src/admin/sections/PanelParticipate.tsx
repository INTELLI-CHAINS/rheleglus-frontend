import { getDoc, doc, setDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { db } from 'store/firebase';

interface IData {
    subtitle: string,
    content: string[],
}

enum StateSave {
    success = "success",
    failed = "failed",
    loading = "loading",
    null = ""
}

const PanelParticipate = () => {
    const [data, setData] = useState<IData | null>(null)
    const [stateSave, setStateSave] = useState<StateSave>(StateSave.null)

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (data) {
            setData({
                ...data,
                subtitle: e.target.value
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeItem = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        if (data) {
            let newItems = []
            for (let i = 0; i < data.content.length; i++) {
                newItems[i] = data.content[i];
            }
            newItems[index] = e.target.value;
            setData({
                ...data,
                content: newItems
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const saveData = async () => {
        setStateSave(StateSave.loading)
        await setDoc(doc(db, "sections-0", "participate"), data)
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
            const dataRef = doc(db, 'sections-0', 'participate');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()
            setData({
                content: newData!.content,
                subtitle: newData!.subtitle
            });

        }
        fetchData();
    }, [])

    return (
        <section className="panelSec">
            <div className="panelSec__container container">
                <h2 className="panelSec__title">
                    Participate
                </h2>
                <div className="panelSec__content-wrapper">
                    <div className="panelSec__item-wrapper">
                        <label className="panelSec__item">
                            <h5 className="panelSec__item-heading">
                                Subtitle
                            </h5>
                            <input type="text" className="panelSec__item-input" value={data?.subtitle} onChange={e => handleChangeTitle(e)} />
                        </label>
                        {data?.content?.map((item: string, index: number) => (
                            <label className="panelSec__item" key={index} style={{ paddingLeft: 20 }}>
                                <div className="panelSec__item-index">
                                    {index}
                                </div>
                                <h5 className="panelSec__item-heading">
                                    Text
                                </h5>
                                <textarea className="panelSec__item-textarea" value={item} onChange={e => handleChangeItem(e, index)} />
                            </label>
                        ))}
                    </div>
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

export default PanelParticipate
