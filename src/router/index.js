import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Hello from 'src/hoc/WithHello';
import Events from 'src/hoc/WithConnpassEvents';
import InternalEvents from 'src/hoc/WithInternalEvents';
import NewEvent from 'src/hoc/WithCreateEvent';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Hello} />
      <Route path="/hello" exact component={Hello} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/internal" component={InternalEvents} />
      <Route exact path="/events/new" component={NewEvent} />
    </Switch>
  </HashRouter>
);

export default Router;
