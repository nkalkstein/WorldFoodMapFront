import React, { Component } from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';





class GMap extends Component {

  state = {
    chosenLocation: ''
  }


  static defaultProps = {
    center: {
      lat: 15.95,
      lng: -15.33
    },
    zoom: 0
  };


// Include locations on this map?  Or make a second google map? Restaurants? Hotels?

render() {
  console.log(this.props.city )
 if (this.props.city) {
  const correctCoordinates = [this.props.city.coordinates[1], this.props.city.coordinates[0]]
    return (
    <div >
    <div style={{ margin: '0 auto', height: '48.5vh', width: '50%', float: 'right', overflow: "hidden", }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es" }}
          defaultCenter={correctCoordinates}
          defaultZoom={5}
        >

        </GoogleMapReact>
      </div>
      </div>

    );
  } else {
    return null
  }
}



}

export default GMap;
