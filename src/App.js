import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api/api';
import './App.css';
import CurrentWeather from './components/CurrentWeather/Currentweather';
import Search from './components/search/search';
function App() {
  const [currentWeather, setCurrentWeather]= useState(null)
  const [forecast, setForecast]= useState(null)


  const handleOnSearchChange=(searchData) =>{
    const [lat,lon] =searchData.value.split("")

    const CurrentWeatherFetch= fetch(`${WEATHER_API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const WeatherForecast= fetch(`${WEATHER_API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([CurrentWeatherFetch, WeatherForecast])
    .then(async(response)=>{
        const weatherResponse = await response[0].json()
        const foreCastResponse = await response[1].json()

        setCurrentWeather({city: searchData.label , ...weatherResponse})
        setForecast({city: searchData.label , ...foreCastResponse})
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
  <div className= "Container">
    <Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather/>
  </div>
  )
}
  
  

export default App;
