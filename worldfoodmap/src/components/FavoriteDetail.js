import React from 'react';


const FavoriteDetail = ({userName, addToFavorites, viewFavorites, video, goBack}) => {
	if (!video) {
		return <div>  </div>
	}



	const videoId= video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;


	return (
		<div>
		<h2 style={{color: "white"}}> {userName}'s Favorite Videos </h2>
		<button className="goBack" onClick={goBack}> GO BACK </button>
		<div className="video-detail col-md-8">
			
			<div className="embed-responsive embed-responsive-16by9">
				<iframe width="600" height="350" className="embed-responsive-item" title="i" src={url}></iframe>
			</div>
			<div className="details">
				<h1 style={{ margin: '0 auto', color: "white"}}>{video.snippet.title}</h1>
			</div>
		</div>
		<div>
		</div>
		</div>

		)

}

export default FavoriteDetail;