import { getDoc, doc, setDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { db } from 'store/firebase';

interface IData {
    subtitle : string,
    lead     : string,
    text     : string
}

enum StateSave {
    success = "success",
    failed = "failed",
    loading = "loading",
    null = ""
}

const PanelSpecification = () => {
    const [data, setData] = useState<IData | null>(null)
    const [stateSave, setStateSave] = useState<StateSave>(StateSave.null)

    const handleChangeSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (data) {
            setData({
                ...data,
                subtitle: e.target.value
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeLead= (e: React.ChangeEvent<HTMLInputElement>) => {
        if (data) {
            setData({
                ...data,
                lead: e.target.value
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (data) {
            setData({
                ...data,
                text: e.target.value
            })
        } else {
            console.log("The data you trying to change does not exist");
        }
    }

    const saveData = async () => {
        setStateSave(StateSave.loading)
        await setDoc(doc(db, "sections-0", "specification"), data)
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
            const dataRef = doc(db, 'sections-0', 'specification');
            const docSnap = await getDoc(dataRef);
            const newData = docSnap.data()
            setData({
                lead    : newData!.lead,
                subtitle: newData!.subtitle,
                text    : newData!.text
            });

        }
        fetchData();
    }, [])

    return (
        <section className="panelSec">
            <div className="panelSec__container container">
                <h2 className="panelSec__title">
                    Specification
                </h2>
                <div className="panelSec__content-wrapper">
                    <div className="panelSec__item-wrapper">
                        <label className="panelSec__item">
                            <h5 className="panelSec__item-heading">
                                Subtitle
                            </h5>
                            <input type="text" className="panelSec__item-input" value={data?.subtitle} onChange={e => handleChangeSubtitle(e)} />
                        </label>
                        <label className="panelSec__item">
                            <h5 className="panelSec__item-heading">
                                Lead
                            </h5>
                            <input type="text" className="panelSec__item-input" value={data?.lead} onChange={e => handleChangeLead(e)} />
                        </label>
                        <label className="panelSec__item">
                            <h5 className="panelSec__item-heading">
                                Text
                            </h5>
                            <textarea className="panelSec__item-textarea" value={data?.text} onChange={e => handleChangeText(e)} />
                        </label>
                    </div>
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

export default PanelSpecification
