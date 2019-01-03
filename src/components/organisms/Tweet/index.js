import React from 'react';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, ModeCommentOutlined, RepeatRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
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

const styles = {
  smallIcon: {
    fontSize: '15px',
  },
};

const TweetFooter = withStyles(styles)(({ classes, onClickReply, onClickRetweet, onClickLike }) => (
  <>
    <TweetAction>
      <IconButton onClick={onClickReply} className={classes.smallIcon}>
        <ModeCommentOutlined fontSize="inherit" color="action" />
      </IconButton>
    </TweetAction>
    <TweetAction>
      <IconButton onClick={onClickRetweet} className={classes.smallIcon}>
        <RepeatRounded fontSize="inherit" color="action" />
      </IconButton>
    </TweetAction>
    <TweetAction>
      <IconButton onClick={onClickLike} className={classes.smallIcon}>
        <FavoriteBorder fontSize="inherit" color="action" />
      </IconButton>
    </TweetAction>
  </>
));

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
