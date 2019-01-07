import React from 'react';
import { Popover, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

const PopMessage = ({ anchorEl, handleClose, classes, children }) => (
  <Popover
    open={!!anchorEl}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >
    <Typography className={classes.typography}>{children}</Typography>
  </Popover>
);

PopMessage.displayName = 'PopMessage';

PopMessage.propTypes = {
  anchorEl: propTypes.object,
  handleClose: propTypes.func.isRequired,
  children: propTypes.string.isRequired,
};

PopMessage.defaultProps = {
  anchorEl: null,
};

export default withStyles(styles)(PopMessage);
