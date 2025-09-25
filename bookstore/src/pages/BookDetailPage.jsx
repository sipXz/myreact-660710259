import React from "react";
import { Link } from "react-router-dom";

const BookDetailPage = () => {
    // ตัวอย่างข้อมูลหนังสือ
    const book = {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel set in the 1920s that explores themes of wealth, society, and the American Dream."
    };

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{book.description}</p>
            <Link to="/books">Back to Book List</Link>
        </div>
    );
}

export default BookDetailPage;