import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DraftsRounded, EmailRounded } from '@material-ui/icons';

import propTypes from 'prop-types';
// import RoundedButton from 'src/components/atoms/RoundedButton/index';
// import ROUTES from 'src/constants/routes';

const Notification = ({ id, title, content, checked }) => (
  <ListItem>
    <ListItemIcon>{checked ? <DraftsRounded /> : <EmailRounded />}</ListItemIcon>
    <ListItemText secondary={title} />
  </ListItem>
);

const NotificationList = ({ notifications, history }) => (
  // <>
  <List>
    {notifications.map(n => (
      <>
        <Notification key={n.id} {...n} />
        <Divider />
      </>
    ))}
  </List>
  // <RoundedButton
  //   color="primary"
  //   onClick={() => history.push(ROUTES.SettingsNotification)}
  //   fullWidth
  // >
  //   プッシュ通知の設定
  // </RoundedButton>
  // </>
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
