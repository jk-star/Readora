import BookCard from '../../components/BookCard/BookCard';
const Home = () => {
    const books = [
        {
            id: 1,
            title: 'Atomic Habits',
            author: 'James Clear',
        },
        {
            id: 2,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
        },
        {
            id: 3,
            title: 'Rich Dad Poor Dad',
            author: 'Robert Kiyosaki',
        },
        {
            id: 4,
            title: 'The Psychology of Money',
            author: 'Morgan Housel',
        },
    ]
    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Featured Books
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Explore some of our popular books.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {books.map((book) => (
                        <BookCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Home
