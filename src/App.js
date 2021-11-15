import React from 'react';

// import background from './style/cambio-sol-luna.gif'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Views (vistas o paginas)
import Home from './views/Home/Home.jsx';
import MoreInformationWeather from './views/Home/MoreInformationWeather';




function App() {
  return (

<div>

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
