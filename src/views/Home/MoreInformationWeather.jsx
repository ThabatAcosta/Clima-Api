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
        <div className= ' h-full w-full flex justify-center items-center '>
            <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
                
                <div className=' grid grid-cols-1 gap-6 '>
                    <div className=' border rounded-lg sahdow-lg p-10 flex flex-col justify-center'> 
                      <h1 className='text-xl font-bold mb-2 '>{state?.name}  </h1>
                      <h2 className=''>Pais: {state?.sys.country} </h2>
                      <h2>Temperature {state?.main?.temp}º</h2>
                      <h1 className='text-xl  font-bold mb-2'> {state?.weather[0].main}</h1>
                       <h2>{state?.weather[0].description} </h2>
                       <h2 > Humidity {state?.main?.humidity}</h2>
                       
                    </div>
                </div>
                <div className='p-12'>
                        <button className=' border-2 border-gray-100 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-400 hover:text-black flex-col' onClick={handleClickGoBack}>Atras</button>
                    </div>

            </section>  
        </div>
    )
}

export default MoreInformationWeather;


// Tipos de main: Clear: claro, Mist: neblina, Rain: lluvia, Clouds: nubes
