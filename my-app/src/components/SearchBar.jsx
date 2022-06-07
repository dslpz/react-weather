import React, {useState} from 'react';
import {FaLocationArrow, FaSearch} from "react-icons/fa";



function SearchBar ({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

          <input 
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type='text' 
            className='rounded-xl text-xl font-light focus:outline-none p-2 w-full shadow-xl capitalize placeholder:lowercase' 
            placeholder='Search City'
            />
            <FaSearch 
            size={30} 
            className='text-purple-900 transition ease-out hover:scale-125'
            onClick={handleSearchClick}/>
            <FaLocationArrow
            size={30} 
            className='text-purple-900 transition ease-out hover:scale-125'
            onClick={handleLocationClick}/>
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
            <button 
            className='text-purple-900 font-light text-xl text- hover:scale-125 transition ease-out' 
            name='imperial'
            onClick={handleUnitsChange}
            >
              °F </button>
            <p className='mx-2 text-purple-900 text-xl'> |</p>
            <button 
            className='font-light text-xl text-purple-900 hover:scale-125 transition ease-out' 
            name='metric'
            onClick={handleUnitsChange}
            >
              °C </button>
        </div>
    </div>
  )
};

export default SearchBar