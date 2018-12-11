import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import notifications from 'src/utils/notifications';

const Hello = ({ data: { hello, count }, registerNotification, publishNotification }) => {
  const onClickSubscribe = async () => {
    const token = await notifications.askForPermission();
    console.log(token);
    const { data } = await registerNotification({ variables: { token } });
    console.log(data);
    alert(data.registerNotification.result);
  };
  const onClickPublish = async () => {
    const { data } = await publishNotification({ variables: { target: 'all' } });
    console.log(data);
    alert(data.publishNotification.result);
  };
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
