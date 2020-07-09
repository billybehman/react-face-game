import React from "react"


function Books(props) {
    return (
        <div className="books">
            <h1>Books</h1>
            <label htmlFor="search">Search:</label>
            <input 
                placeholder="Search Book"
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                id="search"
            />
            <button onClick={props.handleFormSubmit}>Search</button>
        </div>
    )

}

export default Books

