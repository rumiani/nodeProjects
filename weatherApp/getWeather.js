// const res = {
//   request: { 
//     type: 'City', 
//     query: 'Tehran, Iran', 
//     language: 'en', 
//     unit: 'm' 
//   },
//   location: {
//     name: 'Tehran',
//     country: 'Iran',
//     region: 'Tehran',
//     lat: '35.726',
//     lon: '51.330',
//     timezone_id: 'Asia/Tehran',
//     localtime: '2023-04-11 23:46',
//     localtime_epoch: 1681256760,
//     utc_offset: '3.50'
//   },
//   current: {
//     observation_time: '08:16 PM',
//     temperature: 24,
//     weather_code: 116,
//     weather_icons: [
//       'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'
//     ],
//     weather_descriptions: [ 'Partly cloudy' ],
//     wind_speed: 7,
//     wind_degree: 20,
//     wind_dir: 'NNE',
//     pressure: 1013,
//     precip: 0,
//     humidity: 14,
//     cloudcover: 50,
//     feelslike: 24,
//     uv_index: 1,
//     visibility: 10,
//     is_day: 'no'
//   }
// }
export const getWeather = (city, cb) =>{
    const apiKey = '60652bf718726facb3ffbbd659f19549'
    let url = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + city
    fetch(url)
        .then(response => response.json())
        .then(res => {
          res.error?cb('unable to find the city name, please check the spelling'):
          cb({
            query:res.request.query,
            lat: res.location.lat,
            lon: res.location.lon,
            time: res.location.localtime,
            temp: res.current.temperature,
            icon: res.current.weather_icons[0],
            des: res.current.weather_descriptions[0],
            wind_speed: res.current.wind_speed,
            humidity: res.current.humidity,
            visibility: res.current.visibility,
            is_day:res.current.is_day
        })
      })
        .catch(() => console.log('Error: Unable to connect, please check your connection.'))
  }