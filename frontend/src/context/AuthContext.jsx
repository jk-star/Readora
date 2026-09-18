import { createContext, useContext, useState } from 'react'
import api from '../api/axios'

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

    const authenticate = async (email, password) => {
        try {
            const response = await api.post('/login', {
                email,
                password,
            })

            const data = response.data

            if (!data.success) {
                return {
                    success: false,
                    message: data.message || 'Login failed',
                }
            }

            login(data.user, data.token)

            return {
                success: true,
                user: data.user,
                token: data.token,
            }
        } catch (error) {
            console.error('Login error:', error)

            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    'Unable to connect to the server',
            }
        }
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
                authenticate,
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
