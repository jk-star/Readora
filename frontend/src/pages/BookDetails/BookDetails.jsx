import { useParams } from 'react-router'

function BookDetails() {
    const { id } = useParams()

    return (
        <div className="mx-auto max-w-4xl px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900">
                Book Details
            </h1>

            <p className="mt-4 text-gray-600">
                Selected Book ID: {id}
            </p>
        </div>
    )
}

export default BookDetails
