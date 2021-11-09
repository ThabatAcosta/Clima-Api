import React from 'react'
import { useHistory, useLocation} from 'react-router'

const MoreInformationWeather = () => {
    const history = useHistory();
    let location = useLocation();
    const {state} = location
    
 console.log('object :>> ',  state);

   const handleClickGoBack = () => {
        history.goBack();
    }


    return (
        <div className=' w-full'>
            <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                    

                    <div className='w-full border rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'> 
                      <h1 className='text-xl text-white font-bold mb-2'>{state?.name} </h1>
                    </div>
                    <div className='w-full border rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'> 
                      <h2 className='text-xl text-white font-bold mb-2'> Longitud:{state?.coord.lon} Latitud:{state?.coord.lat}</h2>
                    </div>
                    <div className='w-full border rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'>
                        <h2 className='text-xl text-white font-bold mb-2'>Temperature {state?.main?.temp}º</h2> 
                    </div>
                    <div className='w-full border rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'>
                       <h2 className='text-xl text-white font-bold mb-2'> Humidity {state?.main?.humidity}</h2>
                    </div>
                    <div className='w-full border rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'>
                        <h2 className='text-xl text-white font-bold mb-2'>Pressure {state?.main?.pressure} </h2>
                    </div>
                    <div className='w-full border rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'>
                        <h2 className='text-xl text-white font-bold mb-2'> Temperature Max {state?.main?.temp_max} Temperature Min {state?.main?.temp_min}</h2>
                    </div>

                    <div>
                        <button className='border-2 border-gray-100 rounded-lg px-3 py-2 text-white cursor-pointer hover:bg-gray-200 hover:text-black' onClick={handleClickGoBack}>Atras</button>
                    </div>
           
               
               
               
                </div>
            </section>  
        </div>
    )
}

export default MoreInformationWeather
