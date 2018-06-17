import React from 'react';


const VideoDetail = ({addToFavorites, viewFavorites, video}) => {
	if (!video) {
		return <div>  </div>
	}



	const videoId= video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;



	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe width="600" height="350" className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div style={{ margin: '0 auto'}}>{video.snippet.title}</div>
				<button onClick={(e) => addToFavorites(e, video)} className="favoriteButton"> Add to Favorites </button>
				<br></br>
				<button onClick={viewFavorites} > View My Favorites </button>
			</div>
		</div>


		)

}

export default VideoDetail;