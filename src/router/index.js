import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'router/ScrollToTop';
import Menu from 'containers/Menu';
import Signin from 'containers/Signin';
import Signup from 'containers/Signup';
import Admin from 'containers/Admin';
import JoinedEvents from 'containers/JoinedEvents';
import OrganizedEvents from 'containers/OrganizedEvents';
import RecommendedEvents from 'containers/RecommendedEvents';
import InternalEvents from 'containers/InternalEvents';
import ExternalEvents from 'containers/ExternalEvents';
import NewEvent from 'containers/NewEvent';
import Tweet from 'containers/Tweet';
import Tweets from 'containers/Tweets';
import NewTweet from 'containers/NewTweet';
import Notification from 'containers/Notification';
import SettingsNotification from 'containers/SettingsNotification';
import SettingsAccount from 'containers/SettingsAccount';
import ROUTES from 'constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <>
        <ScrollToTop />
        <Route path={ROUTES.Signin} exact component={Signin} />
        <Route path={ROUTES.Signup} exact component={Signup} />
        <Route path={ROUTES.Menu} exact component={Menu} />
        <Route path={ROUTES.JoinedEvents} exact component={JoinedEvents} />
        <Route path={ROUTES.RecommendedEvents} exact component={RecommendedEvents} />
        <Route path={ROUTES.InternalEvents} exact component={InternalEvents} />
        <Route path={ROUTES.ExternalEvents} exact component={ExternalEvents} />
        <Route path={ROUTES.OrganizedEvents} exact component={OrganizedEvents} />
        <Route path={ROUTES.NewEvent} exact component={NewEvent} />
        <Route path={ROUTES.Tweet} exact component={Tweet} />
        <Route path={ROUTES.Tweets} exact component={Tweets} />
        <Route path={ROUTES.NewTweet} exact component={NewTweet} />
        <Route path={ROUTES.Notification} exact component={Notification} />
        <Route path={ROUTES.SettingsNotification} exact component={SettingsNotification} />
        <Route path={ROUTES.SettingsAccount} exact component={SettingsAccount} />
        <Route path={ROUTES.Admin} exact component={Admin} />
      </>
    </Switch>
  </BrowserRouter>
);

export default Router;
