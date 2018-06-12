import React, { Component } from 'react';
import Videos from './Videos'
import VideoDetail from './VideoDetail'



const Video = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.medium.url;






return(
	<li onClick={() => onVideoSelect(video)} className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
				<img className="media-object" src={imageUrl} />
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</div>
	</li>



	)
}




export default Video

