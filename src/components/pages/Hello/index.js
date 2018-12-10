import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import notifications from 'src/utils/notifications';

const Hello = ({ data: { hello, count }, registerSubscriber, publishNotification }) => {
  const onClickSubscribe = async () => {
    const token = await notifications.askForPermission();
    console.log(token);
    registerSubscriber({ variables: { token } });
  };
  const onClickPublish = () => publishNotification({ variables: { target: 'all' } });
  return (
    <>
      <div>
        <h1 className="bp3-heading">Hello Ippo</h1>
        <h3 className="bp3-heading">{[...Array(count)].map(() => `${hello} `)}</h3>
        <Button onClick={onClickSubscribe} text="プッシュ通知を購読する" />
        <Button onClick={onClickPublish} text="プッシュ通知を送信する" />
      </div>
      <Link to="/events">イベント一覧</Link>
    </>
  );
};

export default Hello;
