import React from 'react';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, ModeCommentOutlined, RepeatRounded } from '@material-ui/icons';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IconImage from 'src/components/atoms/IconImage';

const Container = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 9px 12px 0;
`;

const Wrapper = styled.div`
  margin-left: 58px;
`;

const StyledIconImage = styled(IconImage)`
  margin-left: -58px;
`;

const TweetTime = styled.small`
  &:before {
    content: '\00b7';
  }
`;

const TweetBody = styled.p`
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const TweetAction = styled.div`
  display: inline-block;
  min-width: 80px;
`;

const TweetHeader = ({ name, time }) => (
  <>
    <strong>{name}</strong>
    <TweetTime>{time}</TweetTime>
  </>
);

const TweetFooter = ({ onClickReply, onClickRetweet, onClickLike }) => (
  <>
    <TweetAction>
      <IconButton onClick={onClickReply}>
        <ModeCommentOutlined fontSize="small" color="action" />
      </IconButton>
    </TweetAction>
    <TweetAction>
      <IconButton onClick={onClickRetweet}>
        <RepeatRounded fontSize="small" color="action" />
      </IconButton>
    </TweetAction>
    <TweetAction>
      <IconButton onClick={onClickLike}>
        <FavoriteBorder fontSize="small" color="action" />
      </IconButton>
    </TweetAction>
  </>
);

const Tweet = ({ name, text, time }) => (
  <Container>
    <Wrapper>
      <StyledIconImage src="/icon.png" />
      <TweetHeader name={name} time={time} />
      <TweetBody>{text}</TweetBody>
      <TweetFooter />
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
