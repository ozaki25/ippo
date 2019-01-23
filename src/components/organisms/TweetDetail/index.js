import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';
import Tweet from 'src/components/organisms/Tweet';
import TweetBody from 'src/components/organisms/TweetBody';
import TweetFooter from 'src/components/organisms/TweetFooter';
import dateFormat from 'src/utils/dateFormat';

const Container = styled.div`
  padding-bottom: 300px;
`;

const TweetContainer = styled.div`
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

const TweetDetail = ({ name, text, time, comments, onClickReply }) => (
  <Container>
    <TweetContainer>
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
      <TweetFooter
        replyCount={comments ? comments.length : 0}
        onClickReply={onClickReply}
        onClickRetweet={todo}
        onClickLike={todo}
      />
    </TweetContainer>
    <Divider light />
    {comments &&
      comments.map(comment => (
        <Tweet
          key={comment.id}
          name={comment.name}
          text={comment.text}
          time={dateFormat.datetimeJa(comment.time)}
          noFooter
        />
      ))}
  </Container>
);

TweetDetail.displayName = 'TweetDetail';

TweetDetail.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.node.isRequired,
  time: propTypes.string.isRequired,
  comments: propTypes.array,
  onClickReply: propTypes.func,
};

TweetDetail.defaultProps = {
  comments: [],
  onClickReply: null,
};

export default TweetDetail;
