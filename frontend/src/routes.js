import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Pendings from './pages/Pendings';
import List from './pages/List';
import UploadTest from './pages/UploadTest';
import ONG from './pages/ONG'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={List} />
        <Route path="/register" component={Register} />
        <Route path="/pendings" component={Pendings} />
        <Route path="/login/:senha" component={Login} />
        <Route path="/imgupload" component={UploadTest} />
        <Route path="/ONG" component={ONG} />
      </Switch>
    </BrowserRouter>
  );
}
