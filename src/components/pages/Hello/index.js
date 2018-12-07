import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import notifications from 'src/utils/notifications';

const Hello = ({ data: { hello, count } }) => (
  <>
    <div>
      <h1 className="bp3-heading">Hello Ippo</h1>
      <h3 className="bp3-heading">{[...Array(count)].map(() => `${hello} `)}</h3>
      <Button onClick={notifications.askForPermission} text="プッシュ通知を購読する" />
    </div>
    <Link to="/events">イベント一覧</Link>
  </>
);

export default Hello;
