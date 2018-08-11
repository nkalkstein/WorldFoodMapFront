import React from 'react';




const Video = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.medium.url;




return(
	<div onClick={() => onVideoSelect(video)}>
		<div>
			<div style={{float: "left", width: "24%", marginRight: "1%", marginBottom: "0.5em", color: "white"}}>
				<img  alt="alt" src={imageUrl} />
				<h4>{video.snippet.title}</h4>
			</div>
			<div>
				
			</div>
		</div>
	</div>



	)
}




export default Video

