import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

export default function TimeAndLocation({weather : {dt , timezone , name , country }}) {
    
    return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-center p-2 text-xl font-extralight'>
                {formatToLocalTime(dt , timezone)}
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                {`${name}`}
            </p>
            {country && 
            
            <p className='text-white text-3xl font-medium'>
                {`, ${country}`}
            </p>
            }
        </div>
    </div>
  )
}
