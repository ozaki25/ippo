import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';
import TweetBody from 'src/components/organisms/TweetBody';
import TweetFooter from 'src/components/organisms/TweetFooter';

const Container = styled.div`
  padding: 9px 12px 0;
`;

const TweetHeader = styled.div`
  font-size: 18px;
  height: 48px;
  margin-bottom: 15px;
  margin-left: 58px;
`;

const IconContainer = styled.div`
  float: left;
  margin-left: -58px;
  position: absolute;
`;

const NameContainer = styled.div`
  padding-top: 12px;
`;

const Item = styled.div`
  padding-bottom: 14px;
`;

const todo = () => console.log('TODO');

const TweetDetail = ({ name, text, time }) => (
  <>
    <Container>
      <TweetHeader>
        <IconContainer>
          <CharIcon name={name} />
        </IconContainer>
        <NameContainer>
          <strong>{name}</strong>
        </NameContainer>
      </TweetHeader>
      <Item>
        <TweetBody text={text} bigText />
      </Item>
      <Item>
        <Typography color="textSecondary">{time}</Typography>
      </Item>
      <Divider light />
      <TweetFooter onClickReply={todo} onClickRetweet={todo} onClickLike={todo} />
    </Container>
    <Divider light />
  </>
);

TweetDetail.displayName = 'TweetDetail';

TweetDetail.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.node.isRequired,
  time: propTypes.string.isRequired,
};

TweetDetail.defaultProps = {};

export default TweetDetail;
