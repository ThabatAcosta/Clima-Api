import React, {useState} from 'react'

//components 
import WeatherForm from '../../components/WeatherForm';
import Louder from '../../components/Louder';
import InformationWeather from './InformationWeather'
import Header from '../../components/Header';



const Home = () => {

     //State 
     const [cityName, setCityName] = useState("");
     const [cityInformation, setCityInformation] = useState(null);
     const [loader, setLoader] = useState(false);
 
     //Funciones
     const handleCity = ({value}) => {  
       setCityName(value);
     };
 
     const handleSearchWeather = async e => {
         e.preventDefault();
         setCityInformation(null);
         setLoader(true);
        
 
             const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`;
             const response = await fetch(API);
             const result = await response.json();
          
            
            if (result.hasOwnProperty('name')) {
                setCityInformation(result); 
                setLoader(false); 
               
            }
            setLoader(false);

           return   
            
     };




    return (
        <div>
           <Header/>

           <WeatherForm
           handleCity={handleCity} 
           handleSearchWeather={handleSearchWeather}
           /> 

           {
               loader && <Louder/>
           }  

           {
               cityInformation && 
              ( <InformationWeather
                cityInformation={cityInformation} 
                 />)  
           }
        </div>
    )
}

export default Home
