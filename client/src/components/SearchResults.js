import React, { Component } from "react"

function SearchResults(props) {

    const hi = React.createRef()


    return (
        <div>
            {props.results.map(book => (
                <div 
                    key={book.id} 
                    ref={hi}
                >
                    Book: {book.volumeInfo.title} 
                    Author: {book.volumeInfo.authors[0]} 
                    Description: {book.volumeInfo.description}
                    <img src={book.volumeInfo.imageLinks.thumbnail} /> 
                    <a href={book.volumeInfo.canonicalVolumeLink}>See Book</a> 
                    <button onClick={(e) => props.saveFunc(e, book)}>Save Book</button>
                </div>
            ))}
        </div>
    )

}

export default SearchResults