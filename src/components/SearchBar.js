import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: '' }

  onInputChange = event => this.setState({ term: event.target.value })

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
