import React from 'react';
import { Badge, Tab, Tabs } from '@material-ui/core';
import { AddBoxRounded, HomeRounded, NotificationsRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import propTypes from 'prop-types';
import OverlaySpinner from 'src/components/molecules/OverlaySpinner';
import EventsOverview from 'src/components/organisms/EventsOverview';
import EventCreateForm from 'src/components/organisms/EventCreateForm';
import NotificationList from 'src/components/organisms/NotificationList';
import Container from 'src/components/templates/Container';
import ROUTES from 'src/constants/routes';
import MENU_ITEMS from 'src/constants/menuItems';

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
  componentDidMount() {
    this.props.data.refetch();
  }

  handleChange = (event, value) =>
    this.props.history.replace(`${ROUTES.Menu}?tab=${MENU_ITEMS.findItemByValue(value).title}`);

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
      data: { allEvents, loading },
      user: { fetchUser },
      tab,
      classes,
      authUser,
      history,
      firebase,
    } = this.props;
    const item = MENU_ITEMS.findItemByTitle(tab);
    const value = item ? item.value : MENU_ITEMS.HOME.value;
    const uncheckedNotificationCount = fetchUser
      ? fetchUser.notifications.filter(n => !n.checked).length
      : 0;
    return (
      <>
        <ContainerWithTabs>
          <Container
            title={MENU_ITEMS.findItemByValue(value).title}
            authUser={authUser}
            history={history}
            firebase={firebase}
            noPadding={[MENU_ITEMS.HOME.value, MENU_ITEMS.NOTIFICATION.value].includes(value)}
          >
            {value === MENU_ITEMS.HOME.value &&
              (loading ? (
                <OverlaySpinner visible={loading} />
              ) : (
                <EventsOverview
                  joined={allEvents.joined}
                  organized={allEvents.organized}
                  recommended={allEvents.recommended}
                  internal={allEvents.internal}
                  external={allEvents.external}
                  history={history}
                />
              ))}
            {value === MENU_ITEMS.NEW_EVENT.value && (
              <EventCreateForm onSubmit={this.onSubmitCreateEvent} />
            )}
            {value === MENU_ITEMS.NOTIFICATION.value && (
              <NotificationList
                history={history}
                notifications={fetchUser ? fetchUser.notifications : []}
              />
            )}
          </Container>
        </ContainerWithTabs>
        <Tabs
          value={value}
          onChange={this.handleChange}
          className={classes.bottomBar}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<HomeRounded />} />
          <Tab icon={<AddBoxRounded />} />
          <Tab
            icon={
              <Badge
                className={classes.badge}
                badgeContent={uncheckedNotificationCount}
                color="primary"
              >
                <NotificationsRounded />
              </Badge>
            }
          />
        </Tabs>
      </>
    );
  }
}

Menu.displayName = 'Menu';

Menu.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    allEvents: propTypes.shape({
      joined: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
      recommended: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
      internal: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
      external: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          eventUrl: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
      organized: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          catchMessage: propTypes.string,
          place: propTypes.string,
          startedAt: propTypes.string,
        }),
      ),
    }),
    refetch: propTypes.func.isRequired,
  }).isRequired,
  tab: propTypes.string,
  user: propTypes.shape({
    fetchUser: propTypes.shape({
      uid: propTypes.string,
      displayName: propTypes.string,
      categories: propTypes.string,
      notifications: propTypes.arrayOf(propTypes.object),
    }),
  }),
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

Menu.defaultProps = {
  tab: null,
};

export default withStyles(styles)(Menu);
