const axios = require('axios');
const dotenv = require('dotenv');
const networkHandler = require('./network.js');




//configure secrets - API_KEY
dotenv.config({path: '../config.env'});


const apiKey = process.env.API_KEY;
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
let NetworkHandler = networkHandler.NetworkHandler;



getLocationWeather = async (param) => {
	try{
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${param}&units=metric&appid=${process.env.API_KEY}`);
		console.log(weatherData);
	}catch(err){
		console.log('An error occurred! ⚠️ ');
	}
}







getLocationWeatherFull = async (param) => {
	try{
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${param}&units=metric&appid=${process.env.API_KEY}`);
		if(weatherData != undefined){
			console.log(`Weather data for ${param}`);
        	console.log(weatherData);	
		}else{
			console.log('weather data is undefined 😔');
		}
		
		
	}catch(err){
		console.log('An error occurred! ⚠️');
	}
}






getRandomLocatiionWeather = async (param) => {
	try{

	}catch(err){
		console.log('An error occurred! ⚠️');
	}
}

getRandomLocatiionWeatherFull = async (param) => {
	try{

	}catch(err){
		console.log('An error occurred! ⚠️');
	}
}


getLocationWeatherFull('Jos');

module.exports = {
    getLocationWeather,
    getLocationWeatherFull,
    getRandomLocatiionWeather,
    getRandomLocatiionWeatherFull
};


