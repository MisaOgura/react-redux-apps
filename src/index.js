'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/searchBar'

const API_KEY = 'AIzaSyDDQWFHDLymmL0ISeCWkgpsrLsEzU7mYfM'

// App = functional component (stateless)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)