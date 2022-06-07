import React from 'react'
import {FaLocationArrow, FaSearch} from "react-icons/fa"



const SearchBar = () => {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

            <input 
            type='text' 
            className='text-xl font-light focus:outline-none p-2 w-full shadow-xl capitalize placeholder:lowercase' placeholder='Search City'/>
        <FaSearch size={30} className='text-white transition ease-out hover:scale-125'/>
        <FaLocationArrow size={30} className='text-white transition ease-out hover:scale-125'/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button className='font-light text-xl text-white' name='imperial'>°F </button>
            <p className='mx-2 text-white text-xl'> |</p>
            <button className='font-light text-xl text-white' name='metric'>°C </button>
        </div>
    </div>
  )
}

export default SearchBar