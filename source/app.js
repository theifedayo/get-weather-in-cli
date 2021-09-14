#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const {
    getLocationWeather,
    getLocationWeatherFull,
    getRandomLocationWeather,
    getRandomLocationWeatherFull
} = require('./services/weather.js');



program
    .version('1.0.0')
    .description(chalk.green('WEATHER CLI'))



program
    .command('name <locationName>')
    .alias('l')
    .description(chalk.yellow('Get simple weather data for a particular location'))
    .action((locationName) => {
        getLocationWeather(locationName);
    })


program
    .command('name-full <locationName>')
    .alias('lf')
    .description(chalk.yellow('Get JSON weather data for a particular location'))
    .action((locationName) => {
        getLocationWeatherFull(locationName);
    })


program
    .command('random-location')
    .alias('rl')
    .description(chalk.yellow('Get simple weather data for a random location'))
    .action(() => {
        getRandomLocationWeather();
    })

program
    .command('random-location-full')
    .alias('rl')
    .description(chalk.yellow('Get JSON weather data for a random location'))
    .action(() => {
        getRandomLocationWeatherFull();
    })

program.parse(process.argv);

