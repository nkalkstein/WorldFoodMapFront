import React, { Component } from 'react';
import MainPage from './MainPage';


const Flight = ({time, date, airline, flightNumber}) => {
	const flightInfo= time;

//Flights- Show how many flights at a time?  Real time updating?  Note about this (not updating)?

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
            	flights: flights
            })
          })
       }




}




export default Flights
