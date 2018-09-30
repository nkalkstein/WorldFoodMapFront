import React, { Component } from 'react';
import MainPage from './MainPage';


// Hotels Component:

// Use hotel metasearch site api.  Display real time results on video page?





class Hotels extends Component{

	state = {
		videos: [],
		selectedVideo: null,
		favorites: []
	}




onVideoSelect = selectedVideo => this.setState({selectedVideo})



componentDidMount() {
	const cityName = this.props.city.name
    const countryName = this.props.city.country
	 const API_KEY = '';



     searchHotels({key: API_KEY, term: `${cityName} ${countryName}`, maxResults: 6}, (hotels) => {
            this.setState({
            	hotels: hotels
            })
          })
       }



render() {
	   if (this.state.videos.length){
	   	const theVideos = this.state.videos.slice(1)
			return(

			<div>
			<VideoDetail video={this.state.selectedVideo} />
			<div className="row">
	            {theVideos.map((video) => <Video onVideoSelect={this.onVideoSelect} key={video.etag} video={video} />)}
	        </div>
	        </div>
      )




       } else {
     return null
   }
  }
     
	
}






export default Hotels