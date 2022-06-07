import React from 'react'

const QuickSearch = ({setQuery}) => {
  
  const cities = [
  {
    id:1,
    title: 'New York'
  },
  {
    id:2,
    title: 'Paris'
  },
  {
    id:3,
    title: 'Tokyo'
  },
  {
    id:4,
    title: 'Sydney'
  },
  {
    id:5,
    title: 'Istanbul'
  },
  ]

  return (

    <div className='items-center justify-around flex my-6'>
      {cities.map((city) => (
        <button 
        key={city.id} 
        className='text-lg font-medium text-white' 
        onClick={() => setQuery({ q: city.title })} 
        >
        {city.title}</button>
      ))}
    </div>
  );
}

export default QuickSearch