import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDetN9Q18C5GAdvLPy6PElFRpzYGYItnb4';

// functional based component - used when taking in some inofrmation and spitting out some jsx.
// can contain a class based component
const App = () => {
  return (
  <div>
  <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));