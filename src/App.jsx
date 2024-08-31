import React, { useEffect, useState } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndDetails from './components/TempAndDetails'
import getFormattedWeatherData from './services/weatherService'
import DailyForecast from './components/DailyForecast'
import HourForecast from './components/HourForecast'

const App = () => {
  
  const [query , setQuery] = useState({q : 'indore'})
  const [units , setUnits] = useState('metric') 
  const [weather , setWeather] = useState(null)

  useEffect ( () => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query , units}).then(
        (data) => {
          setWeather(data)
        }
      )
    }
  
    fetchWeather();
  } , [query , units])

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-16 space-y-8 lg:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} />
      {weather && (
        <div>
           <TimeAndLocation weather={weather}/>
          <TempAndDetails weather={weather}/>
          <HourForecast title="hourly forecast" items={weather.hourly}/>
          <DailyForecast title="daily forecast" items={weather.daily}/>
        </div>
      )}
     
    </div>
  )
}

export default App