import React from 'react';
import {FaTemperatureHigh, FaTemperatureLow, FaWind} from 'react-icons/fa';
import {TbTemperature} from 'react-icons/tb';
import {FiSunset, FiSun, FiDroplet} from 'react-icons/fi';
import { formatToLocalTime, iconUrlFromCode } from '../weather/weatherInfo';

const Temp = ({weather: {
    details, icon, temp, temp_max, temp_min, sunrise, sunset, speed, humidity, feels_like, timezone

}}) => {
  return (
    <div>
        <div className='items-center py-6 flex justify-center text-xl text-cyan-200'>
            <p>{details}</p>
        </div>
        
        <div className="items-center justify-between flex flex-row text-white py-3">
            <img src={iconUrlFromCode(icon)} alt='' className='w-20' 
            />
            <p className='text text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='font-light text-sm items-center flex justify-center'>
                    <TbTemperature className='mr-1' size={20} />
                        Feels like:
                        <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='font-light text-sm items-center flex justify-center'>
                    <FiDroplet className='mr-1' size={20} />
                        Humidity:
                        <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='font-light text-sm items-center flex justify-center'>
                    <FaWind className='mr-1' size={15} />
                        Wind:
                        <span className='font-medium ml-1'>{`${speed.toFixed()}mph`}</span>
                </div>           
            </div>
        </div>

    <div className='justify-center space-x-2 text-white text-sm py-3 flex flex-row items-center'>
        <FiSun />
        <p className='font-light'>
            Sunrise:<span className='ml-1 font-medium'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className='font-light'>|</p>
        <FiSunset />
        <p className='font-light'>
            Sunset:<span className='ml-1 font-medium'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className='font-light'>|</p>
        <FaTemperatureHigh/>
        <p className='font-light'>
            High:<span className='ml-1 font-medium'>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className='font-light'>|</p>
        <FaTemperatureLow />
        <p className='font-light'>
            Low:<span className='ml-1 font-medium'>{`${temp_min.toFixed()}mph`}</span>
        </p>
        
    </div>
    </div>   
)
}

export default Temp