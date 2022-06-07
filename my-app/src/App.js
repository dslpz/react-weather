import './App.css';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import Temp from './components/Temp';
import getFormattedWeatherData from './weather/weatherInfo';
import { useEffect, useState } from 'react';



function App() {

  const [query] = useState({q: 'houston'})
  const [units] = useState('imperial')
  const [weather, setWeather] = useState(null)

useEffect(() => {
  const fetchWeather = async () => {
    await getFormattedWeatherData({...query, units}).then((data) => {
      setWeather(data);
    });
    
  };

  fetchWeather();
}, [query, units]);
  
  return (
    <div className="mx-auto max-w-screen-md rounded-3xl bg-gradient-to-br from-purple-900 to-purple-200 h-fit shadow-xl shadow-black mt-4 py-5 px-32">
      <SearchBar setQuery units setUnits />
      {weather && (
      <div>
      <Location weather={weather} />
      <Temp weather={weather} />

      <Forecast title='hourly forecast' items={weather.hourly}/>
      <Forecast title='five day forecast' items={weather.daily}/>
      </div>
      )} 
    </div>
  );
}

export default App;
