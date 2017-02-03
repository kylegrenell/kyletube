import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {  
  // whenever we call setState it causes our componenet to automatically re-render and push to the DOM
  return (
    <div>
    <input onChange={(event) => this.setState({term: event.target.value })} />  
    </div>
    );
}
}

export default SearchBar