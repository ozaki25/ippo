import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import {
  AddBoxRounded,
  HomeRounded,
  NotificationsRounded,
  SettingsRounded,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import propTypes from 'prop-types';
import EventsOverview from 'src/components/organisms/EventsOverview';
import EventCreateForm from 'src/components/organisms/EventCreateForm';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';

const titleMap = {
  0: 'ホーム',
  1: 'イベント作成',
  2: '通知',
  3: '設定',
};

const styles = theme => ({
  bottomBar: {
    backgroundColor: theme.palette.primary[50],
    bottom: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 1300,
  },
});

const ContainerWithTabs = styled.div`
  margin-bottom: 48px;
`;

class Menu extends React.Component {
  state = { value: 0 };

  handleChange = (event, value) => this.setState({ value });

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
    const {
      joined,
      organized,
      internal,
      external,
      classes,
      authUser,
      history,
      firebase,
    } = this.props;
    const { value } = this.state;
    return (
      <>
        <ContainerWithTabs>
          <Container
            title={titleMap[value]}
            authUser={authUser}
            history={history}
            firebase={firebase}
            noPadding={[0, 2, 3].includes(value)}
          >
            {value === 0 && (
              <EventsOverview
                joined={joined}
                organized={organized}
                internal={internal}
                external={external}
                history={history}
              />
            )}
            {value === 1 && <EventCreateForm onSubmit={this.onSubmitCreateEvent} />}
            {value === 2 && (
              <EventsOverview
                joined={joined}
                organized={organized}
                internal={internal}
                external={external}
                history={history}
              />
            )}
            {value === 3 && (
              <EventsOverview
                joined={joined}
                organized={organized}
                internal={internal}
                external={external}
                history={history}
              />
            )}
          </Container>
        </ContainerWithTabs>
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
      </>
    );
  }
}

Menu.displayName = 'Menu';

Menu.propTypes = {
  joined: propTypes.shape({
    loading: propTypes.bool.isRequired,
    joinedEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
  }).isRequired,
  organized: propTypes.shape({
    loading: propTypes.bool.isRequired,
    organizedEvents: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
  }).isRequired,
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

Menu.defaultProps = {};

export default withStyles(styles)(Menu);
