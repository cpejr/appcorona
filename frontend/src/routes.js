import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Pendings from './pages/Pendings';
import AllPendings from './pages/Pendings/AllPendings';
import List from './pages/List';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/register" component={Register} />
        <Route path="/pendings" component={Pendings} />
        <Route path="/login/:senha" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
