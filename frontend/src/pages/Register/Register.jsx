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
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newErrors = {}

        // Name validation
        if (!name.trim()) {
            newErrors.name = 'Name is required'
        }

        // Email validation
        if (!email.trim()) {
            newErrors.email = 'Email is required'
        }

        // Password validation
        if (!password.trim()) {
            newErrors.password = 'Password is required'
        } else if (password.length < 6) {
            newErrors.password =
                'Password must be at least 6 characters'
        }

        // Confirm password validation
        if (!confirmPassword.trim()) {
            newErrors.confirmPassword =
                'Please confirm your password'
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword =
                'Passwords do not match'
        }

        setErrors(newErrors)
        setSuccessMessage('')

        // Stop if validation fails
        if (Object.keys(newErrors).length > 0) {
            return
        }

        setIsLoading(true)

        const result = await register({
            name,
            email,
            password,
        })

        setIsLoading(false)

        // Backend/API error
        if (!result.success) {
            setErrors({
                email: result.message,
            })

            return
        }

        // Registration successful
        setSuccessMessage(
            result.message || 'Registration successful!'
        )

        // Clear form
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors({})
    }

    return (
        <section className="min-h-screen px-4 py-12">
            <div className="mx-auto max-w-md">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create Account
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Join Readora and start reading.
                    </p>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <p className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                        {successMessage}
                    </p>
                )}

                {/* Register Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >

                    {/* Name */}
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-2 block text-left text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value)

                                setErrors((prev) => ({
                                    ...prev,
                                    name: '',
                                }))

                                setSuccessMessage('')
                            }}
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.name && (
                            <p className="mt-1 text-left text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-left text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)

                                setErrors((prev) => ({
                                    ...prev,
                                    email: '',
                                }))

                                setSuccessMessage('')
                            }}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.email && (
                            <p className="mt-1 text-left text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="mb-2 block text-left text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)

                                setErrors((prev) => ({
                                    ...prev,
                                    password: '',
                                }))

                                setSuccessMessage('')
                            }}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.password && (
                            <p className="mt-1 text-left text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="mb-2 block text-left text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => {
                                setConfirmPassword(event.target.value)

                                setErrors((prev) => ({
                                    ...prev,
                                    confirmPassword: '',
                                }))

                                setSuccessMessage('')
                            }}
                            placeholder="Confirm your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                        {errors.confirmPassword && (
                            <p className="mt-1 text-left text-sm text-red-600">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>

                    {/* Login Link */}
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
