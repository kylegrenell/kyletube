// explicitly say what you want access to react inside of this file right here
// go find the library called react which is installed in my dependcies in node modules and assign it to the variable React
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDetN9Q18C5GAdvLPy6PElFRpzYGYItnb4';


// const es6 declares variable, const says this is the final value of this variable. It's actually a constant. App = 5 would throw an error

// <div> jsx is really javascript
// this is a class, not an instance
// to make an instance, you can call it in jsx <app />
const App = () => {
  return (
  <div>
  <SearchBar />
  </div>
  );
}

// Take this component's generated HTML and display it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// Reactdom is used to interact with the actual DOM while react is used to create and manage our components