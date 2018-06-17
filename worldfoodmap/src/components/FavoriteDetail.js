import React from 'react';


const FavoriteDetail = ({addToFavorites, viewFavorites, video, goBack}) => {
	if (!video) {
		return <div>  </div>
	}



	const videoId= video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;



	return (
		<div>
		<div className="video-detail col-md-8">
			
			<div className="embed-responsive embed-responsive-16by9">
				<iframe width="600" height="350" className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div style={{ margin: '0 auto'}}>{video.snippet.title}</div>
			</div>
		</div>
		<div>
		<button className="goBack" onClick={goBack}> GO BACK </button>
		</div>
		</div>

		)

}

export default FavoriteDetail;