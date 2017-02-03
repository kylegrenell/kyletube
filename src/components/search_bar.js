import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    // component itself already has a constructor , we can call that parent method (constructor) using 'super'
    super(props);
    //state is a plain javascript object that exists on any component that is a class based component
    // each instance has its own copy of state ie 'term' here
    // we initialise the state by defining the constructor method and setting the state as this.state inside of it
    // whenever we use state, we initialize it by creating a new object and assigning it to this.state
    // the object we pass will also contain properties that we want to record on the state
    // the term property is short for search term
     // so whenever the user updates the search input, 'term' is the property that will record that change on
     // we want to update the value of this.state.term to equal the input, not the empty string
    this.state = { term: '' };
  }

  render() {   
    return <input onChange={(event) => console.log(event.target.value)} />  
   }
}

export default SearchBar