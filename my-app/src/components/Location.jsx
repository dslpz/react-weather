import React from 'react'
import { formatToLocalTime } from '../weather/weatherInfo'

const Location = ({weather: {dt, timezone, name, country}}) => {
  return (
    <div>
        <div className='flex justify-center my-6 items-center'>
            <p className='text-white text-xl font-extralight'>
                    {formatToLocalTime(dt, timezone)}
            </p>
        </div>

        <div className='my-3 items-center flex justify-center'>
            <p className='text-white text-3xl font-medium'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default Location