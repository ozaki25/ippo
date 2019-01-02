import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'src/router/ScrollToTop';
import Menu from 'src/hoc/WithMenu';
import Signin from 'src/hoc/WithSignin';
import Signup from 'src/hoc/WithSignup';
import Admin from 'src/hoc/WithAdmin';
import InternalEvents from 'src/hoc/WithInternalEvents';
import ExternalEvents from 'src/hoc/WithExternalEvents';
import NewEvent from 'src/hoc/WithNewEvent';
import Tweets from 'src/hoc/WithTweets';
import NewTweet from 'src/hoc/WithNewTweet';
import ROUTES from 'src/constants/routes';

const EnteredEvents = () => <p>tmp...</p>;
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
        <Route path={ROUTES.EnteredEvents} exact component={EnteredEvents} />
        <Route path={ROUTES.RecommendedEvents} exact component={RecommendedEvents} />
        <Route path={ROUTES.InternalEvents} exact component={InternalEvents} />
        <Route path={ROUTES.ExternalEvents} exact component={ExternalEvents} />
        <Route path={ROUTES.OrganizedEvents} exact component={OrganizedEvents} />
        <Route path={ROUTES.NewEvent} exact component={NewEvent} />
        <Route path={ROUTES.Tweets} exact component={Tweets} />
        <Route path={ROUTES.NewTweet} exact component={NewTweet} />
        <Route path={ROUTES.Admin} exact component={Admin} />
      </>
    </Switch>
  </BrowserRouter>
);

export default Router;
