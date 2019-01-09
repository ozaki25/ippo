import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import RoundedButton from 'src/components/atoms/RoundedButton/index';
import ROUTES from 'src/constants/routes';

const NotificationList = ({ history }) => (
  <>
    <Typography paragraph>通知はありません</Typography>
    <RoundedButton
      color="primary"
      onClick={() => history.push(ROUTES.SettingsNotification)}
      fullWidth
    >
      プッシュ通知の設定
    </RoundedButton>
  </>
);

NotificationList.displayName = 'NotificationList';

NotificationList.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  }).isRequired,
};

NotificationList.defaultProps = {};

export default NotificationList;
