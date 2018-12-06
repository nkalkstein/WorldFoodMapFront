import React, { Component } from 'react';
import Map from '../components/Map'
import searchYouTube from 'youtube-api-search';
import Video from './Video'
import VideoDetail from './VideoDetail'
import Favorite from './Favorite'
import FavoriteDetail from './FavoriteDetail'

export default class MainPage extends Component {


  state = {
    videos:[],
    selectedVideo: null,
    name: '',
    password: '',
    favorites: [],
    selectedFavorite: null,
    favoritesView: false,
    city: null,
    cityStats: null
  }



onVideoSelect = (selectedVideo) => {
  this.setState({
    selectedVideo: selectedVideo
  })
}

onFavoriteSelect = (selectedVideo) => {
  this.setState({
    selectedFavorite: selectedVideo
  })
}


removeVideos = () => {
  this.setState({
    videos: [],
    selectedVideo: null
  })
}

renderVideos = (city, country) => {
   const API_KEY = 'AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es';



     searchYouTube({key: API_KEY, term: `${city} ${country} food`, maxResults: 9}, (videos) => {
            this.setState({
              videos: videos,
              selectedVideo:  videos[0]
            })
          })
       }



renderWiki = (city, country) => {
  fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + city +"&limit=1")
      .then(x => x.json())
      .then((results) => {
        this.setState({
          cityStats: results
        })
      })
  }

renderFlights = (city, country) => {

  response = Unirest.post "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",
  headers:{
    "X-RapidAPI-Key" => "",
    "Content-Type" => "application/x-www-form-urlencoded"
  },
  parameters:{
    "inboundDate" => "2019-01-10",
    "cabinClass" => "business",
    "children" => 0,
    "infants" => 0,
    "groupPricing" => "false",
    "country" => "US",
    "currency" => "USD",
    "locale" => "en-US",
    "originPlace" => "SFO-sky",
    "destinationPlace" => "LHR-sky",
    "outboundDate" => "2019-01-01",
    "adults" => 1
  }

      .then(x => x.json())
      .then((results) => {
        this.setState({
          cityStats: results
        })
      })
  }

chooseFlight = (event, flight) => {
    console.log(event.target)
      this.setState({
        flight: [...this.state.flight, flight],

      })
      alert("This has been added to your favorites!");
  }


addToFavorites = (event, video) => {
  console.log(event.target)
    this.setState({
      favorites: [...this.state.favorites, video],
      favoritesPressed: true
    })
    alert("This video has been added to your favorites!");
}

viewFavorites = (event) =>{
  this.setState({
    favoritesView: true,
    selectedFavorite: this.state.favorites[0]
  })
}

goBack = (event) => {
  this.setState({
    favoritesView: false,
    videos: [],
    selectedVideo: null
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

  setCity = (city) => {
    this.setState({
      city: city
    })
  }

  resetCity = (city) => {
    this.setState({
      city:null
    })
  }

  render() {
    if (!this.props.user) {
    return (
      <h2 className="Login">
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
      <Map  cityStats={this.state.cityStats} renderWiki={this.renderWiki} renderVideos={this.renderVideos} removeVideos={this.removeVideos} user={this.state.name} setCity={this.setCity} resetCity={this.resetCity}/>

      <div>
      <VideoDetail favoritesPressed={this.state.favoritesPressed} addToFavorites={this.addToFavorites} video={this.state.selectedVideo} viewFavorites={this.viewFavorites} />
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
         <FavoriteDetail userName={this.state.name} video={this.state.selectedFavorite} goBack={this.goBack} />
           <ul className="col-md-4 list-group">
              {theFavs.map((video) => <Favorite userName={this.state.name} onFavoriteSelect={this.onFavoriteSelect} goBack={this.goBack} key={video.etag} video={video}/>)}
          </ul>
      </div>


          )

          // <div>
          //        <FavoriteDetail userName={this.state.name} video={this.state.selectedFavorite} goBack={this.goBack} />
          //          <ul className="col-md-4 list-group">
          //             {theFavs.map((video) => <Favorite userName={this.state.name} onFavoriteSelect={this.onFavoriteSelect} goBack={this.goBack} key={video.etag} video={video}/>)}
          //         </ul>
          //     </div>
          //
          //
          //         )

      }


  }


  }


}
