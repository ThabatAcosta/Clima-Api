import React from 'react'
import { Link } from 'react-router-dom';

const InformationWeather = ({cityInformation}) => {

    //hooks router


console.log('city :>> ', cityInformation);

    return (
        <div className='bg-gray-400'>

            <h2>{cityInformation.name}</h2>
         <div>{cityInformation?.main?.temp}</div>
            <Link
                to={{
                    pathname: `/weather/${cityInformation?.name}`,
                    state: cityInformation
                }}
            >
               Ver màs
            </Link>

        </div>
    )
}

export default InformationWeather;

