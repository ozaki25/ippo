import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from 'src/hoc/WithMenu';
import Publish from 'src/hoc/WithPublish';
import Events from 'src/hoc/WithEvents';
import NewEvent from 'src/hoc/WithNewEvent';
import ROUTES from 'src/constants/routes';

const Router = () => (
  <HashRouter>
    <Switch>
      {/* <Route path={ROUTES.SignIn} exact component={SignIn} />
      <Route path={ROUTES.SignUp} exact component={SignUp} /> */}
      <Route path={ROUTES.Menu} exact component={Menu} />
      <Route path={ROUTES.Events} exact component={Events} />
      <Route path={ROUTES.NewEvent} component={NewEvent} />
      <Route path={ROUTES.Publish} exact component={Publish} />
    </Switch>
  </HashRouter>
);

export default Router;
