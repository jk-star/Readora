import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('readora_user')

        return savedUser ? JSON.parse(savedUser) : null
    })

    const [token, setToken] = useState(() => {
        return localStorage.getItem('readora_token')
    })

    const login = (userData, jwtToken) => {
        setUser(userData)
        setToken(jwtToken)

        localStorage.setItem(
            'readora_user',
            JSON.stringify(userData)
        )

        localStorage.setItem(
            'readora_token',
            jwtToken
        )
    }

    const logout = () => {
        setUser(null)
        setToken(null)

        localStorage.removeItem('readora_user')
        localStorage.removeItem('readora_token')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }
