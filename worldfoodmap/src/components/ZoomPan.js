import React, { Component } from "react"
import geographyObject from "../static/world-50m.json"
import Videos from './Videos'


import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const otherStyles = {
  width: "80%",
  maxWidth: 1200,
  margin: "3",
}

class ZoomPan extends Component {
  constructor() {
    super()
    this.state = {
      city: null,
      center: [0,20],
      zoom: 1,
      cities: [
        { name: "Abu Dhabi", country:"United Arab Emirates", coordinates: [54.22, 24.28] },
        { name: "Accra", country:"Ghana", coordinates: [-0.12, 5.33] },
        { name: "Addis Ababa", country:"Ethiopia", coordinates: [38.44, 9.02] },
        { name: "Albuquerque", country:"USA", coordinates: [-106.37, 35.07] },
        { name: "Algiers", country:"Algeria", coordinates: [3.13, 36.46] },
        { name: "Amman", country:"Jordan", coordinates: [35.56, 31.56] },
        { name: "Amsterdam", country:"Holland", coordinates: [4.54, 52.22] },
        { name: "Anchorage", country:"USA", coordinates: [-149.54, 61.13] },
        { name: "Astana", country:"Kazakhstan", coordinates: [71.26, 51.10] },
        { name: "Athens", country:"Greece", coordinates: [23.43, 37.58] },
        { name: "Austin", country:"USA", coordinates: [-97.45, 30.15] },
        { name: "Bamako", country:"Mali", coordinates: [-8.00, 12.39] },
        { name: "Bangalore", country:"India", coordinates: [77.34, 12.58] },
        { name: "Bangkok", country:"USA", coordinates: [100.28, 13.45] },
        { name: "Barcelona", country:"Spain", coordinates: [2.11, 41.23] },
        { name: "Beijing", country:"China", coordinates: [116.23, 39.55] },
        { name: "Beirut", country:"Lebanon", coordinates: [35.31, 33.53] },
        { name: "Belém", country:"Brazil", coordinates: [-48.30, -1.27] },
        { name: "Belfast", country:"Northern Ireland", coordinates: [-5.56, 54.36] },
        { name: "Belgrade", country:"Serbia", coordinates: [20.28, 44.94] },
        { name: "Berlin", country:"Germany", coordinates: [13.23, 52.31] },
        { name: "Bogotá", country:"Colombia", coordinates: [-74.05, 4.36] },
        { name: "Bordeaux", country:"France", coordinates: [-0.35, 44.50] },
        { name: "Brasília", country:"Brazil", coordinates: [-47.52, -15.48] },
        { name: "Brisbane", country:"Australia", coordinates: [153.02, -27.28] },
        { name: "Brussels", country:"Belgium", coordinates: [4.21, 50.51] },
        { name: "Budapest", country:"Hungary", coordinates: [19.03, 47.28] },
        { name: "Buenos Aires", country:"Argentina", coordinates: [-58.3816,-34.6037] },
        { name: "Buffalo", country:"USA", coordinates: [-78.51, 42.54] },
        { name: "Busan", country:"South Korea", coordinates: [129.05, 35.11] },
        { name: "Cabo San Lucas", country:"Mexico", coordinates: [-109.55, 22.53] },
        { name: "Calgary", country:"Canada", coordinates: [-114.04, 51.03] },
        { name: "Cairo", country:"Egypt", coordinates: [31.14, 30.03] },
        { name: "Cancún", country:"Mexico", coordinates: [-86.51, 21.10] },
        { name: "Cape Town", country:"South Africa", coordinates: [18.25, -33.56] },
        { name: "Casablanca", country:"Morocco", coordinates: [-7.35, 33.32] },
        { name: "Cebu", country:"Philippines", coordinates: [123.54, 10.17] },
        { name: "Chengdu", country:"China", coordinates: [104.04, 30.40] },
        { name: "Chicago", country:"USA", coordinates: [-87.38, 41.53] },
        { name: "Chongqing", country:"China", coordinates: [106.34, 29.34] },
        { name: "Colombo", country:"Sri Lanka", coordinates: [79.51, 6.56] },
        { name: "Copenhagen", country:"Denmark", coordinates: [12.34, 55.41] },
        { name: "Da Nang", country:"Vietnam", coordinates: [108.14, 16.04] },
        { name: "Dakar", country:"Senegal", coordinates: [-17.27, 14.42] },
        { name: "Dallas", country:"USA", coordinates: [-96.48, 32.47] },
        { name: "Denver", country:"USA", coordinates: [-104.59, 39.44] },
        { name: "Detroit", country:"USA", coordinates: [-83.03, 42.20] },
        { name: "Dubai", country:"United Arab Emirates", coordinates: [55.18, 25.15] },
        { name: "Dublin", country:"Ireland", coordinates: [-6.16, 53.21] },
        { name: "El Paso", country:"USA", coordinates: [-106.25, 31.47] },
        { name: "Fairbanks", country:"USA", coordinates: [-147.43, 64.51] },
        { name: "Florence", country:"Italy", coordinates: [11.15, 43.47] },
        { name: "Georgetown", country:"Guyana", coordinates: [-58.10, 6.48] },
        { name: "Glasgow", country:"Scotland", coordinates: [-4.16, 55.51] },
        { name: "Guanzhou", country:"China", coordinates: [113.16, 23.08] },
        { name: "Guatemala City", country:"Guatemala", coordinates: [-90.32, 14.37] },
        { name: "Hanoi", country:"Vietnam", coordinates: [105.51, 21.02] },
        { name: "Hartford", country:"USA", coordinates: [-72.40, 41.46] },
        { name: "Helsinki", country:"Finland", coordinates: [24.56, 60.10] },
        { name: "Ho Chi Minh City", country:"Vietnam", coordinates: [106.41, 10.46] },
        { name: "Hong Kong", country:"China", coordinates: [114.10, 22.17] },
        { name: "Honolulu", country:"USA", coordinates: [-157.50, 21.19] },
        { name: "Houston", country:"USA", coordinates: [-95.23, 29.46] },
        { name: "Hyderabad", country:"India", coordinates: [78.29, 17.22] },
        { name: "Istanbul", country:"Turkey", coordinates: [28.57, 41.01] },
        { name: "Jakarta", country:"Indonesia", coordinates: [106.48, -6.12] },
        { name: "Jerusalem", country:"Israel", coordinates: [35.13, 31.47] },
        { name: "Kansas City", country:"USA", coordinates: [-94.35, 39.06] },
        { name: "Karachi", country:"Pakistan", coordinates: [67.01, 24.52] },
        { name: "Kiev", country:"Ukraine", coordinates: [30.31, 50.27] },
        { name: "Kingston", country:"Jamaica", coordinates: [-76.48, 17.59] },
        { name: "Kōbe", country:"Japan", coordinates: [135.12, 34.31] },
        { name: "Kuala Lumpur", country:"Malaysia", coordinates: [101.42, 3.09] },
        { name: "Kyoto", country:"Japan", coordinates: [135.46, 35.01] },
        { name: "La Paz", country:"Bolivia", coordinates: [-68.09, -16.30] },
        { name: "Lagos", country:"Nigeria", coordinates: [3.3792,6.5244] },
        { name: "Lima", country:"Peru", coordinates: [-77.02, -12.03] },
        { name: "London", country:"England", coordinates: [-0.08, 51.30] },
        { name: "Los Angeles", country:"USA", coordinates: [-118.15, 34.03] },
        { name: "Lisbon", country:"Portugal", coordinates: [-9.08, 38.43] },
        { name: "Macau", country:"China", coordinates: [113.33, 22.10] },
        { name: "Madrid", country:"Spain", coordinates: [-3.43, 40.23] },
        { name: "Managua", country:"Nicaragua", coordinates: [-86.15, 12.08] },
        { name: "Manila", country:"Philippines", coordinates: [120.58, 14.35] },
        { name: "Mecca", country:"Saudi Arabia", coordinates: [39.49, 21.25] },
        { name: "Melbourne", country:"Australia", coordinates: [144.58, -37.49] },
        { name: "Memphis", country:"USA", coordinates: [-89.58, 35.07] },
        { name: "Mexico City", country:"Mexico", coordinates: [-99.08, 19.26] },
        { name: "Miami", country:"USA", coordinates: [-80.13, 25.47] },
        { name: "Minneapolis", country:"USA", coordinates: [-93.16, 44.59] },
        { name: "Monaco", country:"Monaco", coordinates: [7.25, 43.44] },
        { name: "Montevideo", country:"Uruguay", coordinates: [-56.11, -4.53] },
        { name: "Montreal", country:"Canada", coordinates: [-73.34, 45.30] },
        { name: "Moscow", country:"Russia", coordinates: [37.37, 55.45] },
        { name: "Munich", country:"Germany", coordinates: [11.34, 48.08] },
        { name: "Muscat", country:"Oman", coordinates: [58.36, 23.37] },
        { name: "Nairobi", country:"Kenya", coordinates: [36.49, -1.17] },
        { name: "Nanning", country:"China", coordinates: [108.19, 22.49] },
        { name: "Nashville", country:"USA", coordinates: [-86.47, 36.10] },
        { name: "Nassau", country:"Bahamas", coordinates: [-77.20, 25.04] },
        { name: "New Delhi", country:"India", coordinates: [77.13, 28.37] },
        { name: "New Orleans", country:"USA", coordinates: [-90.03, 29.58] },
        { name: "New York City", country:"USA", coordinates: [-73.56, 40.40] },
        { name: "Oklahoma City", country:"USA", coordinates: [-97.32, 35.29] },
        { name: "Osaka", country:"Japan", coordinates: [135.30, 34.42] },
        { name: "Oslo", country:"Norway", coordinates: [10.45, 59.57] },
        { name: "Panama City", country:"Panama", coordinates: [-79.31, 8.59] },
        { name: "Paris", country:"France", coordinates: [2.21, 48.51] },
        { name: "Pattaya", country:"Thailand", coordinates: [100.53, 12.56] },
        { name: "Perth", country:"Australia", coordinates: [115.52, -31.57] },
        { name: "Philadelphia", country:"USA", coordinates: [-75.10, 30.57] },
        { name: "Phnom Penh", country:"Cambodia", coordinates: [104.55, 11.33] },
        { name: "Phoenix", country:"USA", coordinates: [-112.04, 33.27] },
        { name: "Phuket", country:"Thailand", coordinates: [98.24, 7.53] },
        { name: "Pittsburgh", country:"USA", coordinates: [-80.00, 40.27] },
        { name: "Portland", country:"USA", coordinates: [-122.41, 45.31] },
        { name: "Porto Alegre", country:"Brazil", coordinates: [-51.14, -30.02] },
        { name: "Prague", country:"Czech Republic", coordinates: [14.25, 50.05] },
        { name: "Puerto Vallarta", country:"Mexico", coordinates: [-105.16, 20.40] },
        { name: "Quezon City", country:"Philippines", coordinates: [121.02, 14.38] },
        { name: "Quito", country:"Ecuador", coordinates: [-78.35, -0.15] },
        { name: "Reykjavík", country:"Iceland", coordinates: [-21.56, 64.08] },
        { name: "Riyadh", country:"Saudi Arabia", coordinates: [46.43, 24.38] },
        { name: "Rio de Janeiro", country:"Brazil", coordinates: [-43.12, -22.55] },
        { name: "Rome", country:"Italy", coordinates: [12.30, 41.54] },
        { name: "Saint Petersburg", country:"Russia", coordinates: [30.18, 59.57] },
        { name: "Salt Lake City", country:"USA", coordinates: [-111.53, 40.45] },
        { name: "San Francisco", country:"USA", coordinates: [-122.4194,37.7749] },
        { name: "San Juan", country:"Puerto Rico", coordinates: [-66.04, 18.27] },
        { name: "Santiago", country:"Chile", coordinates: [-70.40, -33.27] },
        { name: "Santo Domingo", country:"Dominican Republic", coordinates: [-69.57, 18.28] },
        { name: "São Paulo", country:"Brazil", coordinates: [-46.38, -23.33] },
        { name: "Sarajevo", country:"Bosnia and Herzegovina", coordinates: [18.21, 43.51] },
        { name: "Seattle", country:"USA", coordinates: [-122.20, 47.37] }, 
        { name: "Seoul", country:"South Korea", coordinates: [126.59, 37.34] },
        { name: "Seville", country:"Spain", coordinates: [-5.59, 37.23] },
        { name: "Shanghai", country:"China", coordinates: [121.4737,31.2304] },
        { name: "Sochi", country:"Russia", coordinates: [39.43, 43.35] },
        { name: "Singapore", country:"Singapore", coordinates: [103.8198,1.3521] },
        { name: "Sofia", country:"Bulgaria", coordinates: [23.20, 42.42] },
        { name: "St. Louis", country:"USA", coordinates: [-90.12, 38.38] },
        { name: "Stockholm", country:"Sweden", coordinates: [18.04, 59.20] },
        { name: "Sydney", country: "Australia", coordinates: [151.2093,-33.8688] },
        { name: "Taipei", country: "Taiwan", coordinates: [121.38, 25.02] },
        { name: "Tel Aviv", country: "Israel", coordinates: [34.47, 32.04] },
        { name: "Tijuana", country: "Mexico", coordinates: [-117.02, 32.32] },
        { name: "Tokyo", country: "Japan", coordinates: [139.42, 35.41] },
        { name: "Toronto", country: "Canada", coordinates: [-79.24, 43.42] },
        { name: "Ulaanbaatar", country: "Mongolia", coordinates: [106.55, 47.55] }, 
        { name: "Vancouver", country:"Canada", coordinates: [-123.06, 49.15] },
        { name: "Venice", country:"Italy", coordinates: [12.20, 45.26] },
        { name: "Warsaw", country:"Poland", coordinates: [21.01, 52.14] },
        { name: "Washington DC", country:"USA", coordinates: [-77.02, 38.54] },
        { name: "Winnipeg", country:"Canada", coordinates: [-97.08, 49.54] },
        { name: "Xi'an", country:"China", coordinates: [108.54, 34.16] },
        { name: "Zurich", country: "Switzerland", coordinates: [8.5417,47.3769] },


      ]
    }
    this.handleCitySelection = this.handleCitySelection.bind(this)
    this.handleMarkerSelection = this.handleMarkerSelection.bind(this)
    this.handleReset = this.handleReset.bind(this)

  }

  handleCitySelection(evt) {
   
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.cities[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 2,
      city: city
    })
  }


  handleMarkerSelection(evt) {
    console.log(evt)
    this.setState({
      center: evt.coordinates,
      zoom: 2,
      city: evt
    })
  }



  handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
      city: null
    })
  }

  render() {

   if (!this.state.city){
    return (
      <div>
        <div style={wrapperStyles}>
          {
            this.state.cities.map((city, i) => (
              <button
                key={i}
                className="btn px1"
                data-city={i}
                onClick={this.handleCitySelection}
                >
                { city.name }
              </button>
            ))
          }
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>
        </div>
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",

            }}
            >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography={geographyObject}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))} 
              </Geographies>
              <Markers>
                {
                  this.state.cities.map((city, i) => (
                    <Marker onClick={this.handleMarkerSelection} data-city={i} marker={city}>
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))
                }
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    )

} else {

  return (
      <div>
    
        <div style={wrapperStyles}>
            <h1> {this.state.city.name}, {this.state.city.country}</h1>
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>
        </div>
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",

            }}
            >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography={geographyObject}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))} 
              </Geographies>
              <Markers>
                {
          
                    <Marker marker={this.state.city}>
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                 
                }
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
          <br></br>
          <Videos city={this.state.city}/>
        </div>
      </div>
    )
}




  }







}

export default ZoomPan