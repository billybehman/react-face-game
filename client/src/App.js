import React, { Component } from 'react';
import Books from "./components/books"
import API from "./utils/API"
import SearchResults from "./components/SearchResults"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SavedBooks from "./components/SavedBooks"
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    search: "",
    result: [],
    mySavedBooks: []
  }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      search: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    API.search(this.state.search).then(res => this.setState({ result: res.data.items })).catch(err => console.log(err))
  }

  saveFunc = (event, book) => {
    event.preventDefault()
    let bookObj = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      link: book.volumeInfo.canonicalVolumeLink,
      imageLink: book.volumeInfo.imageLinks.thumbnail
    }
    axios.post("http://localhost:3000/api/save-book", bookObj).then(function(data) {
      console.log(data)
    }).catch(function(err) {
      console.log(err)
    })
  }

  delFunc = (event, book) => {
    event.preventDefault()
    axios.delete(`http://localhost:3000/api/delete-book/${book._id}`).then(this.getMyBooks())
  }


  componentDidMount() {
    this.getMyBooks()
  }

  getMyBooks = () => {
    axios.get("http://localhost:3000/api/get-books").then(data => this.setState({ mySavedBooks: data.data }))
  }

  

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Books
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <SearchResults
                results={this.state.result}
                saveFunc={this.saveFunc}
              />
            </React.Fragment>
          )} />
          <Route path="/saved-books" render={props => (
            <React.Fragment>
              <SavedBooks
                myBooks={this.state.mySavedBooks}
                delFunc={this.delFunc}
              />
            </React.Fragment>
          )}>

          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
