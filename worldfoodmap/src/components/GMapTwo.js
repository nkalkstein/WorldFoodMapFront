import React, { Component } from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';
import Videos from './Videos'
import Map from '../components/Map'

 
const AnyReactComp = ({ text }) => <div>{text}</div>;
 
class GMapTwo extends Component {

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



render() {

    return (
    <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >

        </GoogleMapReact>
      </div>
      
    );
  
}



}
 
export default GMapTwo;
