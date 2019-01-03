import React from 'react';
import { IconButton } from '@material-ui/core';
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

const TweetFooter = withStyles(styles)(({ classes, onClickReply, onClickRetweet, onClickLike }) => (
  <>
    <TweetFooterAction>
      <IconButton onClick={onClickReply} className={classes.smallIcon}>
        <ModeCommentOutlined fontSize="inherit" color="action" />
      </IconButton>
    </TweetFooterAction>
    <TweetFooterAction>
      <IconButton onClick={onClickRetweet} className={classes.smallIcon}>
        <RepeatRounded fontSize="inherit" color="action" />
      </IconButton>
    </TweetFooterAction>
    <TweetFooterAction>
      <IconButton onClick={onClickLike} className={classes.smallIcon}>
        <FavoriteBorder fontSize="inherit" color="action" />
      </IconButton>
    </TweetFooterAction>
  </>
));

TweetFooter.displayName = 'TweetFooter';

TweetFooter.propTypes = {
  onClickReply: propTypes.func.isRequired,
  onClickRetweet: propTypes.func.isRequired,
  onClickLike: propTypes.func.isRequired,
};

TweetFooter.defaultProps = {};

export default TweetFooter;
