import React from 'react';
import { Button, Text } from '@blueprintjs/core';
import styled from 'styled-components';
import NavigationBar from 'src/components/molecules/NavigationBar';

const Container = styled.div`
  padding: 10px 15px;
`;

const Publish = ({ publishNotification }) => {
  const onClickPublish = async () => {
    const { data } = await publishNotification({ variables: { target: 'all' } });
    alert(data.publishNotification.result);
  };

  return (
    <>
      <NavigationBar appName="IPPO" />
      <Container>
        <Button onClick={onClickPublish} text="プッシュ通知を送信する" />
        <Text>※ボタンを押すと購読者全員に通知が送信されます。</Text>
      </Container>
    </>
  );
};

export default Publish;
