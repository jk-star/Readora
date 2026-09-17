import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    // Restore logged-in user after page refresh
    useEffect(() => {
        const savedUser = localStorage.getItem('readora-user')

        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    // Login user
    const login = (userData) => {
        setUser(userData)

        localStorage.setItem(
            'readora-user',
            JSON.stringify(userData)
        )
    }

    // Logout user
    const logout = () => {
        setUser(null)

        localStorage.removeItem('readora-user')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
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
