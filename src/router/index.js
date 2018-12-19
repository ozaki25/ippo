import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from 'src/hoc/WithMenu';
import Signin from 'src/hoc/WithSignin';
import Signup from 'src/hoc/WithSignup';
import Publish from 'src/hoc/WithPublish';
import Events from 'src/hoc/WithEvents';
import InternalEvents from 'src/hoc/WithInternalEvents';
import ExternalEvents from 'src/hoc/WithExternalEvents';
import NewEvent from 'src/hoc/WithNewEvent';
import ROUTES from 'src/constants/routes';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path={ROUTES.Signin} exact component={Signin} />
      <Route path={ROUTES.Signup} exact component={Signup} />
      <Route path={ROUTES.Menu} exact component={Menu} />
      <Route path={ROUTES.Events} exact component={Events} />
      <Route path={ROUTES.InternalEvents} exact component={InternalEvents} />
      <Route path={ROUTES.ExternEvents} exact component={ExternalEvents} />
      <Route path={ROUTES.NewEvent} component={NewEvent} />
      <Route path={ROUTES.Publish} exact component={Publish} />
    </Switch>
  </HashRouter>
);

export default Router;
