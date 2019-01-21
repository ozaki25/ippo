import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';
import dateFormat from 'src/utils/dateFormat';

class Notification extends React.Component {
  async componentDidMount() {
    const {
      user: {
        refetch,
        variables: { uid },
      },
      match: {
        params: { id },
      },
      readNotification,
    } = this.props;
    const {
      data: {
        fetchUser: { notifications },
      },
    } = await refetch({ uid });
    const notification = notifications.find(n => n.id === id);
    if (notification.checked) return;
    readNotification({ variables: { uid, notificationId: id } });
  }

  render() {
    const {
      user: { fetchUser },
      authUser,
      history,
      match: {
        params: { id },
      },
      firebase,
    } = this.props;
    const notification = fetchUser ? fetchUser.notifications.find(n => n.id === id) : null;
    return (
      <Container title="通知" back authUser={authUser} history={history} firebase={firebase}>
        {notification && (
          <>
            <Typography variant="h6">{notification.title}</Typography>
            <Typography color="textSecondary">
              {dateFormat.datetimeJa(notification.timestamp)}
            </Typography>
            <Typography paragraph>{notification.content}</Typography>
            <Divider />
          </>
        )}
      </Container>
    );
  }
}

Notification.displayName = 'Notification';

Notification.propTypes = {
  user: propTypes.shape({
    fetchUser: propTypes.shape({
      notifications: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          checked: propTypes.bool,
          title: propTypes.string,
          content: propTypes.string,
          timestamp: propTypes.string,
        }),
      ),
    }),
    refetch: propTypes.func.isRequired,
    variables: propTypes.shape({
      uid: propTypes.string.isRequired,
    }).isRequired,
  }),
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  readNotification: propTypes.func.isRequired,
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
};

Notification.defaultProps = {};

export default Notification;
