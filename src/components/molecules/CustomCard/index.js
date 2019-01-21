import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Contents = styled.div`
  width: 100%;
`;

const styles = theme => ({
  card: {
    // backgroundColor: theme.palette.primary[50],
    borderRadius: 2,
    justifyContent: 'normal',
    padding: '12px',
    textAlign: 'left',
    textTransform: 'none',
    '&:focus': {
      // backgroundColor: theme.palette.primary[100],
      opacity: 0.8,
    },
    '&:hover': {
      // backgroundColor: theme.palette.primary[100],
      opacity: 0.8,
    },
  },
  expand: {
    minHeight: '130px',
  },
});

const onClick = (url, history) => (history ? history.push(url) : window.open(url, '_blank'));

const CustomCard = ({ classes, expand, url, history, children }) => (
  <Button
    onClick={() => onClick(url, history)}
    className={classnames(classes.card, expand && classes.expand)}
    variant="outlined"
    color="primary"
    disableRipple
    fullWidth
  >
    <Contents>{children}</Contents>
  </Button>
);

CustomCard.displayName = 'CustomCard';

CustomCard.propTypes = {
  expand: propTypes.bool,
  url: propTypes.string.isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }),
  children: propTypes.node.isRequired,
};

CustomCard.defaultProps = {
  expand: false,
  history: null,
};

export default withStyles(styles)(CustomCard);
