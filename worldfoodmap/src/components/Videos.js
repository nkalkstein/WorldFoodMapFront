import React, { Component } from 'react';
import searchYouTube from 'youtube-api-search';
import Video from './Video'
import VideoDetail from './VideoDetail'

class Videos extends Component{

	state = {
		videos: [],
		selectedVideo: null,
		favorites: []
	}




onVideoSelect = selectedVideo => this.setState({selectedVideo})



componentDidMount() {
	const cityName = this.props.city.name
    const countryName = this.props.city.country
	 const API_KEY = 'AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es';



     searchYouTube({key: API_KEY, term: `${cityName} ${countryName} food`, maxResults: 6}, (videos) => {
            this.setState({
            	videos: videos,
            	selectedVideo:  videos[0]
            })
          })
       }



render() {
	   if (this.state.videos.length){
	   	const theVideos = this.state.videos.slice(1)
			return(

			<div>
			<VideoDetail video={this.state.selectedVideo} />
			<ul className="col-md-4 list-group">
	            {theVideos.map((video) => <Video onVideoSelect={this.onVideoSelect} key={video.etag} video={video} />)}
	        </ul>
	        </div>
      )
       } else {
     return null
   }
  }
     
	
}

export default Videos;