import React, { useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'common/components/common/Provider';

const PanelAuth = () => {
    const { userId, setUserId } = useContext(AuthContext);
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();
    const Authorize = (e : React.FormEvent) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUserId(user.uid)
                navigate('/admin-panel')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="panelAuth">
            <div className="panelAuth__container container">
                <form action="#" className="panelAuth__form form-panelAuth" onSubmit={e => Authorize(e)}>
                    <label className="form-panelAuth__item">
                        <h5 className="form-panelAuth__item-heading">
                            E-mail
                        </h5>
                        <input type="email" className="form-panelAuth__item-input" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label className="form-panelAuth__item">
                        <h5 className="form-panelAuth__item-heading">
                            Password
                        </h5>
                        <input type="password" className="form-panelAuth__item-input" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div className="panelAuth__submit-wrapper">
                        <button className="panelAuth__submit">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PanelAuth;