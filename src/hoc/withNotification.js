import React from 'react';
import notifications from 'src/utils/notifications';

const withNotification = Component => ({ ...props }) => (
  <Component {...props} notifications={notifications} />
);

export default withNotification;
