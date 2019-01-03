import React from 'react';
import propTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { AddRounded, Edit, Notifications } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const icons = {
  add: <AddRounded />,
  edit: <Edit />,
  notifications: <Notifications />,
};

const FloatingButton = ({ icon, onClick, classes }) => (
  <Fab color="primary" onClick={onClick} className={classes.fab}>
    {icons[icon]}
  </Fab>
);

FloatingButton.displayName = 'FloatingButton';

FloatingButton.propTypes = {
  icon: propTypes.oneOf(['add', 'edit', 'notifications']).isRequired,
  onClick: propTypes.func.isRequired,
};

FloatingButton.defaultProps = {};

export default withStyles(styles, { withTheme: true })(FloatingButton);
