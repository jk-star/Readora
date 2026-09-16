import { BookOpen, Search, User } from 'lucide-react'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <BookOpen size={24} />

                    <span className="text-xl font-bold">
                        Readora
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <NavLink
                        to="/"
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/books"
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Books
                    </NavLink>

                    <NavLink
                        to="/categories"
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Categories
                    </NavLink>

                    <NavLink
                        to="/library"
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Library
                    </NavLink>

                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <button
                        type="button"
                        className="rounded-full p-2 hover:bg-gray-100"
                    >
                        <Search size={20} />
                    </button>

                    {/* User */}
                    <button
                        type="button"
                        className="rounded-full p-2 hover:bg-gray-100"
                    >
                        <User size={20} />
                    </button>

                </div>

            </div>
        </header>
    )
}

export default Header
