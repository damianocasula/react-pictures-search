import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit (term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          query: term
        },
        headers: {
          Authorization:
            'Client-ID ' + process.env.REACT_APP_UNSPLASH_ACCESS_KEY
        }
      })
      .then(response => {
        console.log(response)
      })
  }

  render () {
    return (
      <div className='ui container' style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
