import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Pendings from './pages/Pendings';
import List from './pages/List';
import UploadTest from './pages/UploadTest';
import Pending from './pages/Pendings/Pending/OngCard'
import Home from './pages/Home'
import OngShow from './pages/OngShow'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={List} />
        <Route path="/register" component={Register} />
        <Route path="/pendings" component={Pendings} />
        <Route path="/adminONG" component={Pending} />
        <Route path="/login/:senha" component={Login} />
        <Route path="/imgupload" component={UploadTest} />
        <Route path="/ongShow" component={OngShow} />
      </Switch>
    </BrowserRouter>
  );
}
