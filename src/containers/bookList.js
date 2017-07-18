import React, { Component } from 'react'

// glue between react and redux
import { connect } from 'react-redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    )
  }
}

// whenever application state changes,
// container will instantly & automatically re-render
function mapStateToProps (state) {
  return {
    books: state.books
  }
}

// connect takes a function and component
// => produces container
export default connect(mapStateToProps)(BookList)