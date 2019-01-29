import React from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import TweetFixedText from 'src/components/organisms/TweetFixedText/index';
import CharIcon from 'src/components/atoms/CharIcon';
import TweetHeader from 'src/components/organisms/TweetHeader';
import TweetBody from 'src/components/organisms/TweetBody';
import TweetFooter from 'src/components/organisms/TweetFooter';

const Container = styled.div`
  padding: 9px 12px 0;
`;

const Wrapper = styled.div`
  font-size: 15px;
  margin-left: 58px;
`;

const IconContainer = styled.div`
  float: left;
  margin-left: -58px;
  position: absolute;
`;

const todo = () => console.log('TODO');

const Tweet = ({
  name,
  text,
  time,
  comments,
  likes,
  fixed,
  noFooter,
  onClick,
  onClickReply,
  onClickLike,
}) => (
  <>
    <Container onClick={onClick}>
      {fixed && <TweetFixedText />}
      <Wrapper>
        <IconContainer>
          <CharIcon name={name} />
        </IconContainer>
        <TweetHeader name={name} time={time} />
        <TweetBody text={text} />
        {noFooter || (
          <TweetFooter
            replyCount={comments ? comments.length : 0}
            likeCount={likes ? likes.length : 0}
            onClickReply={onClickReply}
            onClickRetweet={todo}
            onClickLike={onClickLike}
          />
        )}
      </Wrapper>
    </Container>
    <Divider light />
  </>
);

Tweet.displayName = 'Tweet';

Tweet.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.node.isRequired,
  time: propTypes.string.isRequired,
  comments: propTypes.array,
  likes: propTypes.array,
  fixed: propTypes.bool,
  noFooter: propTypes.bool,
  onClick: propTypes.func,
  onClickReply: propTypes.func,
  onClickLike: propTypes.func,
};

Tweet.defaultProps = {
  comments: [],
  likes: [],
  fixed: false,
  noFooter: false,
  onClick: null,
  onClickReply: null,
  onClickLike: null,
};

export default Tweet;
