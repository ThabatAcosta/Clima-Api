import React from 'react'

export const IconWeather = ({icon, weatherDescription}) => {
	return (
		<>
			<img className=' w-full h-full flex '
				src={` http://openweathermap.org/img/wn/${icon}@2x.png`} 
				alt={weatherDescription}
			/>
		</>
	);
}
