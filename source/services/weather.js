const axios = require('axios');
const dotenv = require('dotenv');
const chalk = require('chalk');
const networkHandler = require('./network.js');
const { getWeatherIcon } = require('../helpers.js');
const random = require('random-names-places');



//configure secrets - API_KEY
dotenv.config({path: '../config.env'});


const apiKey = "f1dd65cd893c4c893f235081e61a5b82";//process.env.API_KEY
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
let NetworkHandler = networkHandler.NetworkHandler;



getLocationWeather = async (param) => {
	try{
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${param}&units=metric&appid=${apiKey}`);
		let data = weatherData.weather;
		console.log(`${data[0].description} at ${param}. It is currently ${weatherData.main.temp}° ${getWeatherIcon(data[0].id)}`);
	}catch(err){
		console.log('An error occurred! ⚠️');
	}
}


getLocationWeatherFull = async (param) => {
	try{
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${param}&units=metric&appid=${apiKey}`);
		if(weatherData != undefined){
			console.log(chalk.green(`Weather data for ${param}`));
        	console.log(weatherData);	
		}else{
			console.log('weather data is undefined 😔');
		}			
	}catch(err){
		console.log('An error occurred! ⚠️');
	}
}


getRandomLocationWeather = async () => {
	try{
		let param = random.place();
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${param}&units=metric&appid=${apiKey}`);
		let data = weatherData.weather;
		console.log(`${data[0].description} at ${param}. It is currently ${weatherData.main.temp}° ${getWeatherIcon(data[0].id)}`);
	}catch(err){
		console.log('An error occurred! ⚠️ ');
	}
}


getRandomLocationWeatherFull = async () => {
	try{
		let param = random.place();
		let networkhandler = new NetworkHandler();
		var weatherData = await networkhandler.getData(`${openWeatherMapURL}?q=${param}&units=metric&appid=${apiKey}`);
		if(weatherData != undefined){
			console.log(chalk.green(`Weather data for ${param}`));
        	console.log(weatherData);	
		}else{
			console.log('weather data is undefined 😔');
		}			
	}catch(err){
		console.log('An error occurred! ⚠️');
	}
}

getRandomLocationWeather();
getRandomLocationWeatherFull();
module.exports = {
    getLocationWeather,
    getLocationWeatherFull,
    getRandomLocationWeather,
    getRandomLocationWeatherFull
};


