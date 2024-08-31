import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'


const days = ['Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun']


const DailyForecast = ({title , items}) => {
    const dayInAWeek = new Date().getDate() ;
    const forecastDays = days.slice(dayInAWeek , days.length).concat(days.slice(0 , dayInAWeek)) ;

  return (
            <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>

            </div>
            <hr className='my-2'></hr>

            <div className='flex flex-row items-center justify-between text-white'>
                {items.map((item , idx) => (
                    <div className='flex flex-col items-center justify-between text-white'>
                    <p className='font-light text-sm'>{forecastDays[idx]}</p>
                    <img src={iconUrlFromCode(item.icon)} className = "w-12 my-1" alt="" />
                    <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                    </div>

                ))}

            
            </div>
        </div>
  )
}

export default DailyForecast