import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDetN9Q18C5GAdvLPy6PElFRpzYGYItnb4';

// functional based component - used when taking in some inofrmation and spitting out some jsx.
// can contain a class based component
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState = ({videos});
      // es6 when key and value are same name you can use one name, it gets rendered to videos: videos. Cleaner code.
      });
  }

  render(){
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />      
      </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));