'use strict'

import React, { Component } from 'react'

// SearchBar = class component (keep track of user input in state)
// every class MUST have a render method
class SearchBar extends Component {
  // constructor is called automatically
  constructor(props) {
    // super enables calling parent methods (Component)
    super(props)

    // use setState() when you update the state
    this.state = { input: '' }
  }

  render () {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })} />
      </div>
    )
  }
}

export default SearchBar