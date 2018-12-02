import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from 'src/hoc/WithHello';
import Events from 'src/hoc/WithConnpassEvents';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Hello} />
      <Route path="/hello" exact component={Hello} />
      <Route exact path="/events" component={Events} />
    </Switch>
  </BrowserRouter>
);

export default Router;
