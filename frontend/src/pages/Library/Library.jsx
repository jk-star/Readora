import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import books from '../../data/books'
import { Bookmark } from 'lucide-react'

function Library() {
    const [bookmarkedChapters, setBookmarkedChapters] = useState({})

    useEffect(() => {
        const savedBookmarks =
            localStorage.getItem('readora-bookmarks')

        if (savedBookmarks) {
            setBookmarkedChapters(
                JSON.parse(savedBookmarks)
            )
        }
    }, [])

    const savedChapters = []

    books.forEach((book) => {
        book.chapters.forEach((chapter) => {
            const bookmarkKey = `${book.id}-${chapter.id}`

            if (bookmarkedChapters[bookmarkKey]) {
                savedChapters.push({
                    book,
                    chapter,
                })
            }
        })
    })

    const removeBookmark = (bookId, chapterId) => {
        const bookmarkKey = `${bookId}-${chapterId}`

        setBookmarkedChapters((current) => {
            const updated = { ...current }

            delete updated[bookmarkKey]

            localStorage.setItem(
                'readora-bookmarks',
                JSON.stringify(updated)
            )

            return updated
        })
    }

    return (
        <section className="min-h-screen px-4 py-12">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        My Library
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Your bookmarked chapters.
                    </p>
                </div>

                {/* Empty State */}
                {savedChapters.length === 0 ? (
                    <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            No Bookmarks Yet
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Bookmark a chapter while reading to
                            see it here.
                        </p>

                        <Link
                            to="/books"
                            className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
                        >
                            Explore Books
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {savedChapters.map(
                            ({ book, chapter }) => (
                                <div
                                    key={`${book.id}-${chapter.id}`}
                                    className="rounded-xl border border-gray-200 bg-white p-6"
                                >
                                    <p className="text-sm text-gray-500">
                                        {book.title}
                                    </p>

                                    <h2 className="mt-2 text-xl font-semibold text-gray-900">
                                        {chapter.title}
                                    </h2>

                                    <Link
                                        to={`/reader/${book.id}`}
                                        className="mt-5 inline-block text-sm font-medium text-gray-700 hover:text-black"
                                    >
                                        Continue Reading →
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeBookmark(book.id, chapter.id)
                                        }
                                        className="mt-4 flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                    >
                                        <Bookmark size={16} />
                                        Remove Bookmark
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                )}

            </div>
        </section>
    )
}

export default Library
