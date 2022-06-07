import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
      <div className='flex justify-start items-center mt-6'>
        <p className='text-white font-medium uppercase'>
          {title}</p>
      </div>
      <hr className='my-2' />

      <div className='text-white items-center flex flex-row justify-between'>

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
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>1:09 AM</p>
          <img src='http://openweathermap.org/img/wn/01d@2x.png' className='my-1 w-12' alt='' />
          <p className='font-medium'>78°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast