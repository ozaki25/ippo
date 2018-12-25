import React from 'react';
import { Link } from 'react-router-dom';
import { Button, H3, Text } from '@blueprintjs/core';
import styled from 'styled-components';
import Container from 'src/components/templates/Container';
import notifications from 'src/utils/notifications';
import alertMessage from 'src/constants/alertMessage';

const LinkContainer = styled.div`
  margin: 15px 0;
`;

const Notification = ({ firebase, publishNotification, registerNotification }) => {
  const onClickPublish = async () => {
    const { data } = await publishNotification({ variables: { target: 'all' } });
    alert(data.publishNotification.result);
  };

  const onClickSubscribe = async () => {
    if (notifications.isSupported() && notifications.isUndecided()) {
      const token = await firebase.askForPermissionToReceiveNotifications();
      await registerNotification({ variables: { token } });
    } else {
      const type = notifications.isSupported() ? notifications.permission() : 'unsupported';
      alert(alertMessage.subscribeNotification[type]);
    }
  };

  return (
    <Container>
      <H3>プッシュ通知の管理</H3>
      <Text>※ボタンを押すと購読者全員に通知が送信されます。</Text>
      <Button onClick={onClickPublish} text="プッシュ通知を送信する" />
      <Button onClick={onClickSubscribe} text="プッシュ通知を購読する" />
      <LinkContainer>
        <Link to="/">イベント一覧へ</Link>
      </LinkContainer>
    </Container>
  );
};

Notification.displayName = 'Notification';

export default Notification;
