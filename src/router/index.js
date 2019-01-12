import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'src/router/ScrollToTop';
import Menu from 'src/containers/Menu';
import Signin from 'src/containers/Signin';
import Signup from 'src/containers/Signup';
import Admin from 'src/containers/Admin';
import JoinedEvents from 'src/containers/JoinedEvents';
import InternalEvents from 'src/containers/InternalEvents';
import ExternalEvents from 'src/containers/ExternalEvents';
import NewEvent from 'src/containers/NewEvent';
import Tweets from 'src/containers/Tweets';
import NewTweet from 'src/containers/NewTweet';
import SettingsNotification from 'src/containers/SettingsNotification';
import ROUTES from 'src/constants/routes';

const RecommendedEvents = () => <p>tmp...</p>;
const OrganizedEvents = () => <p>tmp...</p>;

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
        <Route path={ROUTES.Tweets} exact component={Tweets} />
        <Route path={ROUTES.NewTweet} exact component={NewTweet} />
        <Route path={ROUTES.SettingsNotification} exact component={SettingsNotification} />
        <Route path={ROUTES.Admin} exact component={Admin} />
      </>
    </Switch>
  </BrowserRouter>
);

export default Router;
