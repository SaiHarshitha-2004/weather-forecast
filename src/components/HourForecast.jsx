import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'


const HourForecast = ({title , items}) => {

   
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>

        </div>
        <hr className='my-2'></hr>

        <div className='flex flex-row items-center justify-between text-white'>
            {items.map(item => (
                <div className='flex flex-col items-center justify-between text-white'>
                <p className='font-light text-sm'>{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} className = "w-12 my-1" alt="" />
                <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                </div>

            ))}

           
        </div>
    </div>
  )
}

export default HourForecast