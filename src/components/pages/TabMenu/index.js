import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs } from '@material-ui/core';
import {
  AddBoxRounded,
  HomeRounded,
  NotificationsRounded,
  SettingsRounded,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import EventsOverview from 'src/components/organisms/EventsOverview';
import EventCreateForm from 'src/components/organisms/EventCreateForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';

const styles = theme => ({
  bottomBar: {
    backgroundColor: theme.palette.primary[50],
    bottom: 0,
    marginLeft: '-10px',
    position: 'fixed',
    width: '100%',
    zIndex: 1300,
  },
});

const titleMap = {
  0: 'ホーム',
  1: 'イベント作成',
  2: '通知',
  3: '設定',
};

class TabMenu extends React.Component {
  state = { value: 0 };

  handleChange = (event, value) => this.setState({ value });

  handleChangeIndex = index => this.setState({ value: index });

  onSubmitCreateEvent = async event => {
    const {
      createEvent,
      authUser: { uid, displayName },
      history,
    } = this.props;
    const result = await createEvent({
      variables: { event: { ...event, uid, name: displayName } },
    });
    history.push(`${ROUTES.Tweets}?hashtag=${event.hashtag}`);
    return result;
  };

  render() {
    const { internal, external, classes, authUser, history, firebase } = this.props;
    const { value } = this.state;
    return (
      <Container title={titleMap[value]} authUser={authUser} history={history} firebase={firebase}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.bottomBar}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<HomeRounded />} />
          <Tab icon={<AddBoxRounded />} />
          <Tab icon={<NotificationsRounded />} />
          <Tab icon={<SettingsRounded />} />
        </Tabs>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
          <EventsOverview internal={internal} external={external} history={history} />
          <EventCreateForm onSubmit={this.onSubmitCreateEvent} />
          <EventsOverview internal={internal} external={external} history={history} />
          <EventsOverview internal={internal} external={external} history={history} />
        </SwipeableViews>
      </Container>
    );
  }
}

TabMenu.displayName = 'TabMenu';

TabMenu.propTypes = {
  internal: propTypes.shape({
    loading: propTypes.bool.isRequired,
    internalEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
  }).isRequired,
  external: propTypes.shape({
    loading: propTypes.bool.isRequired,
    connpass: propTypes.shape({
      events: propTypes.arrayOf(
        propTypes.shape({
          event_id: propTypes.number,
          title: propTypes.string,
          event_url: propTypes.string,
          catch: propTypes.string,
          place: propTypes.string,
          started_at: propTypes.string,
        }),
      ),
    }),
  }).isRequired,
  createEvent: propTypes.func.isRequired,
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.object.isRequired,
};

TabMenu.defaultProps = {};

export default withStyles(styles)(TabMenu);
