import React, { useState} from 'react'


//components 
import WeatherForm from '../../components/WeatherForm';
import Louder from '../../components/Louder';
import InformationWeather from './InformationWeather';
import Header from '../../components/Header';
import Error404 from '../../components/Error404';



const Home = () => {

     //State 
     const [cityName, setCityName] = useState("");
     const [cityInformation, setCityInformation] = useState(null);
     const [loader, setLoader] = useState(false);
    //  const [error404, setError404] = useState(false);
 
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
             const response = await fetch(API);
             const result = await response.json();
             setCityInformation(result); 

             
         } catch (error) {
            setLoader(false);
            console.error(error)
             
         }
         setLoader(false);
            
           
          
            
            // if (result.hasOwnProperty('name')) {
            //     setCityInformation(result); 
            //     setLoader(false); 
               
            // }
            // setLoader(false);

           return 
           
            
     };

    //  useEffect(() => {
    //     handleSearchWeather().then(result => {
    //         if (result.hasOwnProperty('name')) {
    //             setCityInformation(result); 
    //             setLoader(false);   
    //         }
    //         throw new Error('el clima es malo');
    //     }).catch(error => console.error(error));
       
    //     setLoader(false);
    //  }, [cityInformation])


    return (
        <div >
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

           {/* {
               error404 && <Error404/>
           }  */}

        </div>
    )
}

export default Home
