import './App.css';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import Temp from './components/Temp';
import getFormattedWeatherData from './weather/weatherInfo';
import { useEffect, useState } from 'react';


function App() {

  const [query, setQuery] = useState({q: 'houston'})
  const [units, setUnits] = useState('imperial')
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
    <div className="mx-auto max-w-screen-md bg-gradient-to-br from-cyan-900 to-cyan-200 h-fit shadow-xl shadow-gray-600 mt-4 py-5 px-32">
      <SearchBar />

      {weather && (
        <div>
      <Location weather={weather} />
      <Temp weather={weather} />

      <Forecast title='hourly forecast'/>
      <Forecast title='five day forecast' />

        </div>

      )}

      
    </div>
  );
}

export default App;
