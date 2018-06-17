import React, { Component } from 'react';
import Map from '../components/Map'
import searchYouTube from 'youtube-api-search';
import Video from './Video'
import VideoDetail from './VideoDetail'
import GMap from './GMap'
import Favorite from './Favorite'
import FavoriteDetail from './FavoriteDetail'

export default class MainPage extends Component {
  

  state = {
    videos:[],
    selectedVideo: null,
    name: '',
    password: '',
    favorites: [],
    favoritesView: false
  }



onVideoSelect = selectedVideo => this.setState({selectedVideo})


renderVideos = (city, country) => {
   const API_KEY = 'AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es';



     searchYouTube({key: API_KEY, term: `${city} ${country} food`, maxResults: 6}, (videos) => {
            this.setState({
              videos: videos,
              selectedVideo:  videos[0]
            })
          })
       }


addToFavorites = (event, video) => {
  console.log(event.target)
    this.setState({
      favorites: [...this.state.favorites, video]
    })
}

viewFavorites = (event) =>{
  this.setState({
    favoritesView: true
  })
}

goBack = (event) => {
  this.setState({
    favoritesView: false
  })

}

 handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.register(this.state.name, this.state.password)

  }

  render() {
    if (!this.props.user) {
    return (

      <h2>
        Create an Account or Log In
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={(event) => this.handleChange(event)}
        />
        <br></br>
        <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'
          onChange={(event) => this.handleChange(event)}
        />
         <br></br>

        <input type='submit' />
      </form>
      </h2>
    )
  } else {
      if (this.state.favoritesView === false){ 

    const theVideos = this.state.videos.slice(1)

    return(
      <div>
      <Map renderVideos={this.renderVideos} user={this.state.name}/>
      
      <div>
      <VideoDetail addToFavorites={this.addToFavorites} video={this.state.selectedVideo} viewFavorites={this.viewFavorites} />
      <ul className="col-md-4 list-group">
              {theVideos.map((video) => <Video onVideoSelect={this.onVideoSelect} key={video.etag} video={video} />)}
          </ul>
      </div>
      </div>
      )
      } else {
        const theFavs = this.state.favorites.slice(1)

        return(


         <div>
         <FavoriteDetail video={this.state.favorites[0]} goBack={this.goBack} />
           <ul className="col-md-4 list-group">
              {theFavs.map((video) => <Favorite onVideoSelect={this.onVideoSelect} goBack={this.goBack} key={video.etag} video={video}/>)}
          </ul>
      </div>
    

          )

      }

      
  }
     
  
  }
  
  
}