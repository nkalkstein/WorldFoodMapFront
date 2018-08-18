import React, { Component } from 'react';
import MainPage from './MainPage';


const Flight = ({time, date, airline, flightNumber}) => {
	const flightInfo= time;




return(
	<div onClick={() => Flight(time)}>
		<div>
			<div style={{float: "left", width: "24%", marginRight: "1%", marginBottom: "0.5em", color: "white"}}>
				<img  alt="alt" src={imageUrl} />
				<h4>{flightInfo}</h4>
			</div>
			<div>
				
			</div>
		</div>
	</div>



	)
}





export default Flights