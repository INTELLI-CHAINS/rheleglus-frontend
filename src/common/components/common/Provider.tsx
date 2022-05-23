import React, { createContext, ReactElement, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const AuthContext = createContext<any>(null)

interface Props {
    children: ReactElement
}

const Provider = ({ children }: Props) => {
    const [userId, setUserId] = useState<string | null>(null)

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ userId, setUserId }}>
                    {children}
            </AuthContext.Provider>
        </BrowserRouter>
    )
}

export default Provider