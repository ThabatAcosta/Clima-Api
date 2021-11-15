import React from 'react'
import { useHistory, useLocation} from 'react-router';
import { IconWeather } from '../../components/IconWeather';

//Image 
import rain from '../../style/climas/Rain.jpg';
import clear from '../../style/climas/Clear.jpg';
import thunderstorm from '../../style/climas/Thunderstorm.jpg';
import clouds from '../../style/climas/Clouds.jpg';
import snow from '../../style/climas/snow.jpg';
import drizzle from '../../style/climas/Drizzle.gif';
import haze from '../../style/climas/Haze.jpg';
import mist from '../../style/climas/Mist.jpg';
import fog from '../../style/climas/Fog.jpg';


const MoreInformationWeather = () => {
    const history = useHistory();
    let location = useLocation();
    const {state} = location
    
   const handleClickGoBack = () => {
        history.goBack();
    }

    const weather = [{ Rain: rain}, {Clear: clear}, {Thunderstorm: thunderstorm}, {Clouds: clouds}, {Snow: snow}, {Drizzle: drizzle}, {Haze: haze}, {Mist: mist}, {Fog: fog}]; 
   let nameWeather = weather.find(element => element.hasOwnProperty(state?.weather[0].main)  );
    nameWeather = Object.values(nameWeather)[0];


    return (
        <div className='h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${nameWeather})`}}>
            <section className=' w-11/12 md:w-1/2    bg-primary shadow-2xl p-6 rounded-lg border'>
                
                <div className=' grid grid-cols-2  '>
                    <div className=' flex flex-col justify-between space-y-4 ' >
                <div className=' space-y-2'>
                    <h1 className='text-4xl lg:text-6xl text-yellow-400 hover:text-blue-400 drop-shadow-2xl font-bold mb-2 '>{state?.name}  </h1>
                      <h2 className='text-xl lg:text-2xl '>Country: {state?.sys.country} </h2>
                      <h1 className='text-xl  font-bold'> {state?.weather[0].main}</h1>
                    <h2 className=' text-xs md:text-base'>Temperature {state?.main?.temp}º</h2>
                    <h2 className=' text-xs md:text-base' > Humidity {state?.main?.humidity}</h2>
                </div>
                    
                        <button type='button' className=' w-10/12 border border-gray-100 rounded-lg px-3 py-2 to-black bg-yellow-400 cursor-pointer hover:bg-blue-400  ' onClick={handleClickGoBack}>Back</button>
                    
                        
                    </div>
                    <div className=' flex flex-col items-center justify-start ' >
                        <div className='w-10/12'> <IconWeather icon={state.weather[0].icon}
                weatherDescription={state.weather[0].description}/></div>
                   
                     <h2 className='text-md lg:text-2xl capitalize  drop-shadow-2xl font-bold mb-2 ' >{state?.weather[0].description} </h2>

                    </div>
                
                 
                </div>
               
               
            </section>  
        </div>
    )
}

export default MoreInformationWeather;


// Tipos de main: Clear: claro, Mist: neblina, Rain: lluvia, Clouds: nubes
