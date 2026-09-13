const BookCard = ({ title, author }) => {
    return (
        <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="flex h-56 items-center justify-center rounded-lg bg-gray-200">
                <span className="text-gray-500">
                    Book Cover
                </span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
                {author}
            </p>
        </div>
    )
}

export default BookCard
