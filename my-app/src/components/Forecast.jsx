import React from 'react'
import { iconUrlFromCode } from '../weather/weatherInfo'

const Forecast = ({title, items}) => {
  console.log(items);
  return (
    <div>
      <div className='flex justify-start items-center mt-6'>
        <p className='text-white font-medium uppercase'>
          {title}</p>
      </div>
      <hr className='my-2' />
      <div className='text-purple-900 items-center flex flex-row justify-between'>
        {items.map(item => (
           <div className='flex flex-col items-center justify-center'>
           <p className='font-light text-sm'>{item.title}</p>
           <img src={iconUrlFromCode(item.icon)} className='my-1 w-12' alt='' />
           <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
         </div>
        ))}
        {/* <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>1:09 AM</p>
          <img src='http://openweathermap.org/img/wn/01d@2x.png' className='my-1 w-12' alt='' />
          <p className='font-medium'>78°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>1:09 AM</p>
          <img src='http://openweathermap.org/img/wn/01d@2x.png' className='my-1 w-12' alt='' />
          <p className='font-medium'>78°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>1:09 AM</p>
          <img src='http://openweathermap.org/img/wn/01d@2x.png' className='my-1 w-12' alt='' />
          <p className='font-medium'>78°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>1:09 AM</p>
          <img src='http://openweathermap.org/img/wn/01d@2x.png' className='my-1 w-12' alt='' />
          <p className='font-medium'>78°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>1:09 AM</p>
          <img src='http://openweathermap.org/img/wn/01d@2x.png' className='my-1 w-12' alt='' />
          <p className='font-medium'>78°</p>
        </div> */}
      </div>
    </div>
  )
};

export default Forecast