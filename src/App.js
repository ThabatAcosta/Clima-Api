import React from 'react';

import background from './style/cambio-sol-luna.gif'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Views (vistas o paginas)
import Home from './views/Home/Home.jsx';
import MoreInformationWeather from './views/Home/MoreInformationWeather';
// import Error404 from './components/Error404';



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

       {/* <Route path="/*">
         <Error404 />
       </Route> */}

     </Switch>
    </BrowserRouter>

</div>
  );
}

export default App;
