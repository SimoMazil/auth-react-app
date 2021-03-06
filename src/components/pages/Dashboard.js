import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'
import {allBooksSelector} from '../../reducers/books'
import AddBook from '../pages/AddBook'
import {fetchBooks} from '../../actions/books'

class Dashboard extends Component {
  componentDidMount = () => this.onInit(this.props)

  onInit = (props) => props.fetchBooks()
  
  render() { 
    const {isConfirmed, books} = this.props
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}

        {books.length === 0 ? <AddBook /> : <p>You Have Books!</p>}
      </div>
    );
  }
}

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  }
}

export default connect(mapStateToProps, {fetchBooks})(Dashboard)