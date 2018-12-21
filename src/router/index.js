import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from 'src/hoc/WithMenu';
import Signin from 'src/hoc/WithSignin';
import Publish from 'src/hoc/WithPublish';
import InternalEvents from 'src/hoc/WithInternalEvents';
import ExternalEvents from 'src/hoc/WithExternalEvents';
import NewEvent from 'src/hoc/WithNewEvent';
import ROUTES from 'src/constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTES.Signin} exact component={Signin} />
      <Route path={ROUTES.Menu} exact component={Menu} />
      <Route path={ROUTES.InternalEvents} exact component={InternalEvents} />
      <Route path={ROUTES.ExternalEvents} exact component={ExternalEvents} />
      <Route path={ROUTES.NewEvent} exact component={NewEvent} />
      <Route path={ROUTES.Publish} exact component={Publish} />
      <Route path="/" component={() => <p>Not Found</p>} />
    </Switch>
  </BrowserRouter>
);

export default Router;
