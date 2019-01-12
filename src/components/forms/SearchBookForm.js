import React, {Component} from 'react';
import axios from 'axios';
import {Form, Dropdown} from 'semantic-ui-react';
import ErrorMessage from '../messages/ErrorMessage';

class SearchBookForm extends Component {
  state = {
    loading: false,
    query: '',
    options: [],
    books:{},
    errors: {}
  }

  onSearchChange = (e, data) => {
    clearTimeout(this.timer)
    this.setState({query: data.searchQuery})
    this.timer = setTimeout(this.fetchOptions, 1000)
  }

  onChange = (e, data) => {
    this.setState({query: data.value})
    this.props.onBookSelect(this.state.books[data.value])
  }

  fetchOptions = () => {
    if(!this.state.query) return;
    this.setState({loading: true})
    axios.get(`/api/books/search?q=${this.state.query}`)
    .then(res => res.data.books)
    .then(books => {
      const options = []
      const booksHash = {}
      books.forEach(book => {
        booksHash[book.goodreadsId] = book
        options.push({
          key: book.goodreadsId,
          value: book.goodreadsId,
          text: book.title
        })
      })
      this.setState({loading: false, options, books: booksHash})
    }).catch(err => this.setState({
      errors: err.response.data.errors,
      loading: false
    }))
  }

  render() { 
    return (
      <Form loading={this.state.loading}>
        {this.state.errors.global  && <ErrorMessage message="Something went wrong" subMessage={this.state.errors.global}/>}
        <Dropdown
          search
          fluid
          placeholder='Search for a book by title'
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    )
  }
}
 
export default SearchBookForm;