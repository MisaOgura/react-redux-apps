import React, { Component } from 'react'

// glue between react and redux
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'

// makes sure that the actions returned from
// action creators flow through all the reducers
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
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

// anything returned from this function will
// end up as props on the BookList container
function mapDispatchToProps (dispatch) {
  // whenever selectBook (action creator) is called,
  // the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList)