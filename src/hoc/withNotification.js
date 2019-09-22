import React from 'react';
import notifications from 'utils/notifications';

const withNotification = Component => ({ ...props }) => (
  <Component {...props} notifications={notifications} />
);

export default withNotification;
