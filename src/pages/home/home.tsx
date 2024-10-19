import { useEffect, useState } from 'react';

import './home.css';

function Home() {
    const [books, setBooks] = useState<Record<string, string | number>[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setBooks([{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }, { id: 3, title: 'Book 3' }]);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <h1>Books application</h1>

            <div>
                {isLoading && <p>Loading...</p>}

                {books?.map((book) => (
                    <div className="card" key={book.id}>
                        {book.title}
                    </div>
                ))}
            </div>

        </>
    )
}

export default Home
