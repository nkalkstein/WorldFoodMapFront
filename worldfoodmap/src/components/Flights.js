import React, { Component } from 'react';
import MainPage from './MainPage';


const Flight = ({time, date, airline, flightNumber}) => {
	const flightInfo= time;



class Flight extends Component{

	state = {
		videos: [],
		selectedVideo: null,
		favorites: []
	}





componentDidMount() {
	const cityName = this.props.city.name
    const countryName = this.props.city.country
	 const API_KEY = ''



     renderFlights({key: API_KEY, term: `${cityName} ${countryName}`, maxResults: 6}, (flights) => {
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




export default Flights