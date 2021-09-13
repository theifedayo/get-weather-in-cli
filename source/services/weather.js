const axios = require('axios');
const dotenv = require('dotenv');
const networkHandler = require('./network.js');




//configure secrets - API_KEY
dotenv.config({path: '../config.env'});


const apiKey = process.env.API_KEY;
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
let NetworkHandler = networkHandler.NetworkHandler;



getLocationWeather = async (params) => {
	try{
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${params}&units=metric&appid=${process.env.API_KEY}`);
		console.log(weatherData);
	}catch(err){
		console.log('An error occurred!');
	}
}

getLocationWeatherFull = async (params) => {
	try{
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${params}&units=metric&appid=${process.env.API_KEY}`);
		console.log(weatherData);
	}catch(err){
		console.log('An error occurred!');
	}
}

getRandomLocatiionWeather = async (params) => {
	try{

	}catch(err){
		console.log('An error occurred!');
	}
}


getLocationWeatherFull('Ile-Ife');


