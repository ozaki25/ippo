import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DraftsRounded, EmailRounded } from '@material-ui/icons';
import propTypes from 'prop-types';
import ROUTES from 'src/constants/routes';

const Notification = ({ id, title, content, checked, onClick }) => (
  <ListItem onClick={onClick} button>
    <ListItemIcon>{checked ? <DraftsRounded /> : <EmailRounded />}</ListItemIcon>
    <ListItemText secondary={title} />
  </ListItem>
);

const NotificationList = ({ notifications, history }) => (
  <List>
    {notifications.map(n => (
      <div key={n.id}>
        <Notification
          {...n}
          onClick={() => history.push(ROUTES.Notification.replace(':id', n.id))}
        />
        <Divider />
      </div>
    ))}
  </List>
);

NotificationList.displayName = 'NotificationList';

NotificationList.propTypes = {
  notifications: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      checked: propTypes.bool,
      title: propTypes.string,
      content: propTypes.string,
      timestamp: propTypes.string,
    }),
  ),
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

NotificationList.defaultProps = {};

export default NotificationList;
