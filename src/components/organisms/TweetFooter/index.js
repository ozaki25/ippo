import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { FavoriteBorder, ModeCommentOutlined, RepeatRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TweetFooterAction = styled.div`
  display: inline-block;
  margin: 4px 0;
  min-width: 78px;
`;

const styles = {
  smallIcon: {
    fontSize: '15px',
    padding: '8px',
  },
};

const TweetFooter = withStyles(styles)(
  ({
    replyCount,
    retweetCount,
    likeCount,
    liked,
    classes,
    onClickReply,
    onClickRetweet,
    onClickLike,
  }) => (
    <>
      <TweetFooterAction>
        <IconButton onClick={onClickReply} className={classes.smallIcon}>
          <ModeCommentOutlined fontSize="inherit" color="action" />
        </IconButton>
        <Typography color="textSecondary" inline>
          {replyCount}
        </Typography>
      </TweetFooterAction>
      <TweetFooterAction>
        <IconButton onClick={onClickRetweet} className={classes.smallIcon}>
          <RepeatRounded fontSize="inherit" color="action" />
        </IconButton>
        <Typography color="textSecondary" inline>
          {retweetCount}
        </Typography>
      </TweetFooterAction>
      <TweetFooterAction>
        <IconButton onClick={onClickLike} className={classes.smallIcon}>
          <FavoriteBorder fontSize="inherit" color={liked ? 'secondary' : 'action'} />
        </IconButton>
        <Typography color="textSecondary" inline>
          {likeCount}
        </Typography>
      </TweetFooterAction>
    </>
  ),
);

TweetFooter.displayName = 'TweetFooter';

TweetFooter.propTypes = {
  replyCount: propTypes.number,
  retweetCount: propTypes.number,
  likeCount: propTypes.number,
  liked: propTypes.bool,
  onClickReply: propTypes.func,
  onClickRetweet: propTypes.func.isRequired,
  onClickLike: propTypes.func.isRequired,
};

TweetFooter.defaultProps = {
  replyCount: 0,
  retweetCount: 0,
  likeCount: 0,
  liked: false,
  onClickReply: null,
};

export default TweetFooter;
