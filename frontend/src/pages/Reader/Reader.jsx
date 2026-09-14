import { useState } from 'react'
import { ArrowLeft, ArrowRight, Settings, Bookmark } from 'lucide-react'
import { Link, useParams } from 'react-router'
import books from '../../data/books'
import ChapterList from '../../components/ChapterList/ChapterList'
import ReaderSettings from '../../components/ReaderSettings/ReaderSettings'

function Reader() {
    const { id } = useParams()

    const book = books.find(
        (book) => book.id === Number(id)
    )

    const [chapterIndex, setChapterIndex] = useState(0)

    const [showSettings, setShowSettings] = useState(false)
    const [fontSize, setFontSize] = useState('text-base')
    const [theme, setTheme] = useState('light')

    const [isBookmarked, setIsBookmarked] = useState(false)

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

    const chapter = book.chapters[chapterIndex]

    const progress =
        ((chapterIndex + 1) / book.chapters.length) * 100

    return (
        <div className="min-h-screen bg-[#f8f6f1]">

            {/* Reader Container */}
            <div className="mx-auto w-full max-w-4xl">

                {/* Reading Progress */}
                <div className="mb-8">
                    <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                        <span>Reading Progress</span>

                        <span>
                            {Math.round(progress)}%
                        </span>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full bg-black transition-all duration-300"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Reader Header */}
                <header className="border-b border-gray-200 bg-white">
                    <div className="relative flex h-16 items-center justify-between px-4">

                        {/* Back Button */}
                        <Link
                            to={`/books/${book.id}`}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
                        >
                            <ArrowLeft size={18} />

                            Back
                        </Link>

                        {/* Book Title */}
                        <h1 className="text-sm font-semibold text-gray-900">
                            {book.title}
                        </h1>

                        {/* Settings */}
                        <div className="relative">

                            <button
                                type="button"
                                onClick={() =>
                                    setShowSettings(
                                        (value) => !value
                                    )
                                }
                                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                            >
                                <Settings size={20} />
                            </button>

                            {showSettings && (
                                <ReaderSettings
                                    fontSize={fontSize}
                                    setFontSize={setFontSize}
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            )}

                        </div>

                    </div>
                </header>

                {/* Reading Content */}
                <main
                    className={`min-h-screen transition-colors ${theme === 'light'
                        ? 'bg-white text-gray-900'
                        : theme === 'sepia'
                            ? 'bg-[#f4ecd8] text-[#5b4636]'
                            : 'bg-gray-900 text-gray-100'
                        }`}
                >

                    {/* Table of Contents */}
                    <ChapterList
                        chapters={book.chapters}
                        currentChapterIndex={chapterIndex}
                        onChapterSelect={setChapterIndex}
                    />

                    {/* Chapter Content */}
                    <article
                        className={`mt-8 w-full px-4 ${fontSize}`}
                    >

                        {/* Chapter Number */}
                        <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
                            Chapter {chapter.id}
                        </p>

                        {/* Chapter Title */}
                        <div className="mt-4 flex items-center justify-center gap-3">
                            <h2 className="text-3xl font-bold text-gray-900">
                                {chapter.title}
                            </h2>

                            <button
                                type="button"
                                onClick={() =>
                                    setIsBookmarked((value) => !value)
                                }
                                className={`rounded-lg p-2 transition ${isBookmarked
                                    ? 'bg-black text-white'
                                    : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                                title={
                                    isBookmarked
                                        ? 'Remove bookmark'
                                        : 'Bookmark chapter'
                                }
                            >
                                <Bookmark
                                    size={20}
                                    fill={isBookmarked ? 'currentColor' : 'none'}
                                />
                            </button>
                        </div>

                        {/* Chapter Paragraphs */}
                        <div className="mt-10 space-y-6 text-lg leading-8 text-gray-700">

                            {chapter.content.map(
                                (paragraph, index) => (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                )
                            )}

                        </div>

                    </article>

                </main>

                {/* Chapter Navigation */}
                <div className="mt-12 flex items-center justify-between border-t border-gray-200 px-4 pt-8">

                    {/* Previous */}
                    <button
                        type="button"
                        onClick={() =>
                            setChapterIndex(
                                (currentIndex) =>
                                    currentIndex - 1
                            )
                        }
                        disabled={chapterIndex === 0}
                        className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ArrowLeft size={18} />

                        Previous
                    </button>

                    {/* Chapter Counter */}
                    <span className="text-sm text-gray-500">
                        Chapter {chapterIndex + 1} of{' '}
                        {book.chapters.length}
                    </span>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={() =>
                            setChapterIndex(
                                (currentIndex) =>
                                    currentIndex + 1
                            )
                        }
                        disabled={
                            chapterIndex ===
                            book.chapters.length - 1
                        }
                        className="flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next

                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Reader
