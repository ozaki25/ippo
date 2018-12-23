import React from 'react';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Container = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 9px 12px;
`;

const Wrapper = styled.div`
  margin-left: 58px;
`;

const IconImage = styled.img`
  border-radius: 50%;
  float: left;
  height: 48px;
  margin-top: 3px;
  margin-left: -58px;
  position: absolute;
  width: 48px;
`;

const TweetHeader = styled.div``;

const TweetTime = styled.small`
  &:before {
    content: '\00b7';
  }
`;

const TweetBody = styled.p`
  white-space: pre-wrap;
`;

const TweetFooter = styled.div`
  margin-top: 10px;
`;

const TweetAction = styled.div`
  display: inline-block;
  min-width: 80px;
`;

const Tweet = ({ name, text, time }) => (
  <Container>
    <Wrapper>
      <IconImage src="/icon.png" />
      <TweetHeader>
        <strong>{name}</strong>
        <TweetTime>{time}</TweetTime>
      </TweetHeader>
      <TweetBody>{text}</TweetBody>
      <TweetFooter>
        <TweetAction>
          <Icon icon="comment" />
        </TweetAction>
        <TweetAction>
          <Icon icon="refresh" />
        </TweetAction>
        <TweetAction>
          <Icon icon="heart" />
        </TweetAction>
      </TweetFooter>
    </Wrapper>
  </Container>
);

Tweet.displayName = 'Tweet';

Tweet.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};

Tweet.defaultProps = {};

export default Tweet;
