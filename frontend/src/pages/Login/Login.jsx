import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'


function Login() {

    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()

        const newErrors = {}

        if (!email.trim()) {
            newErrors.email = 'Email is required'
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }

        login({
            name: email.split('@')[0],
            email: email,
        })

        navigate('/')

        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <section className="min-h-screen px-4 py-12">

            <div className="mx-auto max-w-md">

                {/* Header */}

                <div className="mb-8 text-center">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Login to continue reading on Readora.
                    </p>

                </div>


                {/* Login Form */}

                <form
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >

                    {/* Email */}

                    <div className="mb-5">

                        <label
                            htmlFor="email"
                            className="text-left mb-2 block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.email && (
                            <p className="text-left mt-1 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}

                    </div>


                    {/* Password */}

                    <div className="mb-6">

                        <label
                            htmlFor="password"
                            className="text-left mb-2 block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.password && (
                            <p className="text-left mt-1 text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                        Login
                    </button>


                    {/* Register */}

                    <p className="mt-6 text-center text-sm text-gray-600">

                        Don't have an account?{' '}

                        <Link
                            to="/register"
                            className="font-medium text-black hover:underline"
                        >
                            Register
                        </Link>

                    </p>

                </form>

            </div>

        </section>
    )
}

export default Login
