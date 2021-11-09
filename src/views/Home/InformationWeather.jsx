import React from 'react'
import { Link } from 'react-router-dom';

const InformationWeather = ({cityInformation}) => {


console.log('city :>> ', cityInformation);

    return (
         <div className= ' shadow-2xl rounded-lg border w-64 h-50 p-11 m-auto my-11 flex flex-col justify-center'>
            <div className="sm:w-2/3">

                <h1 className=' text-4xl text-white font-bold mb-2 '> {cityInformation?.main?.temp}º</h1>
                   
                    <h2 className='  md:text-lg mb-4'>{cityInformation.name}</h2>
                    {/* <div>{cityInformation?.main?pressure}</div> */}
                    <Link
                        to={{
                              pathname: `/weather/${cityInformation?.name}`,
                              state: cityInformation
                            }}
                        className=' border border-gray-100 rounded-lg px-2 py-1 text-white cursor-pointer hover:bg-gray-200 hover:text-black'>
                        Ver mas
                    </Link>
            </div>
        </div>      

    )
}

export default InformationWeather;

