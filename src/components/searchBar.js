import React, { Component } from 'react'

// SearchBar = class component (keep track of user term in state)
// every class MUST have a render method
class SearchBar extends Component {
  // constructor is called automatically
  constructor (props) {
    // super enables calling parent methods (Component)
    super(props)

    // use setState() when you update the state
    this.state = { term: '' }
  }

  render () {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    )
  }

  onInputChange (term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar