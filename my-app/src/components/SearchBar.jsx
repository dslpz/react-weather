import React, {useState} from 'react'
import {FaLocationArrow, FaSearch} from "react-icons/fa"



function SearchBar({ setQuery }) {

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
  }
  
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
            className='text-xl font-light focus:outline-none p-2 w-full shadow-xl capitalize placeholder:lowercase' 
            placeholder='Search City'
            />
        
        <FaSearch 
        size={30} 
        className='text-white transition ease-out hover:scale-125'
        onClick={handleSearchClick}/>
        <FaLocationArrow
        size={30} 
        className='text-white transition ease-out hover:scale-125'
        onClick={handleLocationClick}/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button className='font-light text-xl text-white hover:scale-125 transition ease-out' name='imperial'>°F </button>
            <p className='mx-2 text-white text-xl'> |</p>
            <button className='font-light text-xl text-white hover:scale-125 transition ease-out' name='metric'>°C </button>
        </div>
    </div>
  )
};

export default SearchBar