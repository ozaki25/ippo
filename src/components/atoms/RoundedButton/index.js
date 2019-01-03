import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  rounded: {
    borderRadius: '25px',
  },
};

const RoundedButton = ({ classes, ...props }) => (
  <Button className={classes.rounded} color="inherit" variant="contained" {...props} />
);

RoundedButton.displayName = 'RoundedButton';

export default withStyles(styles)(RoundedButton);
