import React from 'react'

const WeatherForm = ({handleCity, handleSearchWeather}) => {
    return (
        <div>
          <form className=" mt-20 text-center w-5/6 tablet:w-1/2  m-auto "
                action="" 
                onSubmit={(e) => handleSearchWeather(e)} >

            <input className=" p-1 w-11/12 md:w-2/5 border-4 outline-none  "
                   type="text" 
                   placeholder="City Name" 
                   onChange={({target}) => handleCity(target)} />

            <input className=" border-8"
                  type="submit" 
                  value="Search"/>
          </form>

        </div>
    )
}

export default WeatherForm;

