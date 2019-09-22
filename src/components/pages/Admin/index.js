import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Container from 'components/templates/Container';
import notifications from 'utils/notifications';
import alertMessage from 'constants/alertMessage';
import ROUTES from 'constants/routes';

const ItemContainer = styled.div`
  margin: 8px 0;
`;

const Admin = ({
  publishNotification,
  registerNotification,
  excuteUpdateExternalEvents,
  authUser,
  history,
  firebase,
}) => {
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

  const onClickUpdateConnpass = async () => {
    const { data } = await excuteUpdateExternalEvents();
    alert(JSON.stringify(data));
  };

  return (
    <Container title="Adminエリア" authUser={authUser} history={history} firebase={firebase}>
      <ItemContainer>
        <Typography variant="h6">プッシュ通知の管理</Typography>
        <Typography>※ボタンを押すと購読者全員に通知が送信されます</Typography>
        <Button onClick={onClickPublish} color="primary" variant="outlined">
          通知を配信する
        </Button>
        <Button onClick={onClickSubscribe} color="primary" variant="outlined">
          通知を購読する
        </Button>
      </ItemContainer>
      <Divider />
      <ItemContainer>
        <Typography variant="h6">connpassデータのアップデート</Typography>
        <Button id="execute" onClick={onClickUpdateConnpass} color="primary" variant="outlined">
          実行
        </Button>
      </ItemContainer>
      <Divider />
      <Button component={Link} to={ROUTES.Menu} color="primary" variant="contained" fullWidth>
        メニューへ
      </Button>
    </Container>
  );
};

Admin.displayName = 'Admin';

export default Admin;
