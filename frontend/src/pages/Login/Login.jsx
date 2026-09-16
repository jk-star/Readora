import { useState } from 'react'
import { Link } from 'react-router'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

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
                            className="mb-2 block text-sm font-medium text-gray-700"
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

                    </div>


                    {/* Password */}

                    <div className="mb-6">

                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-700"
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
