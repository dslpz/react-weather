import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import Location from './components/Location';
import Temp from './components/Temp';


function App() {
  return (
    <div className="mx-auto max-w-screen-md bg-gradient-to-br from-cyan-900 to-cyan-200 h-fit shadow-xl shadow-gray-600 mt-4 py-5 px-32">
      <Inputs />

      
      <Location />
      <Temp />

      <Forecast title='hourly forecast'/>
      <Forecast title='five day forecast' />
    </div>
  );
}

export default App;
