import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  FirstPageRounded,
  LastPageRounded,
} from '@material-ui/icons';
import classnames from 'classnames';
import propTypes from 'prop-types';

const styles = {
  nonCaps: {
    textTransform: 'none',
  },
  buttonGroup: {
    borderRadius: '0',
    marginRight: '-1px',
    minHeight: '40px',
    minWidth: '40px',
    padding: '5px',
  },
};

const Pagination = ({ current, total, onClick, classes }) => (
  <>
    {current > 1 && (
      <>
        <Button color="primary" className={classes.buttonGroup} onClick={() => onClick(1)}>
          <FirstPageRounded />
        </Button>
        <Button
          color="primary"
          className={classes.buttonGroup}
          onClick={() => onClick(current - 1)}
        >
          <ChevronLeftRounded />
        </Button>
      </>
    )}
    <Button
      color="primary"
      className={classnames(classes.nonCaps, classes.buttonGroup)}
      disableRipple
    >{`${current} of ${total}`}</Button>
    {current < total && (
      <>
        <Button
          color="primary"
          className={classes.buttonGroup}
          onClick={() => onClick(current + 1)}
        >
          <ChevronRightRounded />
        </Button>
        <Button color="primary" className={classes.buttonGroup} onClick={() => onClick(total)}>
          <LastPageRounded />
        </Button>
      </>
    )}
  </>
);

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  current: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

Pagination.defaultProps = {};

export default withStyles(styles)(Pagination);
