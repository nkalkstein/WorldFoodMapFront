import React, { Component } from 'react';
import MainPage from './MainPage';
import Video from './Video';
import VideoDetail from './VideoDetail';

const Favorites = ({Favorites}) => {

	console.log(Favorites)
return (

            <div>

			<ul className="col-md-4 list-group">
	            {Favorites.map((video) => <VideoDetail video={video} key={video.etag} />)}
	        </ul>
	        </div>


		// 			<div>
		//
		// <ul className="favorites">
		// 				{Favorites.map((video) => <VideoDetail video={video} key={video.etag} favorite={favorite.etag}/>)}
		// 		</ul>
		// 		</div>

		// 			<div>
		//
		// <ul className="col-md-4 list-group">
		// 				{Videos.map((video) => <VideoDetail video={video} key={video.etag} favorite={favorite.etag}/>)}
		// 		</ul>
		// 		</div>

	   )
}

export default Favorites
