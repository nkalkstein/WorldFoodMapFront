import React from 'react';


const VideoDetail = ({video}) => {
	console.log(video)
	if (!video) {
		return <div> Loading... </div>
	}



	const videoId= video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;



	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe width="500" height="400" className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
			</div>
		</div>


		)

}

export default VideoDetail;