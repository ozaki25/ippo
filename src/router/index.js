import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Hello from 'src/hoc/WithHello';
import Events from 'src/hoc/WithEvents';
import NewEvent from 'src/hoc/WithNewEvent';
import ConnpassEvents from 'src/hoc/WithConnpassEvents';
import InternalEvents from 'src/hoc/WithInternalEvents';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Events} />
      <Route path="/events" exact component={Events} />
      <Route path="/hello" exact component={Hello} />
      <Route exact path="/events/external" component={ConnpassEvents} />
      <Route exact path="/events/internal" component={InternalEvents} />
      <Route exact path="/events/new" component={NewEvent} />
    </Switch>
  </HashRouter>
);

export default Router;
