const BookCard = ({ title, author, cover }) => {
    return (
        <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={cover}
                    alt={title}
                    className="h-56 w-full object-cover"
                />
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
