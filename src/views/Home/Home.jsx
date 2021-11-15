import React, { useState} from 'react'

import back from '../../style/cambio-sol-luna.gif'

//components 
import WeatherForm from '../../components/WeatherForm';
import Louder from '../../components/Louder';
import InformationWeather from './InformationWeather';
import Header from '../../components/Header';
import Error404 from '../../components/Error404';
import { useHistory } from 'react-router';



const Home = () => {

  const history = useHistory();

     //State 
     const [cityName, setCityName] = useState("");
     const [cityInformation, setCityInformation] = useState(null);
     const [loader, setLoader] = useState(false);
    const [error404, setError404] = useState(false);
    
 
     //Funciones
     const handleCity = ({value}) => {  
       setCityName(value);
     };
 
     const handleSearchWeather = async e => {
         e.preventDefault();
         setCityInformation(null);
         setLoader(true);
        
         try { 
             
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
            //const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=02bdd03fc8c7013ae820c80e61a9d080`;
            const response = await fetch(API);
             const result = await response.json();
              

             if (result.hasOwnProperty('name')) {
              setCityInformation(result);
              setLoader(false);
              return;
            }
            throw new Error('This city has not been found');

             
         } catch (error) {
            setLoader(false);
            console.error(error)
            // setError404(true)
            history.push('/*');
         }
         setLoader(false);
            

           return 
           
            
     };

  
    return (
        <>

        <div  className='m-0 p-0 h-screen bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${ back })` }}>
           <Header/>

           <WeatherForm
           handleCity={handleCity} 
           handleSearchWeather={handleSearchWeather}
           /> 

           {
               loader && <Louder />
           }  

           {
               cityInformation && 
              ( <InformationWeather
                cityInformation={cityInformation} 
                 />)  
           }

        </div>


        </>
        

    
    )
}

export default Home;
