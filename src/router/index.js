import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'src/router/ScrollToTop';
import Menu from 'src/containers/Menu';
import Signin from 'src/containers/Signin';
import Admin from 'src/containers/Admin';
import JoinedEvents from 'src/containers/JoinedEvents';
import OrganizedEvents from 'src/containers/OrganizedEvents';
import RecommendedEvents from 'src/containers/RecommendedEvents';
import InternalEvents from 'src/containers/InternalEvents';
import ExternalEvents from 'src/containers/ExternalEvents';
import NewEvent from 'src/containers/NewEvent';
import Tweet from 'src/containers/Tweet';
import Tweets from 'src/containers/Tweets';
import NewTweet from 'src/containers/NewTweet';
import Notification from 'src/containers/Notification';
import SettingsNotification from 'src/containers/SettingsNotification';
import SettingsAccount from 'src/containers/SettingsAccount';
import ROUTES from 'src/constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <>
        <ScrollToTop />
        <Route path={ROUTES.Signin} exact>
          <Signin />
        </Route>
        <Route path={ROUTES.Menu} exact>
          <Menu />
        </Route>
        <Route path={ROUTES.JoinedEvents} exact>
          <JoinedEvents />
        </Route>
        <Route path={ROUTES.RecommendedEvents} exact>
          <RecommendedEvents />
        </Route>
        <Route path={ROUTES.InternalEvents} exact>
          <InternalEvents />
        </Route>
        <Route path={ROUTES.ExternalEvents} exact>
          <ExternalEvents />
        </Route>
        <Route path={ROUTES.OrganizedEvents} exact>
          <OrganizedEvents />
        </Route>
        <Route path={ROUTES.NewEvent} exact>
          <NewEvent />
        </Route>
        <Route path={ROUTES.Tweet} exact>
          <Tweet />
        </Route>
        <Route path={ROUTES.Tweets} exact>
          <Tweets />
        </Route>
        <Route path={ROUTES.NewTweet} exact>
          <NewTweet />
        </Route>
        <Route path={ROUTES.Notification} exact>
          <Notification />
        </Route>
        <Route path={ROUTES.SettingsNotification} exact>
          <SettingsNotification />
        </Route>
        <Route path={ROUTES.SettingsAccount} exact>
          <SettingsAccount />
        </Route>
        <Route path={ROUTES.Admin} exact>
          <Admin />
        </Route>
      </>
    </Switch>
  </BrowserRouter>
);

export default Router;
