import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 40.95,
//       lng: 30.33
//     },
//     zoom: 0
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '80vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyA-ojt-goMyfKA9QVd4TPmtYnGSzS3m7Es" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
        
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default Map;




import ReactMapGL from 'react-map-gl';

class Map extends Component {

state = {
    viewport: {
      width: 999,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 0
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken="pk.eyJ1IjoibmthbGtzdGVpbiIsImEiOiJjamkxem1yMTAxb2N2M3FudG42cTAzOXQ2In0.Y5zlJC7r2pHTHGm0GQZYkw" />
      
    );
  }
}

export default Map