import React from "react"
import { PromiseProvider } from "mongoose"

function SavedBooks(props) {
    return (
        <div>
            {props.myBooks.map(book => (
                <div key={book._id}>
                    Book: {book.title}
                    Author: {book.author}
                    Description: {book.description}
                    <img src={book.imageLink} />
                    <a href={book.link}>See Book</a>
                    <button onClick={(e) => props.delFunc(e, book)}>DeleteBook</button>
                </div>
            ))}
        </div>
    )
}

export default SavedBooks