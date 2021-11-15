import React from 'react'
import { Link } from 'react-router-dom';
import { IconWeather } from '../../components/IconWeather'

const InformationWeather = ({cityInformation, }) => {


    return (
         <div className= '   w-full    flex  justify-center items-center my-6'>
            <div className=" w-8/12 md:w-5/12 lg:w-4/12 bg-primary shadow-2xl p-6 rounded-lg border  flex justify-between">

           
                <div className=' flex flex-col  space-y-3'>
                <h1 className=' text-4xl lg:text-6xl text-yellow-400 hover:text-blue-400 drop-shadow-2xl font-bold  '> {cityInformation?.main?.temp}º</h1>
                   
                    <h2 className=' text-3xl lg:text-5xl font-extralight text-black  '>{cityInformation.name}</h2>
                   </div>

                    <div className=' w-2/5 flex flex-col justify-between  items-center  '> 
                 <IconWeather icon={cityInformation.weather[0].icon}
                weatherDescription={cityInformation.weather[0].description}
                />
                 <Link
                        to={{
                              pathname: `/weather/${cityInformation?.name}`,
                              state: cityInformation
                            }}
                        className=' w-4/5 text-center bg-yellow-400 border border-gray-100 rounded-lg px-2 py-1 cursor-pointer hover:bg-blue-400 hover:text-black'>
                        See More
                    </Link></div>  
            </div>
        </div>      

    )
}

export default InformationWeather;

