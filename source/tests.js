const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');
const dotenv = require('dotenv');
const axios = require('axios');
const random = require('random-names-places');





//configure secrets - API_KEY
dotenv.config({path: './config.env'});


const apiKey = "f1dd65cd893c4c893f235081e61a5b82"; //process.env.API_KEY
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';


chai.should();

chai.use(chaiHttp);


describe("GET WEATHER DATA", () => {
    it("It should GET weather data from source", async () => {
        let response = await axios.get(`${openWeatherMapURL}?q=Lagos&units=metric&appid=${apiKey}`);
        response.should.have.status(200);
        response.should.have.property('data');
        response.data.should.be.a('object');
        response.data.weather.should.be.a('array');
    });
});