import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {  
  // always manipulate our state with setState, never this.state = ... only do that inside the constructor
  // not modifying the value of term, just referenceing it
  return (
    <div>
    <input onChange={(event) => this.setState({term: event.target.value })} />  
    <br />
    Value of the input: {this.state.term}
    </div>
    );
}
}

export default SearchBar