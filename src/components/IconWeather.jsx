import React from 'react'

export const IconWeather = ({icon, weatherDescription}) => {
	return (
		<>
			<img className='w-16 h-16 flex '
				src={` http://openweathermap.org/img/wn/${icon}@2x.png`} 
				alt={weatherDescription}
			/>
		</>
	);
}
