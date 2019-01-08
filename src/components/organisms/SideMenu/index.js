import React from 'react';
import { Divider, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = {
  list: {
    width: 250,
  },
};

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { open: props.open };
  }

  toggleDrawer = open => () => {
    this.setState({ open });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={this.toggleDrawer(false)}
        onOpen={this.toggleDrawer(true)}
        disableSwipeToOpen
      >
        <div tabIndex={0} onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
          <div className={classes.list}>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </SwipeableDrawer>
    );
  }
}

SideMenu.displayName = 'SideMenu';

SideMenu.propTypes = {
  open: propTypes.bool.isRequired,
};

SideMenu.defaultProps = {};

export default withStyles(styles)(SideMenu);
