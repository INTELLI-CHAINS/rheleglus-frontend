import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminPanel from 'AdminPanel';
import PanelAuth from 'admin/PanelAuth';
import { AuthContext } from 'common/components/common/Provider';
import App from 'App';

const AppWrapper = () => {
    const { userId } = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<PanelAuth />} />
            <Route path="admin-panel" element={userId ? <AdminPanel /> : <PanelAuth />} />
        </Routes>
    )
}

export default AppWrapper
