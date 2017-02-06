import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDetN9Q18C5GAdvLPy6PElFRpzYGYItnb4'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    // THROTTLE USER INPUT -- this is a version of the inner function hat can only be called every 300 miliseconds -- so the user only sees after this time frame rather than every character they search updating

  return (
        <div>
        <p><h2 id="header">Kyletube</h2></p>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))