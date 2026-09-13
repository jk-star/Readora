import BookCard from '../../components/BookCard/BookCard';
import books from '../../data/books'
const Home = () => {

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
                    {
                        books.map((book) => (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                cover={book.cover}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Home
