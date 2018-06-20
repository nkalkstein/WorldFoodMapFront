import React from 'react';


const VideoDetail = ({favoritesPressed, renderWiki, addToFavorites, viewFavorites, video}) => {
	if (!video) {
		return <div>  </div>
	}



	const videoId= video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;




	return (
	<div>
	<div>
	</div>
		<div className="video-detail col-md-8">
			
			<div className="embed-responsive embed-responsive-16by9" style={{margin: "auto", width: "50%", padding: "10px", paddingTop: "20px"}}>
				<iframe width="600" height="350" className="embed-responsive-item" src={url} allowFullScreen='true'></iframe>
			</div>
			
			<div className="details">
				<div style={{ margin: '0 auto', color: "white"}}>{video.snippet.title}</div>
				<button onClick={(e) => addToFavorites(e, video)} className="favoriteButton"> Add Video to Favorites </button>
				<br></br>
				<button className="viewFavoritesButton" onClick={viewFavorites} > View My Favorites </button>
			</div>
		</div>
		</div>


		)

}

export default VideoDetail;