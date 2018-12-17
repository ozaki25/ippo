import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Publish from 'src/hoc/WithPublish';
import Events from 'src/hoc/WithEvents';
import NewEvent from 'src/hoc/WithNewEvent';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Events} />
      <Route path="/events" exact component={Events} />
      <Route exact path="/events/new" component={NewEvent} />
      <Route path="/notifications/publish" exact component={Publish} />
    </Switch>
  </HashRouter>
);

export default Router;
