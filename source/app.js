const program = require('commander');
const chalk = require('chalk');
const {
    getLocationWeather,
    getLocationWeatherFull,
    getRandomLocatiionWeather,
    getRandomLocatiionWeatherFull
} = require('./services/weather');



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
    .command('name <locationName> -f')
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
        getRandomLocatiionWeather();
    })

program
    .command('random-location -f')
    .alias('rl')
    .description(chalk.yellow('Get JSON weather data for a random location'))
    .action(() => {
        getRandomLocatiionWeather();
    })

program.parse(process.argv);

