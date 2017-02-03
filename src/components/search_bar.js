// import react and pull off the variable called component
import React, { Component } from 'react'

// create a new class and give it all of the the fucntionality that the React.Component class has
class SearchBar extends Component {
  // always define a render method and return some jsx
  render() {
    
    //wrap jsx with curly braces
    // create a new input element, pass it a prop(erty) onchange with a value of this.onInputChange. We've now declared our event handler and passed that to the element that we want to atch for the event
    return <input onChange={this.onInputChange} />  
   }

// whenever add an event handler we pass an event object
// the event object describes the context about the event that occurred, has very specific, very technical properties inside of it -- we use this event object to get access to the value of the input. What the text change was.
   onInputChange(event){
    console.log(event.target.value)
   }

}

export default SearchBar