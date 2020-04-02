import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Pendings from './pages/Pendings';
import AllPendings from './pages/AllPendings';
import List from './pages/List';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Login}/>
        <Route path="/register" component = {Register}/>
        <Route path="/pendings" component = {Pendings}/>
        <Route path="/list" component = {List}/>
        <Route path="/allpendings" component = {AllPendings}/>
      </Switch>
    </BrowserRouter>
  );
}
