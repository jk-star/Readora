import { useState } from 'react'
import books from '../../data/books'
import BookCard from '../../components/BookCard/BookCard'

function Books() {
    const [search, setSearch] = useState('')

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="min-h-screen px-4 py-12">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        All Books
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Explore our collection of books.
                    </p>

                    {/* Search */}
                    <div className="mt-6">
                        <input
                            type="text"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search books..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />
                    </div>
                </div>

                {/* Books Grid */}
                {filteredBooks.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredBooks.map((book) => (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                cover={book.cover}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            No Books Found
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Try searching with a different title.
                        </p>
                    </div>
                )}

            </div>
        </section>
    )
}

export default Books
