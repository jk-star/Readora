import { useParams } from 'react-router'
import books from '../../data/books'

function BookDetails() {
    const { id } = useParams()

    const book = books.find(
        (book) => book.id === Number(id)
    )

    return (
        <div className="mx-auto max-w-4xl px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900">
                {book.title}
            </h1>

            <p className="mt-2 text-gray-600">
                {book.author}
            </p>

            <img
                src={book.cover}
                alt={book.title}
                className="mt-8 h-80 w-56 rounded-lg object-cover"
            />
        </div>
    )
}

export default BookDetails
