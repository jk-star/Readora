import { useState } from 'react'
import { Link } from 'react-router'

import { useAuth } from '../../context/AuthContext'

function Register() {
    const { register } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()

        const newErrors = {}

        if (!name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required'
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required'
        } else if (password.length < 6) {
            newErrors.password =
                'Password must be at least 6 characters'
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword =
                'Please confirm your password'
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword =
                'Passwords do not match'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }

        register({
            name,
            email,
            password,
        })

        console.log('Registration successful')
    }

    return (
        <section className="min-h-screen px-4 py-12">
            <div className="mx-auto max-w-md">

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create Account
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Join Readora and start reading.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >

                    {/* Name */}
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="text-left mb-2 block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.name && (
                            <p className="text-left mt-1 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

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
                    <div className="mb-5">
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

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="text-left mb-2 block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            placeholder="Confirm your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />
                        {errors.confirmPassword && (
                            <p className="text-left mt-1 text-sm text-red-600">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                        Register
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{' '}

                        <Link
                            to="/login"
                            className="font-medium text-black hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </section>
    )
}

export default Register
