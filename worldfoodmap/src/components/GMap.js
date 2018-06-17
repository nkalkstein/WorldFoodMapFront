import React, { Component } from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';
import Videos from './Videos'
import Map from '../components/Map'

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GMap extends Component {

  state = {
    chosenLocation: ''
  }


  static defaultProps = {
    center: {
      lat: 40.95,
      lng: -15.33
    },
    zoom: 6
  };

  

render() {
  const correctCoordinates = [this.props.coordinates[1], this.props.coordinates[0]]
    return (
      // Important! Always set the container height explicitly
      <div style={{ margin: '0 auto', height: '40vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es" }}
          defaultCenter={correctCoordinates}
          defaultZoom={this.props.zoom}
        >
        

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GMap;


