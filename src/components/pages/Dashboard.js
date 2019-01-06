import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'
import {allBooksSelector} from '../../reducers/books'
import AddBook from '../pages/AddBook'

const Dashboard = ({isConfirmed, books}) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}

    {books.length === 0 && <AddBook />}
  </div>
)

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

export default connect(mapStateToProps)(Dashboard)