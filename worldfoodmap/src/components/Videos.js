import React, { Component } from 'react';
import searchYouTube from 'youtube-api-search';
import Video from './Video'
import VideoDetail from './VideoDetail'
import ZoomPan from './ZoomPan'

class Videos extends Component{

	state = {
		videos: [],
		selectedVideo: null,
		searchTerm: null
	}




onVideoSelect = selectedVideo => this.setState({selectedVideo})



componentDidMount(){
	const cityName = this.props.city.name
    const countryName = this.props.city.country
	console.log(this.props)
	 const API_KEY = 'AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es';



     searchYouTube({key: API_KEY, term: `${cityName} ${countryName} food`, maxResults: 6}, (videos) => {
            this.setState({
            	videos: videos,
            	selectedVideo:  videos[0]
            })
          })
       }



render() {
	console.log(this.state.videos)
	   if (this.state.videos.length){
			return(
			<div>
			<VideoDetail video={this.state.selectedVideo} />
			<ul className="col-md-4 list-group">
	            {this.state.videos.map((video) => <Video onVideoSelect={this.onVideoSelect} key={video.etag} video={video} />)}
	        </ul>
	        </div>
      )
       } else {
     return null
   }
  }
     
	
}

export default Videos;