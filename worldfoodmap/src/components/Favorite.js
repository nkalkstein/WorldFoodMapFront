import React from 'react';




const Favorite = ({userName, video, chosenVideo, onFavoriteSelect, goBack}) => {
	const imageUrl = video.snippet.thumbnails.medium.url;




return(
	
	<div>
	<li onClick={() => onFavoriteSelect(video)} className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
				<img className="media-object" src={imageUrl} alt="alt"/>
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</div>
	</li>
	</div>
	


	)
}




// return(
	
// 	<div>
// 	<li onClick={() => onFavoriteSelect(video)} className="list-group-item">
// 		<div className="video-list media">
// 			<div className="media-left">
// 				<img className="media-object" src={imageUrl} alt="alt"/>
// 			</div>
// 			<div className="media-body">
// 				<div className="media-heading">{video.snippet.title}</div>
// 			</div>
// 		</div>
// 	</li>
// 	</div>
	


// 	)
// }


export default Favorite
