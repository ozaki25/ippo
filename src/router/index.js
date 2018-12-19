import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from 'src/hoc/WithMenu';
import Signup from 'src/hoc/WithSignup';
import Publish from 'src/hoc/WithPublish';
import Events from 'src/hoc/WithEvents';
import NewEvent from 'src/hoc/WithNewEvent';
import ROUTES from 'src/constants/routes';

const Router = () => (
  <HashRouter>
    <Switch>
      {/* <Route path={ROUTES.Signin} exact component={Signin} /> */}
      <Route path={ROUTES.Signup} exact component={Signup} />
      <Route path={ROUTES.Menu} exact component={Menu} />
      <Route path={ROUTES.Events} exact component={Events} />
      <Route path={ROUTES.NewEvent} component={NewEvent} />
      <Route path={ROUTES.Publish} exact component={Publish} />
    </Switch>
  </HashRouter>
);

export default Router;
