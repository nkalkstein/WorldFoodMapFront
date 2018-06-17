import React, { Component } from 'react';
import Videos from './Videos'
import MainPage from './MainPage'
import FavoriteDetail from './FavoriteDetail'



const Favorite = ({video, chosenVideo, onVideoSelect, goBack}) => {
	const imageUrl = video.snippet.thumbnails.medium.url;




return(
	<div>
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
	</div>


	)
}




export default Favorite
