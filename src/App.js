import React from 'react';

import background from './style/cambio-sol-luna.gif'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Views (vistas o paginas)
import Home from './views/Home/Home.jsx';
import MoreInformationWeather from './views/Home/MoreInformationWeather';




function App() {
  return (

<div className='m-0 p-0 h-screen' style={{backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            minHeight:'100vh',
            backgroundSize: 'cover' }}>

    <BrowserRouter >
     <Switch>

       <Route path="/" exact>
       <Home />
       </Route>

       <Route path="/weather/:name" exact>
         <MoreInformationWeather />
       </Route>

     </Switch>
    </BrowserRouter>

</div>
  );
}

export default App;
