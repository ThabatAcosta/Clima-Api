import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Views (vistas o paginas)
import Home from './views/Home/Home.jsx';
import MoreInformationWeather from './views/Home/MoreInformationWeather';



function App() {
  return (

<div className="fondo w-full h-full flex flex-col">

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
