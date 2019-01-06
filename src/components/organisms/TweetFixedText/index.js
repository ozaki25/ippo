import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import PinIcon from 'src/components/atoms/PinIcon';

const styles = theme => ({
  icon: {
    fontSize: '15px',
    margin: '3px',
  },
  text: {
    color: theme.palette.text.secondary,
  },
});

const Container = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: row;
  width: 100%;
`;

const IconContainer = styled.div`
  flex-grow: 1;
  max-width: 48px;
  margin: 0 5px;
  text-align: right;
`;

const TweetFixedText = ({ classes }) => (
  <Container>
    <IconContainer>
      <PinIcon color="primary" fontSize="small" className={classes.icon} />
    </IconContainer>
    <Typography className={classes.text}>固定されたツイート</Typography>
  </Container>
);

TweetFixedText.displayName = 'TweetFixedText';

TweetFixedText.propTypes = {};

TweetFixedText.defaultProps = {};

export default withStyles(styles)(TweetFixedText);
