import { ArrowLeft, Settings } from 'lucide-react'
import { Link, useParams } from 'react-router'
import books from '../../data/books'

function Reader() {
    const { id } = useParams()

    const book = books.find(
        (book) => book.id === Number(id)
    )

    if (!book) {
        return (
            <div className="min-h-screen px-4 py-16 text-center">
                <h1 className="text-3xl font-bold">
                    Book Not Found
                </h1>

                <Link
                    to="/books"
                    className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white"
                >
                    Back to Books
                </Link>
            </div>
        )
    }

    const chapter = book.chapters[0]

    return (
        <div className="min-h-screen bg-[#f8f6f1]">

            {/* Reader Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">

                    <Link
                        to={`/books/${book.id}`}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </Link>

                    <h1 className="text-sm font-semibold text-gray-900">
                        {book.title}
                    </h1>

                    <button
                        type="button"
                        className="rounded-full p-2 hover:bg-gray-100"
                    >
                        <Settings size={20} />
                    </button>

                </div>
            </header>

            {/* Reading Content */}
            <main className="px-4 py-12">
                <article className="mx-auto max-w-3xl">

                    <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
                        Chapter {chapter.id}
                    </p>

                    <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
                        {chapter.title}
                    </h2>

                    <div className="mt-10 space-y-6 text-lg leading-8 text-gray-700">

                        {chapter.content.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}

                    </div>

                </article>
            </main>

        </div>
    )
}

export default Reader
