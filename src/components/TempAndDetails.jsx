import React from 'react'
import { PiThermometerLight } from "react-icons/pi";
import { BsWind } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { BsSunset } from "react-icons/bs";
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';




const TempAndDetails = ({weather : {
    details , icon , temp , temp_min , temp_max , sunrise , sunset , speed , humidity , feels_like , timezone
}}) => {
  return (
    <div>
        <div className='flex  items-center justify-center py-5 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>

        <div className='flex lg:flex-row lg:space-y-0 space-y-4 flex-col items-center justify-around  text-white py-3'>
            
            <div className='flex flex-row  justify-center items-center '> 
                <img src={iconUrlFromCode(icon)} alt=""  className='w-20'/>
                <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            </div>
            
            <div className='flex flex-col float-left space-y-3'>
                
                <div className='flex font-light text-sm items-center'>
                    <PiThermometerLight size={18} className='mr-1'/>
                    Real fell :
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>

                <div className='flex font-light text-sm items-center'>
                    <CiDroplet size={18} className='mr-1'/>
                    Humidity :
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>

                <div className='flex font-light text-sm items-center'>
                    <BsWind size={18} className='mr-1'/>
                    Wind Speed:
                    <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                </div>

            </div>
        </div>

        <div className='flex lg:flex-row flex-col items-center justify-center space-x-2 text-white text-sm py-3'>
            
            <div  className='flex flex-row items-center p-2 lg:space-x-0 lg:space-y-0 space-x-3'>
                <div className='flex flex-row items-center space-x-2'>
                    <IoPartlySunnyOutline />
                    <p className='font-light'>
                        Rise : <span className='font-medium ml-1'>{formatToLocalTime(sunrise , timezone , 'hh:mm a')}</span>
                    </p>
                    <p className='font-light'>|</p>
                </div>

                <div  className='flex flex-row items-center space-x-2'>
                <BsSunset />
                <p className='font-light'>
                    Set : <span className='font-medium ml-1'>{formatToLocalTime(sunset , timezone , 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>
                </div>

            </div>

            <div className='flex flex-row items-center p-2 lg:space-x-0 lg:space-y-0 space-x-3' >
                <div  className='flex flex-row items-center space-x-2'>
                <IoPartlySunnyOutline />
                <p className='font-light'>
                    High : <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
                </p>
                <p className='font-light'>|</p>
                </div>

                <div  className='flex flex-row items-center'>
                <IoPartlySunnyOutline />
                <p className='font-light'>
                    Low : <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
                </p>
                </div>
            </div>
           

            
        </div>

    </div>
  )
}

export default TempAndDetails