import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Container from 'src/components/templates/Container';
import notifications from 'src/utils/notifications';
import alertMessage from 'src/constants/alertMessage';
import ROUTES from 'src/constants/routes';

const Admin = ({ publishNotification, registerNotification, authUser, history, firebase }) => {
  const onClickPublish = async () => {
    try {
      const { data } = await publishNotification({ variables: { target: 'all' } });
      alert(data.publishNotification.result);
    } catch (e) {
      console.log(e);
      alert(e.toString());
    }
  };

  const onClickSubscribe = async () => {
    if (notifications.isSupported() && notifications.isUndecided()) {
      try {
        const token = await firebase.askForPermissionToReceiveNotifications();
        await registerNotification({ variables: { token } });
      } catch (e) {
        console.log(e);
        alert(e.toString());
      }
    } else {
      const type = notifications.isSupported() ? notifications.permission() : 'unsupported';
      alert(alertMessage.subscribeNotification[type]);
    }
  };

  return (
    <Container title="Adminエリア" authUser={authUser} history={history} firebase={firebase}>
      <Typography variant="h5" paragraph>
        プッシュ通知の管理
      </Typography>
      <Typography>※ボタンを押すと購読者全員に通知が送信されます。</Typography>
      <Button onClick={onClickPublish} color="primary">
        プッシュ通知を配信する
      </Button>
      <Button onClick={onClickSubscribe} color="primary">
        プッシュ通知を購読する
      </Button>
      <Button component={Link} to={ROUTES.Menu} color="primary" variant="contained" fullWidth>
        メニューへ
      </Button>
    </Container>
  );
};

Admin.displayName = 'Admin';

export default Admin;
