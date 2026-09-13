import { Link, useParams } from 'react-router'
import books from '../../data/books'

function BookDetails() {
    const { id } = useParams()

    const book = books.find(
        (book) => book.id === Number(id)
    )

    if (!book) {
        return (
            <div className="mx-auto max-w-4xl px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    Book Not Found
                </h1>

                <Link
                    to="/books"
                    className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                >
                    Back to Books
                </Link>
            </div>
        )
    }

    return (
        <main className="px-4 py-16">
            <div className="mx-auto max-w-5xl">

                <div className="grid gap-10 md:grid-cols-2">

                    {/* Book Cover */}
                    <div className="flex justify-center">
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="w-64 rounded-xl object-cover shadow-lg"
                        />
                    </div>

                    {/* Book Information */}
                    <div className="flex flex-col justify-center">

                        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                            {book.category}
                        </p>

                        <h1 className="mt-3 text-4xl font-bold text-gray-900">
                            {book.title}
                        </h1>

                        <p className="mt-3 text-lg text-gray-600">
                            by {book.author}
                        </p>

                        <p className="mt-6 leading-7 text-gray-600">
                            {book.description}
                        </p>

                        <Link
                            to={`/reader/${book.id}`}
                            className="mt-8 inline-block w-fit rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                        >
                            Start Reading
                        </Link>

                    </div>

                </div>

            </div>
        </main>
    )
}

export default BookDetails
