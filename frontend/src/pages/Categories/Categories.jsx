import { Link } from 'react-router'
import books from '../../data/books'

function Categories() {
    const categories = [...new Set(books.map((book) => book.category))]

    return (
        <section className="min-h-screen px-4 py-12">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Categories
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Explore books by category.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => {
                        const bookCount = books.filter(
                            (book) => book.category === category
                        ).length

                        return (
                            <Link
                                key={category}
                                to={`/books?category=${encodeURIComponent(category)}`}
                                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {category}
                                </h2>

                                <p className="mt-2 text-gray-600">
                                    {bookCount}{' '}
                                    {bookCount === 1 ? 'Book' : 'Books'}
                                </p>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Categories
