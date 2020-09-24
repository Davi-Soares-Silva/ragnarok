import React from 'react';
import { Route, BrowserRouter  } from 'react-router-dom';

import Home from './components/pages/home';

const Routes = ()=>{
   return (
      <BrowserRouter>
         <Route component={Home} exact path="/"/>
      </BrowserRouter>
   )
}

export default Routes;