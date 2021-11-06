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
        <div>
            <h2>holaaaaaaaaa</h2>
            <button onClick={handleClickGoBack}>Atras</button>
        </div>
    )
}

export default MoreInformationWeather
