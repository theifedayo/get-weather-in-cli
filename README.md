# get-weather-in-cli

[![GitHub Repo size in Bytes](https://img.shields.io/github/repo-size/theifedayo/get-weather-in-cli)](https://github.com/theifedayo/get-weather-in-cli)
[![Npm package version](https://img.shields.io/npm/v/get-weather-in-cli)](https://github.com/theifedayo/get-weather-in-cli)
[![Issues](https://img.shields.io/github/issues/theifedayo/get-weather-in-cli)](https://github.com/theifedayo/get-weather-in-cli)
[![Pull Requests](https://img.shields.io/github/issues-pr/theifedayo/get-weather-in-cli)](https://github.com/theifedayo/get-weather-in-cli)
[![License](https://img.shields.io/npm/l/get-weather-in-cli)](https://github.com/theifedayo/get-weather-in-cli)


## Description
get-weather-in-cli allows users to get any location's weather data on terminal.

## Installation

via [npm](https://www.npmjs.com/package/get-weather-in-cli) :package:

```
npm install -g get-weather-in-cli
```

## Usage

```bash
GET WEATHER IN CLI

Options:
  -V, --version                output the version number
  -h, --help                   display help for command

Commands:
  name|l <locationName>        Get simple weather data for a particular location
  name|lf <locationName> <-f>  Get JSON weather data for a particular location
  random-location|rl           Get simple weather data for a random location
  random-location|rl <-f>      Get JSON weather data for a random location
  help [command]               display help for command

  Examples:
  get-weather-in-cli name Lagos
  get-weather-in-cli name 'Lagos'
  get-weather-in-cli name-full Jos
  get-weather-in-cli name-full 'Jos'
  get-weather-in-cli random-location
  get-weather-in-cli random-location-full
```

<div>
  <img width="676" alt="Screenshot 2021-09-13 at 23 23 48" src="https://user-images.githubusercontent.com/47679952/133164264-9de179e3-f179-4a8c-8de5-ae100c41d9d2.png"><br>
  <img width="676" alt="Screenshot 2021-09-13 at 22 47 56" src="https://user-images.githubusercontent.com/47679952/133161742-19801c25-68a0-493f-9318-1c19fcfecee1.png"><br>
  <img width="676" alt="Screenshot 2021-09-13 at 22 46 47" src="https://user-images.githubusercontent.com/47679952/133161690-9c326c1c-ea17-429c-9b81-33c5e2f24958.png"><br>
  <img width="676" alt="Screenshot 2021-09-13 at 22 49 44" src="https://user-images.githubusercontent.com/47679952/133161810-dd542480-e872-4c08-9f08-9d1b60c2f380.png"><br>
  
</div>

## Contribution
All contributions are made on the dev branch

## Tests
```bash
npm run test
```
