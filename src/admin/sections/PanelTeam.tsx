import { doc, getDoc, setDoc } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { db } from 'store/firebase'

interface IData {
    lead: string,
    items: ITeammate[]
}

interface ITeammate {
    name: string,
    text: string
}

enum StateSave {
    success = "success",
    failed = "failed",
    loading = "loading",
    null = ""
}

const PanelTeam = () => {
    const [data, setData] = useState<IData | null>(null)
    const [stateSave, setStateSave] = useState<StateSave>(StateSave.null)

    const handleChangeLead = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (data) {
            setData({
                ...data,
                lead: e.target.value
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (data) {
            let newItems: ITeammate[] = [...data.items]
            newItems[index].name = e.target.value
            setData({
                ...data,
                items: newItems
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (data) {
            let newItems: ITeammate[] = [...data.items]
            newItems[index].text = e.target.value
            setData({
                ...data,
                items: newItems
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const saveData = async () => {
        setStateSave(StateSave.loading)
        await setDoc(doc(db, "sections-0", "team"), data)
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
            const dataRef = doc(db, 'sections-0', 'team');
            const docSnap = await getDoc(dataRef);
            const newData = await docSnap.data()
            setData({
                lead: newData!.lead,
                items: newData!.items
            });
        }
        fetchData();
    }, [])

    return (
        <section className="panelSec">
            <div className="panelSec__container container">
                <h2 className="panelSec__title">
                    Team
                </h2>
                <div className="panelSec__content-wrapper">
                    <div className="panelSec__item-wrapper">
                        <label className="panelSec__item">
                            <h5 className="panelSec__item-heading">
                                Lead
                            </h5>
                            <textarea className="panelSec__item-textarea" value={data?.lead} onChange={e => handleChangeLead(e)} />
                        </label>
                    </div>
                    {data?.items.map((item: ITeammate, index: number) => (
                        <div className="panelSec-item-wrapper" style={{ paddingLeft: 20 }} key={index}>
                            <div className="panelSec__item-index">
                                {index}
                            </div>
                            <div className="panelSec-item-wrapper">
                                <label className="panelSec__item" >
                                    <h5 className="panelSec__item-heading">
                                        Name
                                    </h5>
                                    <input type="text" className="panelSec__item-input" value={item.name} onChange={e => handleChangeName(e, index)} />
                                </label>
                                <label className="panelSec__item" style={{ paddingLeft: 20 }}>
                                    <h5 className="panelSec__item-heading">
                                        text
                                    </h5>
                                    <input type="text" className="panelSec__item-input" value={item.text} onChange={e => handleChangeText(e, index)} />
                                </label>
                            </div>
                        </div>
                    ))}
                    <div className="panelSec__footer" style={{ paddingTop: 20 }}>
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

export default PanelTeam
