import React from "react";
import { Link } from "react-router-dom";
import './style/BookListPage.css';

const BookListPage = () => {
    // ตัวอย่างข้อมูลหนังสือ
    const books =
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" };

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                <li key={books.id}>
                    <Link to={`/books/${books.id}`}>{books.title}</Link> by {books.author}
                </li>
            </ul>
        </div>
    );
}

export default BookListPage;