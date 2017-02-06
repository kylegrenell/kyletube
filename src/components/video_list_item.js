import React from 'react';
// passing in props and then decalring const video = props.video; -- is identical to ({video}) being passed as the argument in es6. it has the property of video, it grabs that video and decalresa new variable called video
const VideoListItem = ({video}) => {
  // console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;
  //response from the youtube api

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    );
};

export default VideoListItem;