import process from 'node:process';
import {getWeather} from './getWeather.js'

// console.log(process.argv[2]);

getWeather(process.argv[2],({query,des,temp,humidity}) =>{
  // error?console.log(error):
  // console.log('res: ', res);
  console.log(query+ '\n' 
  + des + 
  `. It's currently `+ temp + 
  ` degrees out there. and it's `+ humidity +` percent humid.`)
})















// const apiKey = '60652bf718726facb3ffbbd659f19549'
// const city = 'Tehran'
// // Current Weather API Endpoint
// let apiEndpoint = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + city
    // console.log(apiEndpoint);
// optional parameters: 
//current
    // & units = m
    // & language = en
    // & callback = MY_CALLBACK
// historical

// Historical Weather API Endpoint

// http://api.weatherstack.com/historical
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York
//     & historical_date = 2015-21-01
    
// // optional parameters: 

//     & hourly = 1
//     & interval = 3
//     & units = m
//     & language = en
//     & callback = MY_CALLBACK


//     // Historical Weather Time-Series:

// http://api.weatherstack.com/historical
// ? access_key = YOUR_ACCESS_KEY
// & query = New York
// & historical_date_start = 2015-10-21
// & historical_date_end = 2015-10-25

// // optional parameters: 

// & hourly = 1
// & interval = 3
// & units = m
// & language = en
// & callback = MY_CALLBACK

// // Weather Forecast API Endpoint

// http://api.weatherstack.com/forecast
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York
    
// // optional parameters: 

//     & forecast_days = 7
//     & hourly = 1
//     & interval = 3
//     & units = m
//     & language = en
//     & callback = MY_CALLBACK
// Current Weather API Endpoint
