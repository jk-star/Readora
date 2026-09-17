import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Restore user when application starts
    useEffect(() => {
        const savedUser = localStorage.getItem('readora-user')

        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }

        setLoading(false)
    }, [])

    // Login
    const login = (userData) => {
        setUser(userData)

        localStorage.setItem(
            'readora-user',
            JSON.stringify(userData)
        )
    }

    // Logout
    const logout = () => {
        setUser(null)

        localStorage.removeItem('readora-user')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
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
