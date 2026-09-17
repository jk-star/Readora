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

    // Restore logged-in user when application starts
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

    // Register
    const register = (userData) => {
        localStorage.setItem(
            'readora-registered-user',
            JSON.stringify(userData)
        )
    }

    // Authenticate registered user
    const authenticate = (email, password) => {
        const savedUser = localStorage.getItem(
            'readora-registered-user'
        )

        if (!savedUser) {
            return {
                success: false,
                message: 'No registered user found',
            }
        }

        const registeredUser = JSON.parse(savedUser)

        if (
            email !== registeredUser.email ||
            password !== registeredUser.password
        ) {
            return {
                success: false,
                message: 'Invalid email or password',
            }
        }

        login({
            name: registeredUser.name,
            email: registeredUser.email,
        })

        return {
            success: true,
        }
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
                register,
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
