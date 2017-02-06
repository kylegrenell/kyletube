import React, { Component } from 'react'

class SearchBar extends Component {
// class based components are used whenever we need a component to be aware of state - ie data changing over time, user events we need to keep track of when renders
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {  
  return (
    <div className="search-bar">
      <input 
        value={this.state.term}
        onChange={(event) => this.onInputChange(event.target.value)} />  
    </div>
    )
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar