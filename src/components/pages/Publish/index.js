import React from 'react';
import { Link } from 'react-router-dom';
import { Button, H3, Text } from '@blueprintjs/core';
import styled from 'styled-components';
import Container from 'src/components/templates/Container';

const LinkContainer = styled.div`
  margin: 15px 0;
`;

const Publish = ({ publishNotification, history, firebase }) => {
  const onClickPublish = async () => {
    const { data } = await publishNotification({ variables: { target: 'all' } });
    alert(data.publishNotification.result);
  };

  return (
    <Container title="通知" back history={history} firebase={firebase}>
      <H3>プッシュ通知の管理</H3>
      <Text>※ボタンを押すと購読者全員に通知が送信されます。</Text>
      <Button onClick={onClickPublish} text="プッシュ通知を送信する" />
      <LinkContainer>
        <Link to="/events">イベント一覧へ</Link>
      </LinkContainer>
    </Container>
  );
};

Publish.displayName = 'Publish';

export default Publish;
